import React from "react";
import { Navbar } from "./Component/Navbar/Navbar";
import { DataUi } from "./Component/DataUi/DataUi";



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
        <div className="flex 2xl:p-0 h-100vh w-100%">
          <div className="w-36 hidden 2xl:flex">
            <Navbar />
          </div>
          <div className="w-100%">
            <DataUi/>
          </div>
        </div>
      </>
    );
  }
}

export default App;