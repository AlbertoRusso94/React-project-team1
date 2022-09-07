import { AdvancedRealTimeChart, TickerTape } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";
import { SymbolOverview } from "react-ts-tradingview-widgets";

import "./widget.css";

export default function Widget() {
  return (
    <>
      <section className="dflex mediaQuerySection">
        <AdvancedRealTimeChart className="mediaQueryItem displayNone"
          theme="dark"
          width={600}
        ></AdvancedRealTimeChart>
        <MarketData colorTheme="dark" width={450} height={600}></MarketData>
      </section>
      <div className="mediaQueryItem displayNone padding">
        <AdvancedRealTimeChart className="displayNone" 
          symbol="MSFT"
          theme="dark"
          height={700}
        ></AdvancedRealTimeChart>
      </div>
      <section className="sectionWidgetFlex mediaQuerySection ">
        <SymbolOverview className="mediaQueryItem"
          width={400}
          height={350}
          colorTheme="dark"
          chartType="candlesticks"
          downColor="#800080"
          borderDownColor="#800080"
          wickDownColor="#800080"
        />
        <AdvancedRealTimeChart className="mediaQueryItem displayNone"
          theme="dark"
          height={400}
          symbol=" NASDAQ"
        ></AdvancedRealTimeChart>
      </section>
      <div>
      <TickerTape colorTheme="dark"></TickerTape>
      </div>
    </>
  );
}
