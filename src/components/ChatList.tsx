import { useDispatch, useSelector } from 'react-redux';
import { List, Typography, Button, Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css'; 
import { RootState, AppDispatch } from '../redux/store';
import { addChat, ChatState } from '../redux/chatSlice';
import { useState } from 'react';

export const ChatList = () => {

    const {Text} = Typography;

    const [title, setTitle] = useState('');

    const chats = useSelector((state: RootState) => state.chat);

    const dispatch = useDispatch();
  
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
      <div >
          <List
      size="small"
      header={<div>Chats</div>}
      bordered
      dataSource={chats}
      renderItem={item => <List.Item><Text>{item.title}</Text></List.Item>}
    />
    <Button type="primary" block onClick={showModal}>Add chat</Button>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Chat name"
        name="chatname"
      >
        <Input onChange={(e)=>setTitle(e.currentTarget.value)}/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' onClick={()=>dispatch(addChat({title}))}>Add chat</Button>
      </Form.Item>
    </Form>
      </Modal>
      </div>
    )
  }