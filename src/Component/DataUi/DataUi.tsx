import React from "react";
import './DataUi.css';

export class DataUi extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="w-100% h-100vh">
          <div className="flex justify-between">
            <div className="flex py-4">
              <img
                className="w-16 h-16"
                src="../src/image/avatar.jpg"
                alt="Avatar"
              />
              <div className="flex flex-col mx-3">
                <div>
                  <p>Hello,</p>
                </div>
                <div>
                  <p className="font-bold">Ow-mahan-wO</p>
                </div>
              </div>
            </div>
            <div className="flex items-center mr-7">
              <input
                className="p-2 outline-none bg-Secoundry"
                type="search"
                placeholder=" Search City..."
              />
              <div className="p-2 bg-Secoundry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-orange-400">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <div className="mx-5 cursor-pointer flex justify-center items-center border-2 border-gray-400 w-10 h-10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="rounded-3xl w-50% m-2 h-26rem bg-center bg-cover bg-[url('./src/image/image1.jpg')] ">
              <div className="flex m-10">
                <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-orange-400">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="ml-3 font-bold ">Weather</p>
                  <p className="ml-3 font-bold ">What`s the Weather</p>
                </div>
              </div>
              <div>
                <div className="ml-10">
                  <span className="font-bold  text-5xl">22°C</span>
                  <span className="font-bold bg-white p-2 rounded-lg ml-7 ">
                    11°C
                  </span>
                  <p className=" text-xl">Partly Cloudy</p>
                </div>
                <div className="flex justify-center mt-10">
                  <div className="m-3 flex justify-center w-28 h-28 items-center rounded-lg bg-black">
                    <div>
                    <p className="text-white text-center">Preesure</p>
                    <p className="font-bold text-white text-center">800mb</p>
                     </div>
                  </div>
                  <div className="m-3 flex justify-center w-28 h-28 items-center rounded-lg bg-lime-300">
                  <div>
                    <p className=" text-center">Visibility</p>
                    <p className="font-bold  text-center">4.3km</p>
                     </div>
                  </div>
                  <div className="m-3 flex justify-center w-28 h-28 items-center rounded-lg bg-yellow-300">
                  <div>
                    <p className=" text-center">Humadity</p>
                    <p className="font-bold  text-center">87%</p>
                     </div>
                  </div>
              </div>
              </div>
            </div>
            <div className="rounded-3xl w-50% m-2 mr-10 bg-center h-26rem bg-cover bg-[url('./src/image/image2.jpg')] ">
              <div className="flex m-10">
                <div className="flex justify-center items-center bg-white rounded-full w-14 h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-orange-400">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="ml-3 font-bold text-white">Air Quality</p>
                  <p className="ml-3 font-bold text-white">
                    Main Pollutan:PM 2.5
                  </p>
                </div>
              </div>
              <div className="ml-10">
                <span className="font-bold text-white text-5xl">390</span>
                <span className="font-bold bg-lime-300 p-2 rounded-lg ml-7 ">
                  AQI
                </span>
                <p className="text-white text-xl">West Wind</p>
              </div>
              <div className="bg-gray-200 w-70% h-3 mt-32 ml-20">
                <div className="bg-orange-400 w-60% h-3"></div>
              </div>
            </div>
          </div>
          <div className="flex mt-8">
            <div className="flex flex-col rounded-3xl bg-Secoundry h-27rem w-60% mr-9 ml-3">
              <div className="font-bold text-2xl mt-8 ml-8 "><p>Percentage of Cold</p></div>
              <div className="w-100% h-100% flex justify-center items-center">
              <span className="loader flex justify-center items-center font-bold text-4xl">50%</span>
              <span className="loader2 flex justify-center items-center font-bold text-4xl">75%</span>
              </div>
            </div>
            <div className=" bg-cover bg-[url('./src/image/image3.jpg')] rounded-3xl w-33% h-27rem ">
              <p className="mt-14 ml-12">tomorrow</p>
              <p className="font-bold text-3xl mt-3 ml-12">alam Barzah</p>
              <p className="font-bold text-5xl ml-12 mt-48">26°C</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
