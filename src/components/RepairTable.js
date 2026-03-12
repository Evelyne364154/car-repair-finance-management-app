import React, { useState } from 'react';
import { Table, Button, Tooltip, Pagination, Modal, Empty, Tag } from 'antd';
import { DeleteOutlined, EyeOutlined, CarFilled, EditOutlined } from '@ant-design/icons';

function RepairTable({ repairs, onDelete, onEdit, currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) {
  const [selectedRepair, setSelectedRepair] = useState(null);

  // Calculate Statistics
  // Calculate Statistics


  const columns = [
    {
      title: 'Vehicle Info',
      dataIndex: 'carMark',
      key: 'carMark',
      render: (text, record) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: '#2d3436' }}>
            <div style={{ background: '#dfe6e9', padding: '6px', borderRadius: '50%', display: 'flex' }}>
              <CarFilled style={{ color: '#636e72', fontSize: '12px' }} />
            </div>
            {text}
          </span>
          {record.carPlate && (
            <span style={{ fontSize: '11px', color: '#636e72', marginLeft: '32px', marginTop: '2px', background: '#f1f2f6', padding: '2px 6px', borderRadius: '4px', width: 'fit-content' }}>
              {record.carPlate}
            </span>
          )}
        </div>
      ),
    },
    {
      title: 'Year',
      dataIndex: 'carYear',
      key: 'carYear',
      render: (text) => <span style={{ color: '#636e72' }}>{text || '-'}</span>,
      responsive: ['md'],
    },
    {
      title: 'Problem',
      dataIndex: 'problem',
      key: 'problem',
      render: (text) => (
        <Tooltip title={text}>
          <span className="text-truncate" style={{ maxWidth: '120px' }}>{text}</span>
        </Tooltip>
      ),
      responsive: ['lg'],
    },
    {
      title: 'Solved Issues',
      dataIndex: 'solvedIssues',
      key: 'solvedIssues',
      render: (text, record) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <Tag color={text === 'Cash' ? 'green' : text === 'Mobile Money' ? 'blue' : 'orange'}>
            {text || 'N/A'}
          </Tag>
          {record.accountNumber && (
            <span style={{ fontSize: '10px', color: '#666' }}>{record.accountNumber}</span>
          )}
        </div>
      ),
      responsive: ['lg'],
    },
    {
      title: 'Payment',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
      render: (text) => (
        <Tag color={text === 'Cash' ? 'green' : text === 'Mobile Money' ? 'blue' : 'orange'}>
          {text || 'N/A'}
        </Tag>
      ),
      responsive: ['md'],
    },
    {
      title: 'Notes',
      dataIndex: 'additionalDetails',
      key: 'additionalDetails',
      render: (text) => (
        <Tooltip title={text}>
          <span className="text-truncate" style={{ maxWidth: '100px', color: '#888', fontStyle: 'italic' }}>
            {text || '-'}
          </span>
        </Tooltip>
      ),
      responsive: ['xl'],
    },
    {
      title: 'Amount (Rwf)',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <span className="amount-cell">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RWF' }).format(amount)}
        </span>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      responsive: ['sm'],
      render: (date) => <span style={{ fontSize: '12px', color: '#b2bec3' }}>{date}</span>,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tooltip title="View Details">
            <Button
              icon={<EyeOutlined />}
              onClick={() => setSelectedRepair(record)}
              className="action-btn"
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
              className="action-btn"
              style={{ color: '#F5C64F', borderColor: '#F5C64F' }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete(record.id)}
              className="action-btn delete"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Stats Cards within Table Area for better context */}
      {/* NOTE: We might want these outside, but for now putting them top of table is fine */}

      {repairs.length > 0 ? (
        <>
          <Table
            className="custom-table"
            columns={columns}
            dataSource={repairs}
            pagination={false}
            rowKey="id"
            rowClassName={(record, index) => index % 2 === 0 ? 'even-row' : 'odd-row'}
          />

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <Pagination
              current={currentPage}
              total={totalItems}
              pageSize={itemsPerPage}
              onChange={onPageChange}
              showSizeChanger={false}
            />
          </div>
        </>
      ) : (
        <div className="empty-state">
          <Empty description="No repair records yet. Add one to get started!" />
        </div>
      )}

      {/* Details Modal */}
      <Modal
        title="🔧 Repair Details"
        open={!!selectedRepair}
        onCancel={() => setSelectedRepair(null)}
        footer={[
          <Button key="close" onClick={() => setSelectedRepair(null)}>
            Close
          </Button>
        ]}
      >
        {selectedRepair && (
          <div className="modal-content">
            <div className="detail-item">
              <span className="label">Vehicle:</span>
              <span className="value" style={{ fontWeight: 'bold' }}>
                {selectedRepair.carYear ? `${selectedRepair.carYear} ` : ''}
                {selectedRepair.carMark}
              </span>
            </div>
            {selectedRepair.carPlate && (
              <div className="detail-item">
                <span className="label">Plate No:</span>
                <span className="value">{selectedRepair.carPlate}</span>
              </div>
            )}
            <div className="detail-item">
              <span className="label">Date:</span>
              <span className="value">{selectedRepair.date}</span>
            </div>
            <div className="detail-item">
              <span className="label">Amount:</span>
              <span className="value" style={{ color: '#00b894', fontWeight: 'bold' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'RWF' }).format(selectedRepair.amount)}
              </span>
            </div>

            <div className="detail-block">
              <span className="label">Problem Description</span>
              <p className="block-value">{selectedRepair.problem}</p>
            </div>

            <div className="detail-block">
              <span className="label">Solved Issues</span>
              <p className="block-value" style={{ borderLeftColor: '#52c41a' }}>{selectedRepair.solvedIssues}</p>
            </div>

            {selectedRepair.additionalDetails && (
              <div className="detail-block">
                <span className="label">Additional Details</span>
                <p className="block-value" style={{ borderLeftColor: '#d63031', background: '#fff5f5' }}>
                  {selectedRepair.additionalDetails}
                </p>
              </div>
            )}

            {selectedRepair.paymentMode && (
              <div className="detail-item" style={{ marginTop: '12px', borderTop: '1px solid #f0f0f0', paddingTop: '12px' }}>
                <span className="label">Payment Mode:</span>
                <div style={{ textAlign: 'right' }}>
                  <Tag color="blue">{selectedRepair.paymentMode}</Tag>
                  {selectedRepair.accountNumber && (
                    <div style={{ fontSize: '12px', color: '#636e72', marginTop: '4px' }}>
                      Acc: {selectedRepair.accountNumber}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

export default RepairTable;