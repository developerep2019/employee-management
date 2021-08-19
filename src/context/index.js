/**
 * App Name : Employee Management (Client)
 * file name : index.js
 * files descriptions : This is the main file of the ReactJS Context API
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import React, { createContext, Suspense, useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

export const appContext = createContext();

const Context = ({ children }) => {
  const [paginationNext, setPaginationNext] = useState(0);
  const [users, setUsers] = useState([]);
  const [checkList, setCheckList] = useState([]);

  // Logic for keeping the checklist ==> START
  const filteredCheckedUsers = users.map((user) => {
    const checkedUsers = [];
    checkList.map((list) => {
      if (user.id === list.id) {
        user.select = true;
        checkedUsers.push(user);
      } else {
        checkedUsers.push(user);
      }
    });
  });
  // Logic for keeping the checklist ==> END
  const contextValue = {
    pagination: [paginationNext, setPaginationNext],
    users: [users, setUsers],
    list: [checkList, setCheckList],
  };
  return (
    <Suspense fallback={<TopBarProgress />}>
      <appContext.Provider value={contextValue}>{children}</appContext.Provider>
    </Suspense>
  );
};

export default Context;
