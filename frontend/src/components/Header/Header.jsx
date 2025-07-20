import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './header.css';

const nav_links = [
    {
        path: '/home',
        display: 'Accueil'
    },
    {
        path: '/about',
        display: 'Centres'
    },
    {
        path: '/tours',
        display: 'Services'
    },
];

const Header = () => {
    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        if (window.scrollY > 80) {
            headerRef.current.classList.add('sticky__header');
        } else {
            headerRef.current.classList.remove('sticky__header');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyHeaderFunc);

        return () => {
            window.removeEventListener('scroll', stickyHeaderFunc);
        };
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* ===== Logo ======= */}
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>

                        {/* ===== Menu ======= */}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav_links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            activeClassName="active__link"
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__right d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                <Button className="btn secondary__btn">
                                    <Link to="/login">Connecter</Link>
                                </Button>
                                <Button className="btn primary__btn">
                                    <Link to="/register">S'inscrire</Link>
                                </Button>
                            </div>

                            <span className="mobile__menu">
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
