/**
 * App Name : Employee Management (Client)
 * file name : AddUserForm.js
 * files descriptions : This is the form for adding a user
 * Author : Md Habibul Hasan
 * Date : 16/08/2021
 */

import React, { useState } from 'react';
import styles from '../scss/Form.module.scss';
import { toast } from 'react-toastify';
import { API_URL } from '../config/index';
import { ClipLoader } from 'react-spinners';

const AddUser = () => {
  const [spin, setSpin] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.stringify(newUser);
    setSpin(true);
    fetch(`${API_URL}/create-user`, {
      method: 'POST',
      body: userData,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSpin(false);
        const { status, message, code } = data;
        toast[status](message);
        code === 200 &&
          setNewUser({ first_name: '', last_name: '', email: '' });
      })
      .catch((err) => {
        setSpin(false);
        toast.error(<h6>Opps... There was a server side error</h6>);
      });
  };

  return (
    <div className="mb-3">
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <input
          type="text"
          name="first_name"
          required
          placeholder="First Name"
          className="form-control"
          value={newUser.first_name}
          onChange={(e) =>
            setNewUser({ ...newUser, first_name: e.target.value })
          }
        />
        <br />
        <input
          type="text"
          name="last_name"
          required
          placeholder="Last Name"
          className="form-control"
          value={newUser.last_name}
          onChange={(e) =>
            setNewUser({ ...newUser, last_name: e.target.value })
          }
        />
        <br />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="form-control"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <br />
        <button type="submit" className="btn btn-warning">
          Add User
        </button>
        {spin ? (
          <>
            <ClipLoader size={20} /> <br />
          </>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default AddUser;
