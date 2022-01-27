import { Col, Row } from "antd";
import React from "react";
import { ChatComponent } from "./ChatComponent";
import { ChatList } from "./ChatList";

export const HomePage = () => {

  return (
    <Row>
      <Col span={4}>
        <ChatList />
      </Col>
      <Col span={20}>
        <ChatComponent />
      </Col>
    </Row>
  );
};


{/* <Col span={12}>
<button
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>
  Increment
</button>
<span>{count}</span>
<button
  aria-label="Decrement value"
  onClick={() => dispatch(decrement())}
>
  Decrement
</button>
</Col> */}