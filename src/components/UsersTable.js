/**
 * App Name : Employee Management (Client)
 * file name : UsersTable.js
 * files descriptions : This component shows the users table
 * Author : Md Habibul Hasan
 * Date : 17/08/2021
 */

import React, { useContext, useEffect } from 'react';
import { API_URL } from '../config/index';
import { appContext } from '../context';

const UsersTable = ({ handleCheckChange, pageNum }) => {
  // context works
  const { pagination, users: usersData } = useContext(appContext);
  const [paginationNext, setPaginationNext] = pagination;
  const [users, setUsers] = usersData;
  // Getting the user data from the server
  useEffect(() => {
    fetch(`${API_URL}/users?page=${pageNum}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data.map((em) => ({ ...em, select: false })));
        setPaginationNext(data.pageNum);
      })
      .catch((err) => console.log(err));
  }, [pageNum, paginationNext]);
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Send Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((em) => {
            return (
              <>
                <tr>
                  <td>{em.id}</td>
                  <td>{em.first_name}</td>
                  <td>{em.last_name}</td>
                  <td>{em.email}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={(e) => {
                        let checked = e.target.checked;

                        setUsers(
                          users.map((sEm) => {
                            if (sEm.id === em.id) {
                              em.select = checked;
                            }
                            return sEm;
                          })
                        );
                        if (em.select) {
                          handleCheckChange(em, false);
                        } else {
                          handleCheckChange(em, true);
                        }
                      }}
                      checked={em.select}
                    />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
