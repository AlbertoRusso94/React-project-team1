import Lottie from 'lottie-react';
import tradingAnim from '../../imgs/trading.json';
import personAnim from '../../imgs/persontrading.json';
import speedAnim from '../../imgs/pocketrocket.json';
import AIAnim from '../../imgs/ai.json';
import virtualAnim from '../../imgs/virtual.json';
import './Tab.css';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


export const Tab = () => {
  // const [key, setKey] = useState(1);
  const [left, setLeft] = useState(100);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (key >= 5) {
  //       setKey(1);
  //       setLeft(85);
  //     } else {
  //       setKey((prevState) => +prevState + 1);
  //       setLeft(100 - ((key + 1) * 20 - 5));
  //     }
  //   }, 12000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [key]);

  useEffect(() => {
    setLeft(85);
  }, []);

  const handleChange = (key) => {
    // setKey(key);
    setLeft(100 - ((+key + 1) * 20 - 5));
  };

  return (
    <div className="tabContainer">
      <div className="gradientBg" style={{ left: `${left}%` }} />
      <Row>
        <Col span={24} className="colTabs">
          <Tabs
            defaultActiveKey="1"
            // activeKey={key.toString()}
            onChange={handleChange}
            centered
            style={{ color: '#eee', marginTop: '3rem' }}
          >
            <TabPane tab="Why Us?" key="1" className="d-flex" id="tab-1">
              <div className="text-left">
                <div className="contentContainer">
                  <div className="widthAnimation">
                    <Lottie animationData={tradingAnim} loop={true} />
                  </div>
                  <div className="textTabs">
                  <span>Why us?</span>
                  <p>
                    Speed means everything in trading. With perfectly timed<br></br>
                    notifications to place<br></br> 
                    winning trades ahead of your
                    competition,<br></br> 
                    never miss another opportunity with all the
                    best option trades<br></br> 
                    delivered daily to your inbox at market
                    open.
                  </p>

                  </div>
                  <div>

                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane
              tab="Competitive Advantage of AI"
              key="2"
              className="d-flex"
            >
              <div className="text-left">
                <div className="contentContainer">
                  <div className="textTabs">
                  <span>Competitive Advantage of<br></br>Artificial Intelligence</span>
                  <p>
                    Harness the power of industry leading A.I. backed
                    algorithms.<br></br> 
                    Similar algorithms the top hedge funds use are<br></br>
                    now at your fingertips. Our<br></br> 
                    HotScore technology aggregates
                    data from multiple sources<br></br> 
                    to quickly and clearly show you<br></br>
                    the best options to trade all DONE FOR YOU.
                  </p>
                  </div>
                  <div className="widthAnimation">
                    <Lottie animationData={AIAnim} loop={true} />
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Speed & Time " key="3" className="d-flex" id="tab-3">
              <div className="text-left">
                <div className="contentContainer">
                  <div className="widthAnimation">
                    <Lottie animationData={speedAnim} loop={true} />
                  </div>
                  <div className="textTabs">
                  <span>Speed & Time are at our Core</span>
                  <p>
                    Speed means everything in trading. With perfectly timed<br></br>
                    notifications to place<br></br> 
                    winning trades ahead of your
                    competition,<br></br> 
                    never miss another opportunity with all the
                    best option trades<br></br> 
                    delivered daily to your inbox at market
                    open.
                  </p>

                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Built in Options" key="4" className="d-flex">
              <div className="text-left">
                <div className="contentContainer">
                <div>
                <div className="textTabs">
                    <span>Built in Options Chain Scanning</span>
                    <p>
                      Overwhelmed by varying strike prices and<br></br> 
                      which options to
                      buy? We scan the entire options chain<br></br> 
                      so you don’t have to,
                      researching each possible trade<br></br> 
                      ahead of time and recommend
                      you the best plays
                    </p>

                </div>

                </div>
                  <div className="widthAnimation">
                    <Lottie animationData={virtualAnim} loop={true} />
                  </div>
                </div>
              </div>
            </TabPane>

            <TabPane
              tab="Powerful for Beginners"
              key="5"
              className="d-flex"
              id="tab-5"
            >
              <div className="text-left">
                <div className="contentContainer">
                  <div className="widthAnimation">
                    <Lottie animationData={personAnim} loop={true}/>
                  </div>
                  <div className="textTabs">
                  <span>Powerful for Beginners & Seasoned<br></br> Professionals alike</span>
                  <p>
                    Whether you are just starting your<br></br> 
                    journey with options or
                    work on the street yourself,<br></br> 
                    our tools are easy enough to
                    use starting on day 1 and<br></br> 
                    give you the competitive knowledge
                    learned from years<br></br> of trial & error.
                  </p>

                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
