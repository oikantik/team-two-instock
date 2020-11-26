import {NavLink} from 'react-router-dom'
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
                        <NavLink  activeClassName="header__link-W" className="header__link" to="/warehouse" activeStyle={{color: "white"
                        }}>Warehouses</NavLink>
                        <NavLink activeClassName="header__link-I" className="header__link" to="/inventory"activeStyle={{color: "white"
                        }}>Inventory</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
