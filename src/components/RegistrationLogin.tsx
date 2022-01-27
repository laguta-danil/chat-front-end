import { Tabs } from "antd";
import { Form, Input, Button, Checkbox } from 'antd';

const{ TabPane } = Tabs;


export const RegLog = () => {

    function callback(key: any) {
        console.log(key)
    }; 

    const onFinish = (values:any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
    };
    
    return(
        <Tabs onChange={callback} type="card">

            <TabPane tab="Registration" key="1">
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
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="ConfirmPassword"
                  name="confirm password"
                  rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                  <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            <TabPane tab="Log in" key="2">
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
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

        </Tabs>
    )
}