import React, { useState } from 'react';
import { Layout, Typography, Row, Col, message } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import CarForm from './CarForm';
import RepairTable from './RepairTable';
import '../styles/App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [repairs, setRepairs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const addRepair = (newRepair) => {
    const repairWithId = {
      ...newRepair,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    };
    setRepairs([repairWithId, ...repairs]); // Add new item at start
    message.success('✅ Repair record saved successfully!');
    setCurrentPage(1); // Reset to first page
  };

  const deleteRepair = (id) => {
    setRepairs(repairs.filter(repair => repair.id !== id));
    message.success('🗑️ Record deleted!');
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = repairs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(repairs.length / itemsPerPage);

  // Calculate statistics
  const totalAmount = repairs.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);

  return (
    <Layout className="app-container">
      <Header className="app-header">
        <div className="header-content">
          <CarOutlined className="header-icon" />
          <Title level={2} style={{ color: 'white', margin: 0 }}>
            Car Repair Manager
          </Title>
        </div>
      </Header>
      
      <Content className="app-content">
        <Row gutter={[24, 24]} className="main-row">
          {/* Form Section - Left Side */}
          <Col xs={24} sm={24} md={12} lg={10}>
            <div className="form-section">
              <div className="section-header">
                <h3>📝 Add New Repair</h3>
                <span className="badge">{repairs.length} Records</span>
              </div>
              <CarForm onAddRepair={addRepair} />
            </div>
          </Col>
          
          {/* Table Section - Right Side */}
          <Col xs={24} sm={24} md={12} lg={14}>
            <div className="table-section">
              <div className="section-header">
                <h3>📊 Repair Records</h3>
                <div className="stats-badge">
                  <span className="stat-item">
                    <strong>${totalAmount.toFixed(2)}</strong> Total
                  </span>
                </div>
              </div>
              <RepairTable 
                repairs={currentItems}
                onDelete={deleteRepair}
                allRepairs={repairs}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                itemsPerPage={itemsPerPage}
                totalItems={repairs.length}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;