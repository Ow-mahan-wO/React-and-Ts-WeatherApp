import React from "react";

export class PredictionWeather extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="w-100% p-3 mt-10">
          <div className="flex justify-between h-32 p-3 mt-4 bg-white rounded-2xl ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-20 h-20 text-blue-300 ">
                <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
              </svg>
            <div className="ml-5">
              <p className=" text-2xl">November10</p>
              <p className="font-bold text-2xl">Cloudy</p>
            </div>
            </div>
            <div className="flex items-center"><p className="font-bold text-2xl text-orange-400">26°C / 19°C</p></div>
                </div>
                <div className="flex justify-between h-32 p-3 mt-4 bg-white rounded-2xl ">
            <div className="flex items-center">
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
            <div className="ml-5">
              <p className=" text-2xl">November11</p>
              <p className="font-bold text-2xl">Bright</p>
            </div>
            </div>
            <div className="flex items-center"><p className="font-bold text-2xl text-orange-400">26°C / 20°C</p></div>
          </div>
        </div>
        
      </>
    );
  }
}
