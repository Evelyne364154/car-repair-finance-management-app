import React from 'react';
import { Button, message } from 'antd'; // Added message for better alerts
import { DownloadOutlined } from '@ant-design/icons';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PDFGenerator = ({ repairs }) => {
  const generatePDF = () => {
    try {
      if (!repairs || repairs.length === 0) {
        console.warn("No repairs to export");
        message.warning("No repair records found to export.");
        return;
      }

      const doc = new jsPDF();

      // Add Logo or Header Text
      doc.setFontSize(22);
      doc.setTextColor(45, 52, 54);
      doc.text('Car Repair Report', 14, 20);

      doc.setFontSize(10);
      doc.setTextColor(99, 110, 114);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 28);

      // Add Summary Stats
      const totalAmount = repairs.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
      doc.text(`Total Records: ${repairs.length}`, 14, 35);
      doc.text(`Total Revenue: Rwf ${totalAmount.toLocaleString()}`, 14, 40);

      // Table Data
      const tableColumn = ["Date", "Car Info", "Plate", "Problem", "Solved", "Payment", "Amount"];
      const tableRows = [];

      repairs.forEach(repair => {
        const amount = Number(repair.amount) || 0;
        const carStr = repair.carYear ? `${repair.carYear} ${repair.carMark}` : repair.carMark;

        const repairData = [
          repair.date || '-',
          carStr || '-',
          repair.carPlate || '-',
          repair.problem || '-',
          repair.solvedIssues || '-',
          repair.paymentMode || '-',
          `Rwf ${amount.toLocaleString()}`
        ];
        tableRows.push(repairData);

        // Add additional details as a separate row if exists
        if (repair.additionalDetails) {
          tableRows.push([{ content: `Note: ${repair.additionalDetails}`, colSpan: 7, styles: { fontStyle: 'italic', textColor: 100 } }]);
        }
      });

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 45,
        theme: 'grid',
        styles: {
          fontSize: 9,
          cellPadding: 3,
          valign: 'middle',
          overflow: 'linebreak'
        },
        headStyles: {
          fillColor: [212, 246, 77], // Lime Green #D4F64D
          textColor: [26, 28, 30],   // Dark Text #1A1C1E
          fontStyle: 'bold',
          lineColor: [200, 200, 200],
          lineWidth: 0.1
        },
        alternateRowStyles: {
          fillColor: [248, 249, 252],
        },
      });

      doc.save(`repair_report_${Date.now()}.pdf`);
      message.success("PDF Downloaded successfully!");
    } catch (error) {
      console.error("PDF Generation Error:", error);
      message.error("Failed to generate PDF. check console.");
    }
  };

  return (
    <Button
      type="default"
      icon={<DownloadOutlined />}
      onClick={generatePDF}
      className="action-btn"
      style={{
        background: '#fff',
        border: '1px solid #e0e6f2',
        color: '#636e72',
        fontWeight: '600'
      }}
    >
      Export PDF
    </Button>
  );
};

export default PDFGenerator;