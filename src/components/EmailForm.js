/**
 * App Name : Employee Management (Client)
 * file name : EmailForm.js
 * files descriptions : This is the form for sending emails
 * Author : Md Habibul Hasan
 * Date : 16/08/2021
 */

import React from 'react';
import styles from '../scss/Form.module.scss';
import { ClipLoader } from 'react-spinners';

const Form = ({ handleSubmit, setEmail, email, load }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      <h4>Email Details</h4>
      <input
        type="text"
        name="subject"
        onChange={(e) => setEmail({ ...email, subject: e.target.value })}
        placeholder="Subject"
        className="form-control"
      />
      <br />
      <textarea
        name="message"
        onChange={(e) => setEmail({ ...email, message: e.target.value })}
        placeholder="Message"
        rows="10"
        className="form-control"
      ></textarea>
      <br />
      <button className="btn btn-warning">Send Email</button>{' '}
      {load ? <ClipLoader size={20} /> : ''}
    </form>
  );
};

export default Form;
