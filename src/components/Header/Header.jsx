import './header.scss';
import logo from './../../resources/images/Logotype.svg';


const Header = () => {
    return (
    <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <a href=""><img src={logo} alt=""/></a>
            </div>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li><a href="" className="menu__link active">Главная</a></li>
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