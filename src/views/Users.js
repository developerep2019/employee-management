/**
 * App Name : Employee Management (Client)
 * file name : Users.js
 * files descriptions : This file shows the user with pagination
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import React, { lazy, useContext, useState } from 'react';
import { API_URL } from '../config/index';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { appContext } from '../context';
const Sidebar = lazy(() => import('../components/Sidebar'));
const UsersTable = lazy(() => import('../components/UsersTable'));
const Pagination = lazy(() => import('../components/Pagination'));
const EmailForm = lazy(() => import('../components/EmailForm'));

const Users = () => {
  // States
  const [email, setEmail] = useState({ subject: '', message: '' });
  const [load, setLoad] = useState(false);

  //Context works
  const { list } = useContext(appContext);
  const [checkList, setCheckList] = list;

  // Getting the page number via query
  const useQuery = () => new URLSearchParams(useLocation().search);
  const pageNum = +useQuery().get('page');

  //Handling the email checkbox
  const handleCheckChange = (emMail, isDelete) => {
    if (!isDelete) {
      setCheckList([...checkList, { id: emMail.id, email: emMail.email }]);
    } else if (isDelete) {
      const withOutDeletedMail = checkList.filter(
        (lEm) => lEm.id !== emMail.id
      );
      setCheckList(withOutDeletedMail);
    }
  };

  // Submitiing the email form with the recipient
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { recipients: checkList.map((list) => list.email), email };
    setLoad(true);
    fetch(`${API_URL}/user-email-send`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        const { status, message } = data;
        toast[status](message);
      })
      .catch((err) => {
        setLoad(false);
        toast.error(<h6>Oops! something went wrong 😟</h6>);
        console.log(err);
      });
  };
  console.log(checkList);
  return (
    <Sidebar>
      <ToastContainer />
      <UsersTable handleCheckChange={handleCheckChange} pageNum={pageNum} />
      <Pagination pageNum={pageNum} />
      {checkList.length > 0 ? (
        <EmailForm
          handleSubmit={handleSubmit}
          setEmail={setEmail}
          email={email}
          load={load}
        />
      ) : (
        ''
      )}
    </Sidebar>
  );
};

export default Users;
