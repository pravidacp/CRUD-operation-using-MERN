import React, { useState } from "react";

import { FormGroup,FormControl, InputLabel, Input, Typography, styled , Button} from "@mui/material";

import { addUser} from "../service/api";
import {useNavigate} from "react-router-dom";


const Container = styled(FormGroup)`
width: 50%;
margin:5% auto 0 auto;
 & > div { margin-top: 20px;} //This targets any immediate child <div> inside the Container and applies a 20px top margin to them.
// The FormControl components render as div elements, so this rule will apply to each FormControl, ensuring there’s vertical spacing of 20px between each form input.
`
// Together, & > means "select the direct child elements of the current component."

const defaultValue = {
    name: '', 
    username: '',
    email: '',
    phone: ''
}


const AddUser = () => {

    

    const [user, setUser] = useState({defaultValue})

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
       
    }

    const addUserDetails = async () => {
       await addUser(user);
       navigate('/all');
    }
    return (
        <div>
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="name" />
            </FormControl>
        
        
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username" />
        </FormControl>
     
            <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={addUserDetails}>Add User</Button>
        </FormControl>
        </Container>
        
    </div>
    )
}

export default AddUser;