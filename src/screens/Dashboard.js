import React, {useEffect} from 'react';
import '.././App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from 'react-redux';
import {demoActions} from '../action/demo.action';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  

function Dashboard() {
  const dataResult = useSelector(state => state.demo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(demoActions.getAllPost());
  }, [dispatch]);

  const deleteData =(id)=>{
    dispatch(demoActions.deleteData(id));
  }

  //dataResult.demoType= "DELETE_POST_SUCCESS" && alert("Success full delete")
  return (
    <div>
          <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID </StyledTableCell>
            <StyledTableCell>USERID</StyledTableCell>
            <StyledTableCell >TITLE</StyledTableCell>
            <StyledTableCell >BODY</StyledTableCell>
            {/* <StyledTableCell >Protein&nbsp;(g)</StyledTableCell> */}
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataResult?.demoData?.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell>{row.id}</StyledTableCell>
               <StyledTableCell>{row.userId}</StyledTableCell>
              <StyledTableCell>{row.title}</StyledTableCell>
              <StyledTableCell >{row.body}</StyledTableCell>
              {/* <StyledTableCell >{row.carbs}</StyledTableCell> */}
              <StyledTableCell >
              <Button size="small">Edit</Button>
              <Button size="small" onClick={()=>deleteData(row.id)}>Delete</Button>
              </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
    </div>
  );
}

export default Dashboard;