import React from 'react'
import {Form, Input, Button, Checkbox} from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import './login.less'

const Item = Form.Item

export default class Login extends React.Component {
	onFinish = values => {
		console.log('Received values of form: ', values)
	}

	render() {
		return (
			<div className="login">
				<section className="login-content">
					<h2>用户登录</h2>
					<Form name="normal_login" className="login-form" initialValues={{remember: true}} onFinish={this.onFinish}>
						<Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
						</Item>
						<Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
							<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
						</Item>
						<Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Item>
					</Form>
				</section>
			</div>
		)
	}
}

/**
 * 1. 前台表单验证(4-12位, 由数字下划线)
 * 2. 收集表单数据
 * 3.
 */
