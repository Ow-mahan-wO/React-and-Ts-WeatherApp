import React from "react";
import { Navbar } from "./Component/Navbar/Navbar";
import { DataUi } from "./Component/DataUi/DataUi";
import { PredictionWeather } from "./Component/PredictionWeather/PredictionWeather";
import { WeatherInfoUi } from "./Component/WeatherInfoUi/WeatherInfoUi";
import "./App.css";

interface AppState {
  city: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
 
  }



  render() {
    return (
      <>
        <div className="flex h-100vh w-100%">
          <div className="w-36">
            <Navbar />
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