/**
 * App Name : Employee Management (Client)
 * file name : 404.js
 * files descriptions : This page will show when a page is not available on the app
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '../scss/404.module.scss';
const Layout = lazy(() => import('../components/Layout'));

const PageNotFound = () => {
  return (
    <div>
      <Layout title="Page Not Found | DJ Events">
        <div className={styles.error}>
          <h1>
            <FaExclamationTriangle /> 404
          </h1>
          <h4>Sorry, Nothing here</h4>
          <Link to="/">Go Back Home</Link>
        </div>
      </Layout>
    </div>
  );
};

export default PageNotFound;
