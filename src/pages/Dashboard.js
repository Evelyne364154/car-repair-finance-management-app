import React from 'react';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const { Title, Text } = Typography;

const Dashboard = ({ user, repairs }) => {
    const navigate = useNavigate();
    // Determine greeting
    const hour = new Date().getHours();
    let greeting = 'Good Morning';
    if (hour >= 12 && hour < 17) greeting = 'Good Afternoon';
    else if (hour >= 17) greeting = 'Good Evening';

    // Calculate Real Stats
    const totalRepairs = repairs.length;
    const totalSpent = repairs.reduce((acc, curr) => acc + (Number(curr.amount) || 0), 0);
    const lastRepairDate = repairs.length > 0 ? repairs[0].date : 'N/A';

    // Format Money
    const formattedSpent = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'RWF',
        maximumSignificantDigits: 3
    }).format(totalSpent);

    return (
        <div className="dashboard-container">
            {/* Header */}
            <div className="dashboard-header">
                <div>
                    <Text style={{ color: '#888', fontSize: '14px', letterSpacing: '0.5px' }}>{greeting}</Text>
                    <Title level={2} style={{ margin: '4px 0 0 0', fontWeight: 800, color: '#1A1C1E' }}>
                        {user?.username || 'User'}
                    </Title>
                </div>
                {/* <div style={{ background: 'white', padding: '10px', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                    <BellFilled style={{ fontSize: '20px', color: '#1A1C1E' }} />
                </div> */}
            </div>

            {/* Gauge / Efficiency Section */}
            <div className="gauge-container">
                <div className="gauge-circle-outer">
                    <div className="gauge-value-wrapper">
                        <span className="gauge-speed">{totalRepairs}</span>
                        <span className="gauge-unit">Total Repairs</span>
                    </div>
                    {/* Decorative Ring (CSS Border) */}
                    <div style={{
                        position: 'absolute',
                        top: '10px', left: '10px', right: '10px', bottom: '10px',
                        borderRadius: '50%',
                        border: '20px solid #F5F7FA',
                        borderTopColor: '#D4F64D', // Lime Green Accent
                        transform: 'rotate(-45deg)',
                        zIndex: -1
                    }} />
                    <div className="fuel-indicator">
                        <span style={{ fontSize: '24px', marginRight: '4px' }}>⚡</span>
                        <span>Active</span>
                    </div>
                </div>
            </div>

            {/* Stats Cards Row - Re-styled */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '30px' }}>
                <div style={{
                    background: '#1A1C1E', // Dark Card
                    borderRadius: '24px',
                    padding: '20px',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '8px' }}>Total Revenue</div>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#D4F64D' }}>{formattedSpent}</div>
                        <div style={{ fontSize: '10px', marginTop: '4px', opacity: 0.5 }}>All time earnings</div>
                    </div>
                    {/* Background pattern */}
                    <div style={{
                        position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px',
                        background: 'radial-gradient(circle, rgba(212,246,77,0.2) 0%, rgba(255,255,255,0) 70%)',
                        borderRadius: '50%'
                    }} />
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: '24px',
                    padding: '20px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>Last Activity</div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#2d3436' }}>{lastRepairDate}</div>
                    <div style={{ fontSize: '10px', color: '#00b894', marginTop: '4px' }}>● System Online</div>
                </div>
            </div>

            {/* Quick Navigation / Controls */}
            <div style={{ background: 'white', borderRadius: '30px', padding: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <Title level={5} style={{ margin: 0 }}>Quick Actions</Title>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div
                        onClick={() => navigate('/repairs')}
                        style={{
                            background: '#F8F9FA', borderRadius: '16px', padding: '16px',
                            textAlign: 'center', cursor: 'pointer', transition: '0.2s'
                        }}
                    >
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔧</div>
                        <div style={{ fontSize: '13px', fontWeight: 600 }}>New Repair</div>
                    </div>
                    <div
                        onClick={() => navigate('/repairs', { state: { scrollTo: 'history' } })}
                        style={{
                            background: '#F8F9FA', borderRadius: '16px', padding: '16px',
                            textAlign: 'center', cursor: 'pointer', transition: '0.2s'
                        }}
                    >
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
                        <div style={{ fontSize: '13px', fontWeight: 600 }}>Reports</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
