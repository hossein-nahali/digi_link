import React from "react";
import {BottomNavigation, Box, Button, Container} from "@mui/material";
import {NavLink} from 'react-router-dom'
import './Header.scss'
import AddIcon from '@mui/icons-material/Add';
import CategoryIcon from '@mui/icons-material/Category';

export default function Header() {

    return (
        <>
            <header>
                <Container className={'parent'}>
                    <NavLink to="/" className={'logo'}>DigiLink</NavLink>
                    <nav>
                        <ul>
                            <li><NavLink to="/">اضافه کردن محصولات جدید</NavLink></li>
                            <li><NavLink to="/ProductList">نمایش محصولات ها</NavLink></li>
                        </ul>
                    </nav>
                </Container>
            </header>
            <Box className={'mobile-menu'}>
                <Box className={'mobile-nav'}>
                    <Button variant="outlined" color="error" status={'error'} className={'a-menu'}>
                        <NavLink to="/ProductList">نمایش محصولات ها<CategoryIcon/></NavLink>
                    </Button>
                    <Button variant="outlined" color="error" status={'error'} className={'a-menu'}>
                        <NavLink to="/">محصول جدید<AddIcon/></NavLink>
                    </Button>
                </Box>
            </Box>
        </>
    )
}