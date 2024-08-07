import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider, Status, StatusCircle } from './clientsStyles';
import { Img } from "../../reuseableComponents/globalStyles"
import edit from "../../assets/images/edit.svg"
import deleteIcon from "../../assets/images/delete.svg"
import activeEdit from "../../assets/images/activeEdit.svg"
import activeDelete from "../../assets/images/activeDelete.svg"
import { deleteClient } from '../../api/auth/deleteClient';
import { toast } from 'react-toastify';
import { getClient } from '../../api/auth/getClient';
import DeleteClient from './deleteClient';
import Loader from '../../reuseableComponents/loader/loader';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#D9D9D9",
      fontWeight: 700,
      color: theme.palette.common.black,
    },'&:first-child': {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },'&:last-child': {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 700,
      position: 'relative'
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&': {
    boxShadow: "0 0 0 1px #D9D9D9 inset",
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#F78852',
      color: '#fff',
      '& .MuiTableCell-root': {
        color: '#fff',
      },
    }
  },
}));

  

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "#fff", // Change background color of table container
  padding: 20,
  borderRadius: 8,
});



function createData(id, name, commissionRate, commissionReceived, status) {
  return { id, name, commissionRate, commissionReceived, status };
}

const rows = [
  createData( 15468, 'Jack', '20%', '$200', 'Active' ),
  createData(15469,  'Oliver', '30%', '$300', 'Pending'),
  createData(15470, 'Henry', '20%', '$400', 'Active'),
  createData(15471, 'Aurthur', '20%', '$500', 'Active'),
  createData(15472, 'William', '20%', '$200', 'Active'),
  createData(15473, 'James', '20%', '$400', 'Active'),
  createData(15474, 'Charlie', '20%', '$300', 'Active'),
];

export default function ClientsTables({allClients, clientLoading,setClientLoading, setUpdateClientData, setGetClientData, isAdmin}) {
  const [hoverIcons, setHoverIcons] = useState(rows.map(() => false));
  const [clientID, setClientID] = useState();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleRowHover = (index, isHovered) => {
    setHoverIcons(prevState => {
      const newState = [...prevState];
      newState[index] = isHovered;
      return newState;
    });
  };


  const handleEdit = (id) => {
    
    getClient(id)
      .then((response) => {
        console.log("object", response)
        setGetClientData(response);
        setUpdateClientData(true);
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
      });
  };

  return (
    <>
    <StyledTableContainer component={Paper}>
    {clientLoading ? (<Loader colorProp="#F78852"/>) : (
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Client ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <Divider />
        <TableBody>
          {allClients.map((row, index) => (
            <React.Fragment key={row.id}>
              <StyledTableRow
                key={row.id}
                onMouseEnter={() => handleRowHover(index, true)}
                onMouseLeave={() => handleRowHover(index, false)}
              >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell>{row.contactName}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.dateAdded.slice(0, 10)}</StyledTableCell>
                <StyledTableCell>
                  <Status>
                    <StatusCircle hoverIcons={hoverIcons[index]}/> {row.is_active ? "Active" : "Panding"}
                  </Status>
                </StyledTableCell>
                <StyledTableCell>
                  {hoverIcons[index] ? (
                    <Status>
                      <Img src={activeEdit} alt="activeEdit" onClick={() => handleEdit(row.id)}/>
                      <Img src={deleteIcon} alt="deleteIcon" onClick={() => { setShowDeleteModal(true); setClientID(row.id); }} />
                    </Status>
                  ) : (
                    <Status>
                      <Img src={edit} alt="edit" onClick={() => handleEdit(row.id)}/>
                      <Img src={deleteIcon} alt="deleteIcon" onClick={() => { setShowDeleteModal(true); setClientID(row.id); }} />
                    </Status>
                  )}
                </StyledTableCell>
              </StyledTableRow>
              <Divider />
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    )}
    </StyledTableContainer>
    <DeleteClient 
      showDeleteModal={showDeleteModal} 
      setShowDeleteModal={setShowDeleteModal} 
      clientID={clientID}
      setClientLoading={setClientLoading}
      isAdmin={isAdmin}
    />
    </>
  );
}
