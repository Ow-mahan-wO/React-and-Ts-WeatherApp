import React from "react";
import { Navbar } from "./Component/Navbar/Navbar";

import { DataUi } from "./Component/DataUi/DataUi";
import "./App.css";

import { PredictionWeather } from "./Component/PredictionWeather/PredictionWeather";
import { WeatherInfoUi } from "./Component/WeatherInfoUi/WeatherInfoUi";

// const URL = `https://api.openweathermap.org/data/2.5/weather?q=iran&appid=d65f0d7075082896db400ce8b80110fc`;

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  // componentDidMount(): void {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }
  render() {
    return (
      <>
        <div className="flex h-100vh w-100%">
          <div className="w-36">
            <Navbar/>
          </div>
          <div className="w-77rem">
            <DataUi/>
          </div>
          <div className="flex flex-col w-30rem h-64rem bg-Secoundry">
            <WeatherInfoUi />
            <p className="text-center font-bold text-4xl mt-10">Weather Prediction</p>
            <PredictionWeather/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
