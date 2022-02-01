import { AliwangwangOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Input, List } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages, deleteMessage } from '../redux/messagesSlice'
import { RootState } from '../redux/store'

export const ChatComponent: React.FC<any> = () => {
	const [state, setState] = useState('')
	const chats = useSelector((state: RootState) => state.ms)
	const dispatch = useDispatch()

	return (
		<>
			<List
				style={{
					width: 'calc(100%)',
					background: '#fff2e8',
					display: 'flex',
					justifyContent: 'flex-end',
					paddingBottom: 10,
				}}
			>
				{chats.map((el, i: any) => {
					;<List.Item
						style={{
							margin: 5,
							background: '#ff7a45',
							display: 'flex',
							justifyContent: 'flex-end',
						}}
						key={i}
					>
						{el}
						<Button
							style={{
								color: 'white',
								background: '#ff7a45',
								border: 'none',
							}}
							size='small'
							icon={<DeleteOutlined />}
							onClick={e => {
								dispatch(deleteMessage(i))
							}}
						></Button>
					</List.Item>
				})}
			</List>
			<Input.Group compact>
				<Input
					style={{ width: 'calc(90%)', border: '1px solid #610b00' }}
					placeholder='Write new message here'
					onChange={e => setState(e.currentTarget.value)}
					value={state}
				/>
				<Button
					icon={<AliwangwangOutlined />}
					style={{
						width: 'calc(10%)',
						background: '#871400',
						color: 'white',
						border: '1px solid #610b00',
					}}
					onClick={() =>
						state ? dispatch(addMessages({ state })) && setState('') : null
					}
				>
					Send
				</Button>
			</Input.Group>
		</>
	)
}
