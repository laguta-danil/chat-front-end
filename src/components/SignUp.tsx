import { Form, Input, Button, Checkbox } from 'antd'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector, useStore } from 'react-redux'
import { userSelector } from '../redux/userSlice'


export const SignUp = () => {
	const [state, setState] = useState()

	
	const onFinish = (values: any) => {
		console.log('Success:', values)
		setState(values)
	}
	console.log(state)

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	const dispatch = useDispatch()
	
	const handleSubmitReg = () => {
		console.log('click on submit Reg')
	}


	return (
		<Form
			name='register'
			className='register-form'
			labelCol={{ span: 6 }}
			wrapperCol={{ span: 12 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<h2>Sign up</h2>
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

			<Form.Item
				label='ConfirmPassword'
				name='confirmPassword'
				rules={[
					{ required: true, message: 'Please confirm your password!' },
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve()
							}
							return Promise.reject(
								new Error('The two passwords that you entered do not match!')
							)
						},
					}),
				]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 6, span: 12 }}>
				<Button type='primary' htmlType='submit' onSubmit={handleSubmitReg}>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
