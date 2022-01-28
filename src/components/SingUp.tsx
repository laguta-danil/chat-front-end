import { Button, Form, Input, Tabs } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/userSlice";
const { TabPane } = Tabs;

export const SingUp = () => {
  const [state, setState] = useState();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setState(values);
  };
  console.log(state);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // for registration
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const handleSubmitReg = () => {
    console.log("click on submit Reg");
  };

  return (
    
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="ConfirmPassword"
          name="confirm password"
          rules={[{ required: true, message: "Please confirm your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type="primary" htmlType="submit" onSubmit={handleSubmitReg}>
            Submit
          </Button>
        </Form.Item>
      </Form>
  );
};
