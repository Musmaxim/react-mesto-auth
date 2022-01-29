import React from "react";
import { Link, useLocation } from "react-router-dom";



function Header(props) {

    const { pathname } = useLocation();
    const text = `${pathname === "/sign-in" ? "Регистрация" : "Войти"}`;
    const linkRoute = `${pathname === "/sign-in" ? "/sign-up" : "/sign-in"}`;

    return (<>
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__logoff">
        {props.loggedIn ? (
            <>
            <p className="header__email">{props.email}</p>
            <Link
                className="header__signout"
                to="/sign-in"
                onClick={props.handleSignOut}
            >
                Выйти
            </Link>
            </>
        ) : (
            <Link className="header__link" to={linkRoute}>
            {text}
            </Link>
            )}
            </div>
        </header>
        </>)}
        export default Header;