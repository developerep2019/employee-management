/**
 * App Name : Employee Management (Client)
 * file name : Footer.js
 * files descriptions : This is the Footer Component
 * Author : Md Habibul Hasan
 * Date : 17/08/2021
 */

import { Link } from 'react-router-dom';
import styles from '../scss/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Employee Management 2021</p>
      <p>
        <Link to="/about">About This Project</Link>
      </p>
    </footer>
  );
};

export default Footer;
