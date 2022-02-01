import { Button } from 'antd'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import './index.css'
import Text from 'antd/lib/typography/Text'
import { Link } from 'react-router-dom'

export const HeaderMain = () => {
	return (
		<>
			<Row style={{ padding: 10, background: '#e6f7ff' }}>
				<Col
					span={12}
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						paddingLeft: 25,
					}}
				>
					<Link to='/'>
						<Avatar
							src='https://joeschmoe.io/api/v1/random'
							size='large'
							icon={<UserOutlined />}
						/>
					</Link>
					<Text
						style={{ display: 'flex', alignItems: 'center', paddingLeft: 20 }}
					>
						{' '}
						NeTelegramm{' '}
					</Text>
				</Col>
				<Col
					span={12}
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingRight: 25,
					}}
				>
					<Link to='/signin'>
						<Button key='3'>Sign In</Button>
					</Link>
					<Link to='/signup'>
						<Button key='2'>Sign Up</Button>
					</Link>
					<Button key='1' type='primary'>
						Exit
					</Button>
				</Col>
			</Row>
		</>
	)
}
