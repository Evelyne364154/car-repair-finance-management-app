import React, { useState } from 'react';
import { Button, Input, Form, message, Modal } from 'antd';
import { UserOutlined, MailOutlined, LogoutOutlined, SaveOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Profile = ({ user, onLogout, onUpdateUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleLogout = () => {
        Modal.confirm({
            title: 'Logout',
            content: 'Are you sure you want to log out?',
            okText: 'Logout',
            cancelText: 'Cancel',
            onOk: () => {
                onLogout();
                navigate('/login');
                message.success('Logged out successfully');
            }
        });
    };

    const handleUpdate = (values) => {
        // In a real app, this would be an API call
        const updatedUser = { ...user, ...values };
        onUpdateUser(updatedUser); // Update App state
        setIsEditing(false);
        message.success('Profile updated successfully!');
    };

    return (
        <div className="app-container">
            <div className="app-header" style={{ justifyContent: 'center' }}>
                <h2 className="app-title" style={{ color: '#1A1C1E', margin: 0 }}>My Profile</h2>
            </div>

            <div className="app-content">
                <div className="content-wrapper" style={{ maxWidth: '400px' }}>

                    {/* Profile Card */}
                    <div className="main-card" style={{ textAlign: 'center', paddingTop: '40px' }}>
                        <div style={{
                            width: '100px', height: '100px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 100%)',
                            margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '36px', color: '#1A1C1E', border: '4px solid #fff',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }}>
                            {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
                        </div>

                        {!isEditing ? (
                            <>
                                <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>{user?.username || 'User'}</h2>
                                <p style={{ color: '#8E9296', margin: '0 0 30px' }}>{user?.email || 'user@example.com'}</p>

                                <Button
                                    type="default"
                                    icon={<EditOutlined />}
                                    onClick={() => {
                                        setIsEditing(true);
                                        form.setFieldsValue({ username: user.username, email: user.email });
                                    }}
                                    style={{ borderRadius: '20px', marginBottom: '10px' }}
                                >
                                    Edit Profile
                                </Button>
                            </>
                        ) : (
                            <Form
                                form={form}
                                onFinish={handleUpdate}
                                layout="vertical"
                                initialValues={{ username: user?.username, email: user?.email }}
                            >
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                                    <Input prefix={<UserOutlined />} placeholder="Username" className="auth-input" />
                                </Form.Item>
                                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                                    <Input prefix={<MailOutlined />} placeholder="Email" className="auth-input" />
                                </Form.Item>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Button onClick={() => setIsEditing(false)} style={{ flex: 1, borderRadius: '20px', height: '45px' }}>
                                        Cancel
                                    </Button>
                                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ flex: 1, borderRadius: '20px', height: '45px', background: 'var(--primary-color)', color: '#1A1C1E', border: 'none' }}>
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </div>

                    {/* Logout Button */}
                    <Button
                        block
                        danger
                        size="large"
                        icon={<LogoutOutlined />}
                        onClick={handleLogout}
                        style={{
                            height: '56px', borderRadius: '28px', border: 'none',
                            background: '#FFF0F0', color: '#FF4D4F', fontWeight: 'bold',
                            marginTop: '20px'
                        }}
                    >
                        Log Out
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Profile;
