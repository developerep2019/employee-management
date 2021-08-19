/**
 * App Name : Employee Management (Client)
 * file name : Header.js
 * files descriptions : This is the Header Component
 * Author : Md Habibul Hasan
 * Date : 17/08/2021
 */

import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import styles from '../scss/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">EMPLOYEE MANAGEMENT</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/dashboard" className="btn-secondary">
              <FaSignInAlt /> Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
