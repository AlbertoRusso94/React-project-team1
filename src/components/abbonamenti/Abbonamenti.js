import './Abbonamenti.css';
import { Card, Button } from 'antd';
import { CheckSquareTwoTone } from '@ant-design/icons';

const Abbonamenti = () => (
  <div className="abbContainer">
    <Card className="card" id="card1" style={{ border: '3px solid #00ADB5' }}>
      <h1>
        Only <strong>$67</strong> /month
      </h1>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        <strong>Daily </strong> &nbsp;options recommendations
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        Suggested&nbsp; <strong> strike prices </strong> &nbsp;for each symbol
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        8 recommended options&nbsp; <strong>strategies</strong>
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        <strong>Grading</strong>&nbsp;system for better options trading
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        Proprietary&nbsp; <strong>indicators</strong>
      </p>
      <div className="btnCardCont">
        <Button
          style={{
            color: '#eee',
            padding: '2rem 4rem',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
          size="large"
          className="btnStandard"
          type="primary"
        >
          Subscribe Now
        </Button>
      </div>
    </Card>
    <Card className="card" style={{ border: '3px solid #ff4d4f' }}>
      <h1>
        Only <strong>$670</strong> /year
      </h1>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        <strong>Daily</strong>&nbsp; options recommendations
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        Suggested &nbsp;<strong>strike prices</strong> &nbsp;for each symbol
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        8 recommended options &nbsp;<strong>strategies</strong>&nbsp;
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        <strong>Grading</strong> &nbsp;system for better options trading
      </p>
      <p>
        <CheckSquareTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: '1.4rem', marginRight: '0.5rem' }}
        />
        Proprietary &nbsp;<strong>indicators</strong>
      </p>
      <div className="btnCardCont">
        <Button
          style={{
            color: '#eee',
            padding: '2rem 4rem',
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '1.5rem',
          }}
          size="large"
          className="btnStandard"
          type="primary"
          danger
        >
          Subscribe Now
        </Button>
      </div>
    </Card>
  </div>
);

export default Abbonamenti;
