import {Link} from 'react-router-dom'
import './Header.scss';
import logo from '../../assets/logo/InStock-Logo.svg';


function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__logo-div">
                    <img className="header__logo"src={logo} />
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <Link  className="header__link header__link-W" to="/warehouse"><li className="header__item header__item-W">Warehouses</li></Link>
                        <Link className="header__link header__link-I" to="/inventory"><li className="header__item header__item-I">Inventory</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
