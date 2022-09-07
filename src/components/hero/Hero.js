import './Hero.css';
import foto from '../../imgs/arbitrage-1.png';
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';



const { Title } = Typography;

const Hero = () => {
  return (
    <div className="heroContainer" id="Hero">
      <Row justify="space-between" align="middle" style={{ height: '100%' }} gutter={[16, 32]}>
        <Col span={22} offset={2} order={2} md={{ span: 10, order: 1 }} xs={{ order: 1 }}>
          <h1 className="titleHero">THE ONLY DONE<br></br> 
          FOR YOU OPTION<br></br> PICKER</h1>
          <h4 className="subtitleHero" level={4}>
            Get trade alerts. Cancel anytime.
          </h4>
          {/* <Title className="textHero" level={5}>
            Enter your email to create or restart your membership
          </Title>
          <Row align="middle" gutter={[16, 8]}>
            <Col>
              <input type={'email'} placeholder={'Email'} />
            </Col>
            <Col>
              <Button type="primary">Get Started</Button>
            </Col>
          </Row> */}
        </Col>
        <Col
          span={22}
          offset={2}
          order={1}
          id="col2"
          md={{ span: 10, order: 2 }}
          xs={{ order: 2 }}
          style={{ height: '100%' }}
        >
        {/*   <img src={foto} alt="foto" className="hero-img" /> */}
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
