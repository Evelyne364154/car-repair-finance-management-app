import React from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/App.css';

const { Title, Text } = Typography;

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    const onFinish = (values) => {
        // 1. Get existing users
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

        // 2. Find and update user
        const updatedUsers = existingUsers.map(user => {
            if (user.email === email) {
                return { ...user, password: values.password };
            }
            return user;
        });

        // 3. Save back to localStorage
        localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

        message.success('Password reset successfully! Please login.');
        navigate('/login');
    };

    if (!email) {
        return (
            <div className="auth-container">
                <div className="auth-card" style={{ textAlign: 'center' }}>
                    <Title level={4} type="danger">Invalid Link</Title>
                    <p>Please request a new reset link.</p>
                    <Button onClick={() => navigate('/forgot-password')}>Go Back</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="auth-container">
            <div className="auth-card" style={{ maxWidth: '400px', padding: '40px' }}>
                <Title level={2} className="auth-title">Reset Password</Title>
                <Text className="auth-subtitle">Create a new password for <strong>{email}</strong></Text>

                <Form
                    name="reset_password_form"
                    className="login-form"
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ marginTop: '24px' }}
                >
                    <Form.Item
                        name="password"
                        label="New Password"
                        rules={[
                            { required: true, message: 'Please input your new Password!' },
                            { min: 6, message: 'Password must be at least 6 characters' }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="New Password"
                            className="auth-input"
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label="Confirm New Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Confirm New Password"
                            className="auth-input"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="auth-submit-btn" block>
                            Change Password
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ResetPassword;
