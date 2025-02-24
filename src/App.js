import React from "react";
import Grid from "./components/Grid";
import { GridProvider } from "./context/GridContext";

import "./styles.css";

const App = () => {
    return (
        <GridProvider>
            <div className="app">
                <h1 className="h1">Mini Assignment 2</h1>
                <Grid />
            </div>
        </GridProvider>
    );
};

export default App;
