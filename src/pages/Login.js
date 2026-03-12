import React from 'react';
import { Button, Form, Input, Typography, message } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const { Title, Text } = Typography;

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        const { identifier, password } = values;

        // 1. Get registered users
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

        // 2. Find user matching email OR username AND password
        const user = existingUsers.find(u =>
            (u.email === identifier || u.username === identifier) && u.password === password
        );

        if (user) {
            message.success('Login Successful!');
            onLogin(user); // Update App state
            navigate('/dashboard');
        } else {
            message.error('Invalid Credentials. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                {/* Top Image Area */}
                <div className="car-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="Car"
                        className="auth-car-img"
                    />
                </div>

                {/* Bottom Content Area */}
                <div className="auth-content">
                    <Title level={2} className="auth-title">Welcome Back</Title>
                    <Text className="auth-subtitle">
                        Please enter your details to sign in
                    </Text>

                    <Form
                        name="login_form"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                        style={{ marginTop: '24px' }}
                    >
                        <Form.Item
                            name="identifier"
                            label="Email or Username"
                            rules={[{ required: true, message: 'Please input your Email or Username!' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Enter email or username"
                                className="auth-input"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Password"
                                className="auth-input"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>

                        <div style={{ textAlign: 'right', marginBottom: '24px' }}>
                            <Link to="/forgot-password" style={{ color: '#1890ff' }}>Forgot Password?</Link>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="auth-submit-btn" block>
                                Log In
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: 'center' }}>
                            <Text>Don't have an account? <Link to="/signup">Sign up</Link></Text>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
