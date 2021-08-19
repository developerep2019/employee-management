/**
 * App Name : Employee Management (Client)
 * file name : index.js
 * files descriptions : All routes of the app are assigned here.
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('../views/Home'));
const Dashboard = lazy(() => import('../views/Dashboard'));
const AddUser = lazy(() => import('../views/AddUser'));
const Users = lazy(() => import('../views/Users'));
const About = lazy(() => import('../views/About'));
const NotFound = lazy(() => import('../views/404'));

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/users" component={Users} />
        <Route path="/dashboard/add-user" component={AddUser} />
        <Route path="/about" component={About} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
