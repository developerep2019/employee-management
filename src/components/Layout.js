/**
 * App Name : Employee Management (Client)
 * file name : Layout.js
 * files descriptions : This is the Layout Component
 * Author : Md Habibul Hasan
 * Date : 17/08/2021
 */

import { lazy } from 'react';
import styles from '../scss/Layout.module.scss';
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
