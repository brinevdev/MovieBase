import './header.scss';
import logo from './../../resources/images/Logotype.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <a href="/"><img src={logo} alt=""/></a>
            </div>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li><NavLink to="/" className="menu__link">Главная</NavLink></li>
                    <li><NavLink to="/watchList" className="menu__link">Хочу посмотреть</NavLink></li>
                </ul>
            </nav>
            <div className="menu__icon">
                <span></span>
            </div>
        </div>
    </header>
    )
}

export default Header