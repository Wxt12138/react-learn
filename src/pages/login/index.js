import { Form, Input, Button, message } from 'antd';
import { MD5 } from 'crypto-js';
import { useNavigate } from 'react-router'
import { post } from '@/utils/http'
import ParticlesBg from 'particles-bg'
import { logIn } from '@/store/action/loginAction'
import { connect } from "react-redux"

const Login = (props) => {
    let navigate = useNavigate();
    const onFinish = (values) => {
        let { password } = values;
        values.password = String(MD5(password)).toUpperCase();
        post('/login', values).then((res) => {
            if (res.code == 200) {
                props.logIn(res.data.token)
                message.success('成功登录', [1], () => {
                    navigate('/home');
                });
            } else {
                message.error(res.message);
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div style={{
            width: '100%',
            height: '100%',
            // background: 'red'
        }}>
            <ParticlesBg type="circle" bg={true} />
            <div
                style={{
                    position: "absolute",
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    height: '200px',
                    background: 'rgb(198 238 245 / 51%)',
                    borderRadius: '5px',
                    padding: '30px 30px 10px 30px'
                }}
            >
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        placeholder="账号"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        placeholder="密码"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    );
};

const mapDispatchToProps = {
    logIn
}

export default connect(null, mapDispatchToProps)(Login)
