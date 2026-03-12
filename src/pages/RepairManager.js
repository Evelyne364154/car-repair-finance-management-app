import React from 'react';
import { Layout, Typography, message, Modal } from 'antd';
import { CarFilled, PlusCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import CarForm from '../components/CarForm';
import RepairTable from '../components/RepairTable';
import PDFGenerator from '../components/PDFGenerator';
import '../styles/App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function RepairManager({ repairs, setRepairs }) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [editingId, setEditingId] = React.useState(null);
    const [formInitialValues, setFormInitialValues] = React.useState(null);
    const itemsPerPage = 10;
    const navigate = useNavigate();
    const location = useLocation();
    const historyRef = React.useRef(null);

    React.useEffect(() => {
        if (location.state && location.state.scrollTo === 'history' && historyRef.current) {
            historyRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const handleFormSubmit = (values) => {
        if (editingId) {
            // Update existing
            const updatedList = repairs.map(item =>
                item.id === editingId ? { ...item, ...values } : item
            );
            setRepairs(updatedList);
            message.success('Repair record updated!');
            setEditingId(null);
            setFormInitialValues(null);
        } else {
            // Add New
            const repairWithId = {
                ...values,
                id: Date.now(),
                date: new Date().toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }),
                timestamp: new Date().toISOString()
            };
            setRepairs([repairWithId, ...repairs]);
            message.success('Repair record saved successfully!');
            setCurrentPage(1);
        }
    };

    const handleEdit = (record) => {
        setEditingId(record.id);
        setFormInitialValues(record);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to form
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormInitialValues(null);
    };

    const deleteRepair = (id) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this record?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                const updatedRepairs = repairs.filter(repair => repair.id !== id);
                setRepairs(updatedRepairs);
                message.success(' Record deleted!');
            },
        });
    };

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = repairs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(repairs.length / itemsPerPage);

    return (
        <Layout className="app-container">
            <Header className="app-header">
                <div className="header-content">
                    <ArrowLeftOutlined
                        style={{ color: 'white', fontSize: '20px', cursor: 'pointer', marginRight: '16px' }}
                        onClick={() => navigate('/dashboard')}
                    />
                    <div className="header-icon">
                        <CarFilled />
                    </div>
                    <Title level={2} className="app-title">
                        Repair Manager
                    </Title>
                </div>
            </Header>

            <Content className="app-content">
                <div className="content-wrapper">
                    {/* Main Form Card */}
                    <div className="main-card">
                        <div className="card-header">
                            <h2 className="card-title">
                                <PlusCircleFilled style={{ color: 'var(--primary-color)' }} />
                                {editingId ? 'Edit Repair Entry' : 'New Repair Entry'}
                            </h2>
                            <span className="records-badge">{repairs.length} RECORDS</span>
                        </div>

                        <CarForm
                            onAddRepair={handleFormSubmit}
                            initialValues={formInitialValues}
                            isEditing={!!editingId}
                            onCancelEdit={handleCancelEdit}
                        />
                    </div>

                    {/* Table Section */}
                    <div className="table-wrapper" ref={historyRef}>
                        <div className="card-header">
                            <h2 className="card-title">Repair History</h2>
                            {repairs.length > 0 && <PDFGenerator repairs={repairs} />}
                        </div>

                        <RepairTable
                            repairs={currentItems}
                            onDelete={deleteRepair}
                            onEdit={handleEdit}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={repairs.length}
                        />
                    </div>
                </div>
            </Content>
        </Layout>
    );
}

export default RepairManager;
