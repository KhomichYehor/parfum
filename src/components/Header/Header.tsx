import s from './Header.module.scss';
import logo from '../../images/logo/logo.svg';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Button from '../UI/Button/Button';

const Header: React.FC = () => {
    const menuItems = useSelector((state:RootState) => state.menu.items)

    return (
        <header className={s.header}>
        <div className={s.header__wrapper}>
            <a href='#' className={s.header__logo}>
                <img className={s.header__logo_img} src={logo} alt="Logo" />
            </a>
            <nav className={s.header__navbar}>
               {menuItems.map((item, index) => (
                <a key={index} href="#" className={s.header__navbar_item}>{item}</a>
               ))}
            </nav>
            <div className={s.header__cart}>
                <Button buttonText='Cart'/>
            </div>
        </div>
    </header>
    )
}

export default Header;

