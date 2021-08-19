/**
 * App Name : Employee Management (Client)
 * file name : Sidebar.js
 * files descriptions : This is the Sidebar Component for the admin area
 * Author : Md Habibul Hasan
 * Date : 17/08/2021
 */

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../scss/style.module.scss';
import * as jQuery from 'jquery';

const Sidebar = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'object') {
      (function ($) {
        var fullHeight = function () {
          $('.js-fullheight').css('height', $(window).height());
          $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
          });
        };
        fullHeight();

        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass(styles.active);
        });
      })(jQuery);
    }
  }, []);

  return (
    <div
      className={[
        styles.wrapper,
        styles['d-flex'],
        styles['align-items-stretch'],
      ].join(' ')}
    >
      <nav className={styles.sidebar} id="sidebar">
        <div className={styles['custom-menu']}>
          <button
            className={[
              styles.sidebarCollapse,
              styles.btn,
              styles['btn-primary'],
            ].join(' ')}
            id="sidebarCollapse"
          >
            <i
              className={['fa', 'fa-bars', styles['toggle-btn']].join(' ')}
            ></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className={styles['p-4']}>
          <h1>
            <Link to="/" className={styles.logo}>
              Employee <span>management</span>
            </Link>
          </h1>
          <ul
            className={[
              styles['list-unstyled'],
              styles.components,
              styles['mb-5'],
            ].join(' ')}
          >
            <li>
              <Link to="/">
                <span className="fa fa-home mr-3"></span> Home
              </Link>
            </li>
            <li
              className={
                location.pathname === '/dashboard' ? styles.active : ''
              }
            >
              <Link to="/dashboard">
                <span className="fa fa-tachometer"></span> Dashboard
              </Link>
            </li>
            <li
              className={
                location.pathname === '/dashboard/users' ? styles.active : ''
              }
            >
              <Link to="/dashboard/users">
                <span className="fa fa-user mr-3"></span> Users
              </Link>
            </li>
            <li
              className={
                location.pathname === '/dashboard/add-user' ? styles.active : ''
              }
            >
              <Link to="/dashboard/add-user">
                <span className="fa fa-user-plus mr-3"></span> Add User
              </Link>
            </li>
          </ul>
          <div className={styles['mb-5']}></div>
        </div>
      </nav>

      <div
        className={[
          styles.content,
          styles['p-4'],
          styles['p-md-5'],
          styles['pt-5'],
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
