/**
 * App Name : Employee Management (Client)
 * file name : Pagination.js
 * files descriptions : This is the Pagination Component for the Users Table
 * Author : Md Habibul Hasan
 * Date : 19/08/2021
 */

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appContext } from '../context';
import styles from '../scss/Pagination.module.scss';

const Pagination = ({ pageNum }) => {
  const history = useHistory();

  // Context works
  const { pagination } = useContext(appContext);

  const [paginationNext] = pagination;

  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => history.push(`/dashboard/users?page=${pageNum - 1}`)}
        disabled={pageNum < 1 ? true : false}
      >
        Previous
      </button>
      <button
        className={['btn', 'btn-success', styles.next].join(' ')}
        onClick={() => history.push(`/dashboard/users?page=${pageNum + 1}`)}
        disabled={
          pageNum === paginationNext || pageNum > paginationNext ? true : false
        }
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
