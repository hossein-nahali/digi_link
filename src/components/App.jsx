import React, {useReducer} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../css/App.scss';
import Header from "./Header";
import {ThemeProvider} from "@emotion/react";
import AppReducer from "../Reducers/AppReducer";
import loadable from '@loadable/component';
import Context from '../context/context'
import {DefaultState} from "../Reducers/DefaultState";
import {Theme} from '../package/custom/Theme'
// import Routs
const Home = loadable(() => import('../routes/Home'))
const AddProduct = loadable(() => import('../routes/AddProduct'))


function App() {
    const [state, dispatch] = useReducer(AppReducer, DefaultState())

    return (
        <BrowserRouter>
            <Context.Provider value={{
                state,
                dispatch: dispatch
            }}>
                <ThemeProvider theme={Theme}>
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
