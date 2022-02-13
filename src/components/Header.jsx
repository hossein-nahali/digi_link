import React from "react";
import {Container} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import '../css/Header.scss'


export default function Header() {

    return (
        <header>
            <Container>
                <NavLink to="/" className={'logo'}>DigiLink</NavLink>
                <nav>
                    <ul>
                        <li><NavLink to="/">اضافه کردن محصولات جدید</NavLink></li>
                        <li><NavLink to="/">نمایش محصولات ها</NavLink></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}