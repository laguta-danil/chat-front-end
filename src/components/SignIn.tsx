import { Form, Input, Button } from 'antd'
import { useState } from 'react'

export const SignIn = () => {
	const [state, setState] = useState()

	const onFinish = (values: any) => {
		console.log('Success:', values)
		setState(values)
	}
	console.log(state)

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	const handleSubmitReg = () => {
		console.log('click on submit Reg')
	}

	return (
		<Form
			name='login'
			className='login-form'
			labelCol={{ span: 6 }}
			wrapperCol={{ span: 12 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<h2>Sign in</h2>
			<Form.Item
				label='Username'
				name='username'
				rules={[
					{
						required: true,
						message: 'The name is required.',
					},
					{
						pattern: /^[a-zA-Z0-9]+$/,
						message: 'Name can only include letters and numbers.',
					},
				]}
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
