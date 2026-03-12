import React from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const { Title, Text } = Typography;

const Signup = ({ onLogin }) => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        // 1. Get existing users
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

        // 2. Check if user exists
        const userExists = existingUsers.some(u => u.email === values.email || u.username === values.username);
        if (userExists) {
            message.error('User with this email or username already exists!');
            return;
        }

        // 3. Create new user object
        const newUser = {
            username: values.username,
            email: values.email,
            password: values.password // In a real app, hash this!
        };

        // 4. Save to localStorage
        localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, newUser]));

        message.success('Account created successfully!');

        // 5. Auto login
        onLogin(newUser);
        navigate('/dashboard');
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="car-image-container">
                    <div className="car-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Supercar" className="auth-car-img" />
                </div>

                <div className="auth-content">
                    <Title level={2} className="auth-title">Create Account</Title>
                    <Text className="auth-subtitle">Join us to manage your car repairs efficiently</Text>

                    <Form
                        name="signup_form"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                        style={{ marginTop: '24px' }}
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Please input your Email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" className="auth-input" />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" className="auth-input" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                { required: true, message: 'Please input your Password!' },
                                { min: 6, message: 'Password must be at least 6 characters' }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                                className="auth-input"
                            />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                { required: true, message: 'Please confirm your password!' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Confirm Password"
                                className="auth-input"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="auth-submit-btn" block>
                                Sign Up
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: 'center' }}>
                            <Text>Already have an account? <Link to="/login">Log in</Link></Text>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
