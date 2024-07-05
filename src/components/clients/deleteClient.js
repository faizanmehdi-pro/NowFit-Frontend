import React from 'react'
import styled from 'styled-components'
import { deleteClient } from '../../api/auth/deleteClient';
import { toast } from 'react-toastify';

const DeleteModal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
display: ${({ showDeleteModal }) => (showDeleteModal ? 'flex' : 'none')};
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.5);
`;

const DeleteModalContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding: 20px;
background: #fff;
border: 1px solid #F78852;
border-radius: 8px;

h1{
    margin: 20px 0;
}
`;

const DeleteButtons = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

const CancelButton = styled.div`
background: #EBE9E9;
border: none;
border-radius: 8px;
height: 50px;
width: 130px;
color: #F78852;
font-weight: 600;
font-size: 18px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;

const DeleteButton = styled.div`
background: #F78852;
border: none;
border-radius: 8px;
height: 50px;
width: 130px;
color: #fff;
font-weight: 600;
font-size: 18px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
`;

const DeleteClient = ({showDeleteModal, setShowDeleteModal, setClientLoading, clientID, isAdmin}) => {
    
  const handleDelete = () => {
    setClientLoading(true);
    
    deleteClient(clientID)
      .then((response) => {
        toast.success("Deleted Successfully");
        setShowDeleteModal(false)
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
        toast.error("Please Try Again!");
      });
  };

  return (
    <DeleteModal showDeleteModal={showDeleteModal}>
        <DeleteModalContent>
            <h1>Are you sure to remove {isAdmin === "true" ? "Client" : "Coach"} ({clientID})?</h1>
            <DeleteButtons>
                <CancelButton onClick={() => setShowDeleteModal(false)}>NO</CancelButton>
                <DeleteButton onClick={handleDelete}>YES</DeleteButton>
            </DeleteButtons>
       </DeleteModalContent>
    </DeleteModal>
  )
}

export default DeleteClient
