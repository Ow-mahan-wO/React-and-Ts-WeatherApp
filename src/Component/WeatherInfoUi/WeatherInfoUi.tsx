import React from "react";
import "./WeatherInfoUi.css";

export class WeatherInfoUi extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="px-6">
          <div className="w-100% flex border-b-2 items-center border-gray-200 justify-between">
            <div className="">
              <p className="font-bold text-3xl">Sun</p>
              <span className="text-1xl">Banten,Indonesia</span>
              <span className="text-orange-400 ml-2">v</span>
            </div>
            <div className="p-6">
              <p className="font-bold text-orange-400 text-5xl">22°C</p>
            </div>
          </div>
        </div>
        <div className="w-100% p-10">
          <div className="w-100% overflow-hidden mt-5 border-b-2 h-40 flex justify-center border-orange-400 ">
            <div className="rounded-full border-dotted border-t-4 overflow-hidden border-orange-400 w-80 h-80">
              <div className="Shape w-44 h-40 "></div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-4">
          <div className="flex items-center h-32 w-100% bg-black rounded-2xl">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 mx-4 text-yellow-400">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-3xl">20 UVI</span>
              <span className="bg-lime-300 rounded-lg py-1 px-3 ml-5">Moderate</span>
              <p className="text-white font-bold my-3">
                Moderate Risk of from UV Rase
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
