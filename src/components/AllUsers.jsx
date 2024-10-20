import { Table, TableBody, TableCell, TableRow, TableHead , styled, Button } from "@mui/material";
import { getUsers, deleteUser } from "../service/api.js";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const  StyledTable = styled(Table)`
      width: 90%;
      margin: 50px auto 0 auto;
`
const THead = styled(TableRow) `
    background: #000000;
    & > th {
    color: #fff;
    font-size: 20px;     }
    
`

const TBody = styled(TableRow) `
    & > td {
    font-size: 20px;
    }
`


const AllUsers = () => {

    const [users, setUsers] = useState([]);

useEffect(() => {
    getAllUsers();

}, []);

const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
   
}

const deleteUserDetails = async(id) => {
    await deleteUser(id);
    getAllUsers();
}

    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody key={user.userId}>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10 }} component={Link} to = {`/edit/${user.userId}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick = {() => deleteUserDetails(user.userId)}  >Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
}

export default AllUsers;

