import "./Footer.css";
import 'antd/dist/antd.min.css';
import { Row, Col } from 'antd';

const Footer = () => {
  return ( 
    <>
      <Row justify="space-between" align="middle">
        <Col span={24}  md={{span:8, offset:1}}>
          <img src="https://www.optionsfy.com/static/media/oLogo.89f9797f.png" className="img-logo" alt="logo"/>
          <p>power your alpha</p>
        </Col>
        
        <Col span={24} md={{span:8}}>
          <Row gutter={[8, 16]}>
            <Col><a href="https://www.optionsfy.com/terms-of-services" className="footer-links">TERMS OF SERVICE</a></Col>
            <Col><a href="https://www.optionsfy.com/privacy-policy" className="footer-links">PRIVACY POLICY</a></Col>
            <Col><a href="https://www.optionsfy.com/disclaimer" className="footer-links">DISCLAIMER</a></Col>
          </Row>
        </Col>
      </Row>
        
        
      
      
      <p>Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info <a href="https://www.optionsfy.com/disclaimer" className="footer-links">here</a></p>
    </>
  )
};

export default Footer;
