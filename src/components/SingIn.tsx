import { Button, Form, Input, Tabs } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const SingIn = () => {
	const [state, setState] = useState()

	const onFinish = (values: any) => {
		console.log('Success:', values)
		setState(values)
	}
	console.log(state)

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<Form
			name='basic'
			labelCol={{ span: 6 }}
			wrapperCol={{ span: 12 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item
				label='Username'
				name='username'
				rules={[{ required: true, message: 'Please input your username!' }]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label='Password'
				name='password'
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 6, span: 12 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
