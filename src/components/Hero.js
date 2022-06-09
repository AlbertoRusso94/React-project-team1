import "./Hero.css";
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';
/* import { Typography } from 'antd'; */
import { Button } from 'antd';

/* const { Title } = Typography; */

const Hero = () => {
    return (
        <div className="modifyHero"> 
        <Row justify="space-between" align="middle" gutter={[16, 32]}>
            <Col className="colHero" span={22} offset={2} order={2} md={{ span: 10, order:1 }}>
            <h1 className="titleHero">THE ONLY DONE FOR YOU OPTION PICKER</h1>
{/*             <Title level={4}>Get trade alerts. Cancel anytime.</Title>
            <Title level={5}>Enter your email to create or restart your membership</Title> */}
            <p className="pHero">Get trade alerts. Cancel anytime.<br></br>
            Enter your email to create or restart your membership.</p>
                <Row align="middle" gutter={[16, 8]}>
                    <Col><input type={'email'} className="inputHero" placeholder={'Email'} /></Col>
                    <Col><Button className="btnHero" type="primary" danger>Get Started</Button></Col>
                </Row>
            </Col>
            <Col className="colHero" span={22} offset={2} order={1} md={{ span: 10, order:2 }}>
            <img src="https://www.optionsfy.com/static/media/landing_image.3ea624b6.png" alt="hero-img" className="hero-img"/>
            </Col>
        </Row> 
        </div>
    )
  };
  
  export default Hero;