import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Divider, Status, StatusCircle } from './monthlyRevenueStyles';
import { Img } from "../../reuseableComponents/globalStyles"
import edit from "../../assets/images/edit.svg"
import deleteIcon from "../../assets/images/delete.svg"
import activeEdit from "../../assets/images/activeEdit.svg"
import activeDelete from "../../assets/images/activeDelete.svg"


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



function createData(amount, name, date, Description, status) {
  return { amount, name, date, Description, status };
}

const rows = [
  createData( '$150', 'Jack', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Succeeded' ),
  createData('$160',  'Oliver', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Failed'),
  createData('$170', 'Henry', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Cancelled'),
  createData('$180', 'Aurthur', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Succeeded'),
  createData('$200', 'William', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Succeeded'),
  createData('$220', 'James', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Succeeded'),
  createData('$250', 'Charlie', 'Apr 27, 3:18 pm', 'Trainer Consultancy Commission', 'Succeeded'),
];

export default function MonthlyRevenueTables() {
  const [hoverIcons, setHoverIcons] = useState(rows.map(() => false));

  const handleRowHover = (index, isHovered) => {
    setHoverIcons(prevState => {
      const newState = [...prevState];
      newState[index] = isHovered;
      return newState;
    });
  };

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Amount</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Cient</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            {/* <StyledTableCell>Actions</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <Divider />
        <TableBody>
          {rows.map((row, index) => (
            <React.Fragment key={row.amount}>
              <StyledTableRow
                key={row.amount}
                onMouseEnter={() => handleRowHover(index, true)}
                onMouseLeave={() => handleRowHover(index, false)}
              >
                <StyledTableCell component="th" scope="row">
                  {row.amount}
                </StyledTableCell>
                <StyledTableCell>
                  <Status>
                    <StatusCircle hoverIcons={hoverIcons[index]}/> {row.status}
                  </Status>
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell>{row.date}</StyledTableCell>
                <StyledTableCell>{row.Description}</StyledTableCell>
                {/* <StyledTableCell>
                  {hoverIcons[index] ?
                    <Status>
                      <Img src={activeEdit} alt="activeEdit" />
                      <Img src={activeDelete} alt="activeDelete" />
                    </Status>
                    : 
                    <Status>
                      <Img src={edit} alt="edit" />
                      <Img src={deleteIcon} alt="deleteIcon" />
                    </Status>
                  }
                </StyledTableCell> */}
              </StyledTableRow>
              <Divider />
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
