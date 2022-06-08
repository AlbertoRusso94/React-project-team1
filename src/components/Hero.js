import "./Hero.css";
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title } = Typography;

const Hero = () => {
    return (
        <> <Row justify="space-between" align="middle" gutter={[16, 32]}>
            <Col span={22} offset={2} order={2} md={{ span: 10, order:1 }}>
            <Title>THE ONLY DONE FOR YOU OPTION PICKER</Title>
            <Title level={4}>Get trade alerts. Cancel anytime.</Title>
            <Title level={5}>Enter your email to create or restart your membership</Title>
                <Row align="middle" gutter={[16, 8]}>
                    <Col><input type={'email'} placeholder={'Email'} /></Col>
                    <Col><Button type="primary" danger>Get Started</Button></Col>
                </Row>
            </Col>
            <Col span={22} offset={2} order={1} md={{ span: 10, order:2 }}>
            <img src="https://www.optionsfy.com/static/media/landing_image.3ea624b6.png" alt="hero-img" className="hero-img"/>
            </Col>
            </Row> 
        </>
    )
  };
  
  export default Hero;