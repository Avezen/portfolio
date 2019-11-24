import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import {ThemeProvider} from "styled-components";
import {theme} from "./constans/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App" style={{position: 'relative', backgroundColor: '#f7f7f7'}}>
                <MainPage/>
            </div>
        </ThemeProvider>
    );
};

export default App;
