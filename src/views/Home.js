/**
 * App Name : Employee Management (Client)
 * file name : Home.js
 * files descriptions : This is the homepage of the application
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import { lazy } from 'react';
const Layout = lazy(() => import('../components/Layout'));

const Home = () => {
  return (
    <Layout>
      <h3>Hello there! 🥰</h3>
      <p>
        This is an assignment given by{' '}
        <a href="https://technext.it/" target="_blank" rel="noreferrer">
          TechNext Limited
        </a>
      </p>
      <p>
        <strong>
          As requirements, Login Authentication is not Required for the App. So
          please click on the Login button to the Navbar for go to your
          dashboard
        </strong>
      </p>
    </Layout>
  );
};

export default Home;
