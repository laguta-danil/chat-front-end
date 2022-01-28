import { Col, Row } from 'antd'
import React from 'react'
import { ChatComponent } from './ChatComponent'
import { ChatList } from './ChatList'

export const HomePage = () => {
	return (
		<>
			<Row>
				<Col span={4}>
					<ChatList />
				</Col>
				<Col span={20}>
					<ChatComponent />
				</Col>
			</Row>
		</>
	)
}
