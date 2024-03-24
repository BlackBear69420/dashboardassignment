import React, { useState, useEffect } from "react";
import graphSvg from "../assets/NSE.62a33981.svg";
import First from "../assets/first.svg";
import data from "../jsons/first.json";
import data2 from "../jsons/second.json";
import data3 from "../jsons/third.json";
import data4 from "../jsons/four.json";
import pointer1 from "../assets/pointer1.svg";
import pointer2 from "../assets/pointer2.svg";
import Second from "../assets/second.svg";
import Third from "../assets/third.svg";
import Fourth from "../assets/fourth.svg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function Graphs() {
  const [activeButton, setActiveButton] = useState(5);
  const [pointerPosition, setPointerPosition] = useState({ left: "0%" });
  const [pointerPosition2, setPointerPosition2] = useState({ left: "0%" });
  const [pointerPosition3, setPointerPosition3] = useState({ left: "0%" });
  const [showAllItems, setShowAllItems] = useState(false);
  const [showAllItems2, setShowAllItems2] = useState(false);
  const [graphData, setGraphData] = useState({
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
  });
  const [graphData2, setGraphData2] = useState({
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
  });
  const [graphData3, setGraphData3] = useState({
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
  });
  const [graphData4, setGraphData4] = useState({
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
  });

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  useEffect(() => {
    setGraphData(data);
    setGraphData2(data2);
    setGraphData3(data3);
    setGraphData4(data4);
  }, []);

  useEffect(() => {
    const { Bearish, Neutral, Bullish } = graphData[activeButton.toString()];
    const total = Bearish + Neutral + Bullish;
    const left = ((Bearish - Bullish) / total) * 100;
    setPointerPosition({ left: `${46.5 + left}%` });
    console.log(pointerPosition)
  }, [activeButton, graphData]);


  useEffect(() => {
    const { Bearish, Neutral, Bullish } = graphData3[activeButton.toString()];
    const total = Bearish + Neutral + Bullish;
    const left = ((Bearish - Bullish) / total) * 100;
    setPointerPosition2({ left: `${46.5+left}%` });
  }, [activeButton, graphData3]);


  useEffect(() => {
    const { Bearish, Neutral, Bullish } = graphData4[activeButton.toString()];
    const total = Bearish + Neutral + Bullish;
    const left = ((Bearish - Bullish) / total) * 100;
    setPointerPosition3({ left: `${46.5+left}%` });
    console.log(pointerPosition3)
  }, [activeButton, graphData4]);


  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };
  const toggleShowAllItems2 = () => {
    setShowAllItems2(!showAllItems2);
  };

  return (
    <div className="mt-16 lg:px-60 items-center bg-[#f6f9fd]  pt-5 pb-20">
      <div className="">
        <div className="flex justify-center">
          <div className=" space-x-2 items-center justify-center bg-white inline-flex min-w-min px-2 rounded-lg">
            {["5min", "10min", "15min", "30min", "hour", "day"].map(
              (time, index) => (
                <button
                  key={index}
                  className={` py-2 rounded-md text-xs font-medium ${
                    activeButton === index
                      ? "bg-[#3f78cd] text-white px-3"
                      : "text-[#aaa9cf] px-1"
                  }`}
                  onClick={() => handleButtonClick(index)}
                  style={{}} // Adjust font size
                >
                  {activeButton === index
                    ? time.includes("min")
                      ? time.replace("min", " Minutes")
                      : time === "day"
                      ? "1 Day"
                      : time === "hour"
                      ? "1 Hour"
                      : time.charAt(0).toUpperCase() + time.slice(1)
                    : time}
                </button>
              )
            )}
          </div>
        </div>
        <div>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>

            <img className="h-6 mr-2" src={graphSvg} alt="Graph" />
            <span className=" font-semibold text-xl">NIFTY 50</span>
          </span>
          <span className="flex items-center mt-2">
            <span className="text-xs ml-8">
              {" "}
              {/* Set font size to extra small */}₹ 22096.75
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4da843"
              className="w-6 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs text-[#4da843] ">(+0.39%)</p>{" "}
            {/* Set font size to extra small */}
          </span>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {/* First card */}
        <div className="bg-white rounded-lg p-4 pb-14">
          <div className="flex justify-between">
            <p className="text-sm font-medium">Summary</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-5 relative mx-[20%]">
            <img src={First} alt="Image 1" className="h-auto" />
            <img
              src={pointer1}
              alt="Pointer"
              className="h-5 w-5 absolute top-[35%]"
              style={pointerPosition}
            />
          </div>

          <span className="flex justify-evenly mt-5 text-xs mx-[10%]">
            <div>
              <p className="text-center mb-2">
                {graphData[activeButton]?.Bearish}
              </p>
              <p className="bg-[#ffe4e4] text-xs px-3 rounded-sm py-0.5 text-[#f64444]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData[activeButton]?.Neutral}
              </p>
              <p className="bg-[#eeeef9] text-xs px-3 rounded-sm py-0.5 text-[#7a7a7a]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData[activeButton]?.Bullish}
              </p>
              <p className="bg-[#e7ffe4] text-xs px-3 rounded-sm py-0.5 text-[#30ba54]">
                Bullish
              </p>
            </div>
          </span>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-8 text-xs md:pl-20 pl-10">
            <div>
              <p className="">{graphData[activeButton]?.["EMA (20)"]}</p>
              <p className="  text-slate-400">EMA(20)</p>
            </div>
            <div>
              <p className=" ">{graphData[activeButton]?.["SMA(20)"]}</p>
              <p className=" text-slate-400">SMA(20)</p>
            </div>
            <div>
              <p className="  ">{graphData[activeButton]?.["RSI(14)"]}</p>
              <p className="  text-slate-400">RSI(14)</p>
            </div>
            <div>
              <p className=" ">{graphData[activeButton]?.["Awesome Osc."]}</p>
              <p className="  text-slate-400">Awesome Osc.</p>
            </div>
            <div>
              <p className="  ">
                {graphData[activeButton]?.["Macd (12, 26, 9)"]}
              </p>
              <p className="  text-slate-400">Macd (12, 26, 9)</p>
            </div>
            <div>
              <p className=" ">{graphData[activeButton]?.["CCI (20)"]}</p>
              <p className="  text-slate-400">CCI (20)</p>
            </div>
          </div>
        </div>

        {/* Second card */}
        <div className="bg-white rounded-lg p-4 pb-14">
          <div className="flex justify-between">
            <p className="text-sm font-medium">Support & Resistance</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-5 relative mx-[25%]">
            <img src={Second} alt="Image 1" className="h-auto" />
            <img
              src={pointer2}
              alt="Pointer"
              className="h-4 w-4 absolute top-[35%]"
            />
          </div>

          <span className="flex justify-evenly mt-5 text-xs mx-[20%]">
            <p className="text-center mb-2">S1</p>
            <p className="text-center mb-2">S2</p>
            <p className="text-center mb-2">S3</p>
            {<p className="text-center mb-2">&nbsp;</p>}
            <p className="text-center mb-2">R1</p>
            <p className="text-center mb-2">R2</p>
            <p className="text-center mb-2">R3</p>
          </span>

          <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-16 text-xs md:pl-20 pl-10">
            <div>
              <p className="">{graphData2[activeButton]?.["S1"]}</p>
              <p className="  text-slate-400">S1</p>
            </div>
            <div>
              <p className=" ">{graphData2[activeButton]?.["S2"]}</p>
              <p className=" text-slate-400">S2</p>
            </div>
            <div>
              <p className="  ">{graphData2[activeButton]?.["S3"]}</p>
              <p className="  text-slate-400">S3</p>
            </div>

            <div>
              <p className="  ">{graphData2[activeButton]?.["R1"]}</p>
              <p className="  text-slate-400">R1</p>
            </div>
            <div>
              <p className=" ">{graphData2[activeButton]?.["R2"]}</p>
              <p className="  text-slate-400">R2</p>
            </div>
            <div>
              <p className=" ">{graphData2[activeButton]?.["R3"]}</p>
              <p className="  text-slate-400">R3</p>
            </div>
          </div>
        </div>
        {/* Third card */}
        <div className="bg-white rounded-lg p-4 pb-14">
          <div className="flex justify-between">
            <p className="text-sm font-medium">Moving averages</p>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg> */}
          </div>
          <div className="flex justify-center mt-5 relative mx-[20%] ">
            <img src={Third} alt="Image 1" className="h-auto" />
            <img
              src={pointer1}
              alt="Pointer"
              className="h-5 w-5 absolute top-[35%]"
              style={pointerPosition2}
            />
          </div>

          <span className="flex justify-evenly mt-5 text-xs mx-[10%]">
            <div>
              <p className="text-center mb-2">
                {graphData3[activeButton]?.Bearish}
              </p>
              <p className="bg-[#fff2e4] text-xs px-3 rounded-sm py-0.5 text-[#f6a944]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData3[activeButton]?.Neutral}
              </p>
              <p className="bg-[#eeeef9] text-xs px-3 rounded-sm py-0.5 text-[#7a7a7a]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData3[activeButton]?.Bullish}
              </p>
              <p className="bg-[#e4ebff] text-xs px-3 rounded-sm py-0.5 text-[#3045ba]">
                Bullish
              </p>
            </div>
          </span>
          <div className=" mt-8 text-xs px-10 flex flex-col gap-4">
            {graphData3[activeButton]?.Data &&
              graphData3[activeButton]?.Data.map((item, index) => (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex justify-center items-center gap-2">
                    <p
                      className={`bg-[#fadfdf] text-${
                        item.Type === "B" ? "#51e551" : "#e55151"
                      } p-1 text-xs px-2 rounded-sm`}
                    >
                      {item.Type}
                    </p>
                    <p>{item.Value}</p>
                  </div>
                  <p>{item.Price}</p>
                </div>
              ))}
          </div>
          <div className="text-slate-500 text-sm float-end mt-5 mx-10 flex">
            <button className="flex items-center" onClick={toggleShowAllItems}>
              {showAllItems ? (
                <ChevronUpIcon className="h-5 w-5 text-slate-500 mr-1" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-slate-500 mr-1" />
              )}
              {showAllItems ? "View Less" : "View More"}
            </button>
          </div>
        </div>
        {/* Fourth card */}
        <div className="bg-white rounded-lg p-4 pb-14">
          <div className="flex justify-between">
            <p className="text-sm font-medium">Oscillators</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-5 relative mx-[20%]">
            <img src={Fourth} alt="Image 1" className="h-auto" />
            <img
              src={pointer1}
              alt="Pointer"
              className="h-5 w-5 absolute top-[35%]"
              style={pointerPosition3}
            />
          </div>

          <span className="flex justify-evenly mt-5 text-xs mx-[10%]">
            <div>
              <p className="text-center mb-2">
                {graphData4[activeButton]?.Bearish}
              </p>
              <p className="bg-[#fff2e4] text-xs px-3 rounded-sm py-0.5 text-[#f6a944]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData4[activeButton]?.Neutral}
              </p>
              <p className="bg-[#eeeef9] text-xs px-3 rounded-sm py-0.5 text-[#7a7a7a]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-center mb-2">
                {graphData4[activeButton]?.Bullish}
              </p>
              <p className="bg-[#e4ebff] text-xs px-3 rounded-sm py-0.5 text-[#3045ba]">
                Bullish
              </p>
            </div>
          </span>
          <div className=" mt-8 text-xs px-10 flex flex-col gap-4">
            {graphData4[activeButton]?.Data &&
              graphData4[activeButton]?.Data.map((item, index) => (
                <div className="flex items-center justify-between" key={index}>
                  <div className="flex justify-center items-center gap-2">
                    <p
                      className={`bg-[#fadfdf] text-${
                        item.Type === "B" ? "#51e551" : "#e55151"
                      } p-1 text-xs px-2 rounded-sm`}
                    >
                      {item.Type}
                    </p>
                    <p>{item.Value}</p>
                  </div>
                  <p>{item.Price}</p>
                </div>
              ))}
          </div>
          <div className="text-slate-500 text-sm float-end mt-5 mx-10 flex">
            <button className="flex items-center" onClick={toggleShowAllItems2}>
              {showAllItems ? (
                <ChevronUpIcon className="h-5 w-5 text-slate-500 mr-1" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-slate-500 mr-1" />
              )}
              {showAllItems ? "View Less" : "View More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
