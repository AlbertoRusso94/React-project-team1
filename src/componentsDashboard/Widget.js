import { AdvancedRealTimeChart, TickerTape } from "react-ts-tradingview-widgets";
import { MarketData } from "react-ts-tradingview-widgets";
import { SymbolOverview } from "react-ts-tradingview-widgets";

import "./widget.css";

export default function Widget() {
  return (
    <>
      <section className="dflex">
        <AdvancedRealTimeChart className="mediaQueryRealTimeChart"
          theme="dark"
          height={500}
        ></AdvancedRealTimeChart>
        <MarketData colorTheme="dark" width={450} height={600}></MarketData>
      </section>
      <section className="sectionWidgetFlex">
        {/* <SymbolOverview
          width={300}
          colorTheme="dark"
          chartType="candlesticks"
          downColor="#800080"
          borderDownColor="#800080"
          wickDownColor="#800080"
        /> */}
        <AdvancedRealTimeChart className="mediaQueryRealTimeChart"
          theme="dark"
          height={300}
          symbol=" NASDAQ"
        ></AdvancedRealTimeChart>
        <AdvancedRealTimeChart className="mediaQueryRealTimeChart"
          theme="dark"
          height={300}
          symbol="MSFT"
        ></AdvancedRealTimeChart>
      </section>
      <div>
      <TickerTape colorTheme="dark"></TickerTape>
      </div>
    </>
  );
}
