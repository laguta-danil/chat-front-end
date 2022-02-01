import { useDispatch, useSelector } from "react-redux";
import { List, Typography, Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";
import { RootState } from "../redux/store";
import {
  ChatState,
  fetchChats,
  addNewChat,
  deleteChatById,
} from "../redux/chatSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ChatList = () => {
  const [textData, setChatData] = useState({
    name: "",
    users: [],
    messages: [],
  });

  const { Text } = Typography;

  const chats = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let params = useParams();

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
    <div>
      <List
        size="small"
        header={<div>Chats</div>}
        bordered
        dataSource={chats}
        renderItem={(item) => (
          <Link to={`/chat/${item._id}`}>
            <List.Item key={item._id}>
              <Text>{item.name}</Text>
              <Button
                type="primary"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  dispatch(deleteChatById(item._id));
                  if (params.id == item._id) {
                    navigate("/");
                  }
                }}
              >
                X
              </Button>
            </List.Item>
          </Link>
        )}
      />
      <Button type="primary" block onClick={showModal}>
        Add chat
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Form.Item label="Chat name">
            <Input
              value={textData.name}
              onChange={(e) =>
                setChatData({ ...textData, name: e.currentTarget.value })
              }
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              onClick={() => {
                dispatch(addNewChat(textData));
                setChatData({ ...textData, name: "", users: [], messages: [] });
              }}
            >
              Add chat
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
