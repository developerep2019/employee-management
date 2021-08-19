/**
 * App Name : Employee Management (Client)
 * file name : Modal.js
 * files descriptions : This is the Modal Component for showing details about CSV Upload
 * Author : Md Habibul Hasan
 * Date : 18/08/2021
 */

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modalArea');
function MainModal({ isModalOpen, data }) {
  const { modalIsOpen, setIsOpen } = isModalOpen;
  const { total, success, failed } = data;
  let subtitle = { style: { color: '' } };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {total ? (
        <>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h4>Hey, We got around {total} data from the CSV file.</h4>
            <h5 className="alert alert-success">Success : {success}</h5>
            <h5 className="alert alert-danger">Failed : {failed}</h5>

            <button className="btn btn-danger" onClick={closeModal}>
              Close
            </button>
          </Modal>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default MainModal;
