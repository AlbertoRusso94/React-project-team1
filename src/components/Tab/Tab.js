import React from "react";
import "./Tab.css";
import { Col, Row } from "antd";
import { Tabs } from "antd";
const { TabPane } = Tabs;

export class Tab extends React.Component {
  state = {};
  render() {
    return (
      <div className="modifyTabs">
        <Row>
          <Col span={24}>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Why us?" key="1" className="d-flex" id="tab-1">
                <div className="text-left">
                  <h1>Why us?</h1>
                  <p className="pTabs">
                    Ex-traders building the best option<br></br> 
                    AI algorithm, which
                    makes large profits<br></br> 
                    in minutes a day. We are ex-quants with<br></br>
                    combined 37 years of experience. {/* Optionsfy software picks
                    the ticker, strikes and expiration dates for you so you can
                    profit without the long guesswork. It's powered by an
                    algorithm fed with 10 years of data and 10 factors proven to
                    work. Optionsfy saves you time and makes you more profitable
                    with high return, consistent trades in minutes in ALL MARKET
                    ENVIRONMENTS. */}
                  </p>
                </div>

                <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div>
              </TabPane>

              <TabPane
                tab="Competitive Advantage of Artificial Intelligence"
                key="2"
                className="d-flex"
              >
                <div className="text-left">
                  <h1>Competitive Advantage of <br></br>
                  Artificial Intelligence</h1>
                  <p className="pTabs">
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

                <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div>
              </TabPane>

              <TabPane
                tab="Speed & time are at our core"
                key="3"
                className="d-flex"
                id="tab-3"
              >
                <div className="text-left">
                  <h1>WSpeed & time are at our core</h1>
                  <p className="pTabs">
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

                <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div>
              </TabPane>

              <TabPane
                tab="Built in options chain scanning"
                key="4"
                className="d-flex"
              >
                <div className="text-left">
                  <h1>Built in options chain scanning</h1>
                  <p className="pTabs">
                    Overwhelmed by varying strike prices and<br></br> 
                    which options to
                    buy? We scan the entire options chain<br></br> 
                    so you don’t have to,
                    researching each possible trade<br></br> 
                    ahead of time and recommend
                    you the best plays
                  </p>
                </div>

                <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div>
              </TabPane>

              <TabPane
                tab="Powerful for beginners & seasoned professionals alike"
                key="5"
                className="d-flex"
                id="tab-5"
              >
                <div className="text-left">
                  <h1>Powerful for beginners & seasoned<br></br> 
                  professionals alike</h1>
                  <p className="pTabs">
                    Whether you are just starting your<br></br> 
                    journey with options or
                    work on the street yourself,<br></br> 
                    our tools are easy enough to
                    use starting on day 1 and<br></br> 
                    give you the competitive knowledge
                    learned from years<br></br> of trial & error.
                  </p>
                </div>

                <div className="img-right">
                  <img
                    src="../img/img-demo.png"
                    alt=""
                    className="img-demo"
                  ></img>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
