/**
 * App Name : Employee Management (Client)
 * file name : About.js
 * files descriptions : This is the About Page
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import { lazy } from 'react';
const Layout = lazy(() => import('../components/Layout'));
const About = () => {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <p>
        This is an assignment app created for the full stack developeer position
        at{' '}
        <a href="https://technext.it/" target="_blank" rel="noreferrer">
          TechNext Limited
        </a>{' '}
        (MailBluster)
      </p>
      <p>Version : 1.0.0</p>
    </Layout>
  );
};

export default About;
