import "./Footer.css";
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';

const Footer = () => {
  return (
    <>
      <Row justify="space-between" align="middle">
        <Col span={23} offset={1} md={{ span: 8, offset: 1 }}>
          <img src="https://www.optionsfy.com/static/media/oLogo.89f9797f.png" className="img-logo" alt="logo" />
          <p>power your alpha</p>
        </Col>

        <Col span={23} offset={1} md={{ span: 10 }}>
          <Row gutter={[8, 16]}>
            <Col><a href="#" className="footer-links">TERMS OF SERVICE</a></Col>
            <Col><a href="#" className="footer-links">PRIVACY POLICY</a></Col>
            <Col><a href="#" className="footer-links">DISCLAIMER</a></Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={23} offset={1}>
          <p className="disclaimer">Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info <a href="#" className="footer-links">here</a></p>
        </Col>
      </Row>
    </>
  )
};

export default Footer;
