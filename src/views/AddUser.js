/**
 * App Name : Employee Management (Client)
 * file name : AddUser.js
 * files descriptions : this is page for adding users (both via form and CSV)
 * Author : Md Habibul Hasan
 * Date : 15/08/2021
 */

import React, { lazy, useState } from 'react';
import { ToastContainer } from 'react-toastify';
const AddUserForm = lazy(() => import('../components/AddUserForm'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const FileUpload = lazy(() => import('../components/FileUpload'));

const AddUser = () => {
  const [uploadCsv, setUploadCsv] = useState(false);
  return (
    <Sidebar>
      <ToastContainer />
      {!uploadCsv ? <AddUserForm /> : <FileUpload />}
      <h6>
        <button
          className="btn btn-warning mt-3"
          onClick={() => setUploadCsv(!uploadCsv)}
        >
          {!uploadCsv ? 'Or Upload a CSV file' : 'Or Add user with form'}
        </button>
      </h6>
    </Sidebar>
  );
};

export default AddUser;
