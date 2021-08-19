/**
 * App Name : Employee Management (Client)
 * file name : FileUpload.js
 * files descriptions : This is the component for uploading a CSV file
 * Author : Md Habibul Hasan
 * Date : 16/08/2021
 */

import React, { useMemo, useState, lazy } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { API_URL } from '../config';
import { ClipLoader } from 'react-spinners';
const Modal = lazy(() => import('./Modal'));

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '100px',
  paddingBottom: '100px',
  width: '100% !important',
  alignItems: 'center',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#718093',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  cursor: 'pointer',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function StyledDropzone() {
  const [load, setLoad] = useState(false);
  const [file, setFile] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [serverData, setServerData] = useState({});

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'text/csv',
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleFileUpload = (e) => {
    if (file) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', file);
      setLoad(true);
      fetch(`${API_URL}/create-user-csv`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, 'logging the data');
          const { message, data: info, status, total } = data;
          setFile(null);
          setLoad(false);
          setServerData(info);
          setIsOpen(true);
          toast[status](message);
        })
        .catch((err) => {
          setLoad(false);
          toast.error('Something went wrong');
        });
    } else if (!file) {
      toast.error('Please upload a file');
    }
  };
  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} onChange={handleFileChange} />
          {file ? (
            <h6>
              File Uploaded : {file.name} - {(file.size / 1000).toFixed(2)} KB
            </h6>
          ) : (
            <p>
              Drag 'n' drop some files here, or click to select files (*We
              Accept only CSV files.)
            </p>
          )}
        </div>
      </div>

      <button className="btn btn-warning mt-5" onClick={handleFileUpload}>
        Upload
      </button>
      {load ? <ClipLoader size={20} /> : ''}
      <br />
      <Modal isModalOpen={{ modalIsOpen, setIsOpen }} data={serverData} />
    </>
  );
}

export default StyledDropzone;
