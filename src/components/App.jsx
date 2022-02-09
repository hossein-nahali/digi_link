import React, {useReducer} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../css/App.scss';
import Header from "./Header";
import {theme} from "./Theme";
import {ThemeProvider} from "@emotion/react";
import context from "../context/context";
import AppReducer from "../Reducers/AppReducer";
import loadable from '@loadable/component';

// import Routs
const Home = loadable(() => import('../routes/Home'))
const Product = loadable(() => import('../routes/Product'))

function App() {
    const [state, dispatch] = useReducer(AppReducer, {})

    return (

        <context.Provider value={{
            state,
            dispatch
        }}>
            <ThemeProvider theme={theme}>
                <div className="main">
                    <Header/>
                    <BrowserRouter>
                        <Routes>
                            <Route path={'/'} exact element={<Home/>}/>
                            <Route path={'/Product'} element={<Product/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </context.Provider>

    );
}

export default App;
