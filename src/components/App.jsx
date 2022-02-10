import React, {useReducer, useState} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../css/App.scss';
import Header from "./Header";
import {theme} from "./Theme";
import {ThemeProvider} from "@emotion/react";
import AppReducer from "../Reducers/AppReducer";
import loadable from '@loadable/component';
import Context from '../context/context'
import AddProduct from "../routes/AddProduct";
// import Routs
const Home = loadable(() => import('../routes/Home'))
const Product = loadable(() => import('../routes/AddProduct'))

function App() {
    const [state, dispatch] = useReducer(AppReducer, {
        url: ''
    })

    return (
        <BrowserRouter>
            <Context.Provider value={{
                state,
                dispatch: dispatch
            }}>
                <ThemeProvider theme={theme}>
                    <div className="main">
                        <Header/>

                        <Routes>
                            <Route path={'/'} exact element={<Home/>}/>
                            <Route path={'/AddProduct'} element={<AddProduct/>}/>
                        </Routes>
                    </div>
                </ThemeProvider>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
