import React from 'react';
import './Tab.css';
import { Col, Row } from 'antd';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export class Tab extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <Tabs
              defaultActiveKey="1"
              centered
              style={{ color: '#eee', marginTop: '3rem' }}
            >
              <TabPane tab="Why Us?" key="1" className="d-flex" id="tab-1">
                <div className="text-left">
                  <h1>Why Us?</h1>
                  <h3>
                    Ex-traders building the best option AI algorithm, which
                    makes large profits in minutes a day. We are ex-quants with
                    combined 37 years of experience. Optionsfy software picks
                    the ticker, strikes and expiration dates for you so you can
                    profit without the long guesswork. It's powered by an
                    algorithm fed with 10 years of data and 10 factors proven to
                    work. Optionsfy saves you time and makes you more profitable
                    with high return, consistent trades in minutes in ALL MARKET
                    ENVIRONMENTS.
                  </h3>
                </div>

                {/* <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div> */}
              </TabPane>

              <TabPane
                tab="Competitive Advantage of AI"
                key="2"
                className="d-flex"
              >
                <div className="text-left">
                  <h1>Competitive Advantage of Artificial Intelligence</h1>
                  <h3>
                    Harness the power of industry leading A.I. backed
                    algorithms. Similar algorithms the top hedge funds use are
                    now at your fingertips. Our HotScore technology aggregates
                    data from multiple sources to quickly and clearly show you
                    the best options to trade all DONE FOR YOU.
                  </h3>
                </div>

                {/* <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div> */}
              </TabPane>

              <TabPane
                tab="Speed & Time "
                key="3"
                className="d-flex"
                id="tab-3"
              >
                <div className="text-left">
                  <h1>Speed & Time are at our Core</h1>
                  <h3>
                    Speed means everything in trading. With perfectly timed
                    notifications to place winning trades ahead of your
                    competition, never miss another opportunity with all the
                    best option trades delivered daily to your inbox at market
                    open.
                  </h3>
                </div>

                {/* <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div> */}
              </TabPane>

              <TabPane tab="Built in Options" key="4" className="d-flex">
                <div className="text-left">
                  <h1>Built in Options Chain Scanning</h1>
                  <h3>
                    Overwhelmed by varying strike prices and which options to
                    buy? We scan the entire options chain so you don’t have to,
                    researching each possible trade ahead of time and recommend
                    you the best plays
                  </h3>
                </div>

                {/* <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div> */}
              </TabPane>

              <TabPane
                tab="Powerful for Beginners"
                key="5"
                className="d-flex"
                id="tab-5"
              >
                <div className="text-left">
                  <h1>Powerful for Beginners & Seasoned Professionals alike</h1>
                  <h3>
                    Whether you are just starting your journey with options or
                    work on the street yourself, our tools are easy enough to
                    use starting on day 1 and give you the competitive knowledge
                    learned from years of trial & error.
                  </h3>
                </div>

                {/* <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div> */}
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </>
    );
  }
}
