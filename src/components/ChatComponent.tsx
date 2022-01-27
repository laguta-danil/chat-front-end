import { AliwangwangOutlined } from "@ant-design/icons";
import { Button, Input, List } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../redux/messagesSlice";
import { RootState } from "../redux/store";

export const ChatComponent = () => {
  const [state, setState] = useState("");
  const messages = useSelector((state: RootState) => state.ms);
  const dispatch = useDispatch();

  console.log(messages);
  return (
    <>
      <List
        style={{
          width: "calc(100%)",
          background: "#fff2e8",
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: 10,
        }}
      >
        {messages.map((el, i) => {
          return (
            <List.Item
              style={{
                margin: 5,
                background: "#ff7a45",
                display: "flex",
                justifyContent: "flex-end",
              }}
              key={i}
            >
              {el.message}
            </List.Item>
          );
        })}
      </List>
      <Input.Group compact>
        <Input
          style={{ width: "calc(90%)", border: "1px solid #610b00" }}
          placeholder="Write new message here"
          onChange={(e) => setState(e.currentTarget.value)}
        />
        <Button
          icon={<AliwangwangOutlined />}
          style={{
            width: "calc(10%)",
            background: "#871400",
            color: "white",
            border: "1px solid #610b00",
          }}
          onClick={() => dispatch(addMessages(state))}
        >
          Send
        </Button>
      </Input.Group>
    </>
  );
};
