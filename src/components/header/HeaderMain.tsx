import { PageHeader, Button } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./index.css";
import Text from "antd/lib/typography/Text";

export const HeaderMain = () => {
  return (
    // <div style={{ }}>
    //   <PageHeader
    //     className="site-page-header"
    //     title={
    //       <Avatar
    //         src="https://joeschmoe.io/api/v1/random"
    //         size="large"
    //         icon={<UserOutlined />}
    //       />
    //     }
    //     extra={[
    //       <Button key="3">Sign In</Button>,
    //       <Button key="2">Sign Up</Button>,
    //       <Button key="1" type="primary">
    //         Exit
    //       </Button>,
    //     ]}
    //     subTitle="IT"

    //   />
    // </div>
    <>
      <Row style={{padding:10}}>
        <Col span={12} style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: 25}} >
          <Avatar
            src="https://joeschmoe.io/api/v1/random"
            size="large"
            icon={<UserOutlined />}
          />
          <Text style={{display: 'flex', alignItems: 'center', paddingLeft: 20}} > NeTelegramm </Text>
        </Col>  
      <Col span={12} style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 25}}>
      <Button key="3">Sign In</Button>
         <Button key="2">Sign Up</Button>
          <Button key="1" type="primary">
            Exit
       </Button>
      </Col>
    </Row>
    </>
  );
};
