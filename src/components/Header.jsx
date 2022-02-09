import React from "react";
import {Container} from "react-bootstrap";
import '../css/Header.scss'

export default function Header() {

    return (
        <header>
            <Container>
                <a href="#" className={'logo'}>DigiLink</a>
                <nav>
                    <ul>
                        <li><a href="#">اضافه کردن پست جدید</a></li>
                        <li><a href="#">نمایش پست ها</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}