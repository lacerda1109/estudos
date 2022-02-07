import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import DataContext, { data } from "./data/DataContext";
import Store from "./data/Store";

function App() {
    let [state, setState] = useState(data);

    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Nav />
                    <Content />
                </div>
            </DataContext.Provider>
        </Store>
    );
}

export default App;
