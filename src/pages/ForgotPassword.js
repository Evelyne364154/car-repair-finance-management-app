import React, { useState } from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { MailOutlined, ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const { Title, Text } = Typography;

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [emailSent, setEmailSent] = useState(false);
    const [targetEmail, setTargetEmail] = useState('');

    const onFinish = (values) => {
        const { email } = values;

        // 1. Check if email exists
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userExists = existingUsers.some(u => u.email === email);

        if (userExists) {
            setEmailSent(true);
            setTargetEmail(email);
            message.success('Reset link sent!');
        } else {
            message.error('No account found with this email.');
        }
    };

    if (emailSent) {
        return (
            <div className="auth-container">
                <div className="auth-card" style={{ maxWidth: '400px', padding: '40px', textAlign: 'center' }}>
                    <CheckCircleOutlined style={{ fontSize: '64px', color: '#52c41a', marginBottom: '20px' }} />
                    <Title level={2} className="auth-title">Check Your Email</Title>
                    <Text>
                        We have sent a password reset link to <strong>{targetEmail}</strong>.
                    </Text>

                    <div style={{ margin: '30px 0', padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
                        <Text type="secondary" style={{ fontSize: '12px', display: 'block', marginBottom: '10px' }}>
                            (Simulation: In a real app, you would click a link in your email inbox.)
                        </Text>
                        <Button
                            type="primary"
                            ghost
                            onClick={() => navigate(`/reset-password?email=${encodeURIComponent(targetEmail)}`)}
                        >
                            Simulate "Reset Password" Link Click
                        </Button>
                    </div>

                    <Link to="/login" style={{ color: '#888' }}>Back to Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ maxWidth: '400px', padding: '40px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <Link to="/login" style={{ color: '#333' }}><ArrowLeftOutlined /> Back</Link>
                </div>

                <Title level={2} className="auth-title">Forgot Password?</Title>
                <Text className="auth-subtitle">Enter your email address to reset your password.</Text>

                <Form
                    name="forgot_password_form"
                    className="login-form"
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ marginTop: '24px' }}
                >
                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                            { required: true, message: 'Please input your Email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Enter your registered email" className="auth-input" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="auth-submit-btn" block>
                            Send Reset Link
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPassword;
