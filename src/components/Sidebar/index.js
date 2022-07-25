import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoTb from '../../assets/images/logo-tb.png';
import LogoSubtitle from '../../assets/images/logo-sub.png';

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoTb} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="Thiago Bernardi" />
    </Link>
  </div>
);

export default Sidebar;
