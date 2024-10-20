import React, { useState, useEffect } from "react";

import { FormGroup,FormControl, InputLabel, Input, Typography, styled , Button} from "@mui/material";

import { editUser, getUser } from "../service/api";
import {useNavigate, useParams} from "react-router-dom";


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


const EditUser = () => {


    const [user, setUser] = useState(defaultValue)

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    // const loadUserDetails = async () => {
    //     const response = await getUser(id);
    //     setUser(response.data);
    // }

    const loadUserDetails = async () => {
        try {
            const response = await getUser(id);
            if (response && response.data) {
                setUser(response.data);
            } else {
                console.log('User data not found');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
       
    }

    const editUserDetails = async () => {
       await editUser(user, id);
       navigate('/all');
    }
    return (
        <div>
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)}  name="name" value={user.name} />
            </FormControl>
        
        
        <FormControl>
            <InputLabel>User Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
        </FormControl>
     
            <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email"  value={user.email}/>
        </FormControl>
        
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
        </FormControl>
        <FormControl>
            <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
        </FormControl>
        </Container>
        
    </div>
    )
}

export default EditUser;


// const EditUser = () => {
//     const [user, setUser] = useState(defaultValue);
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         loadUserDetails();
//     }, []);

//     const loadUserDetails = async () => {
//         try {
//             const response = await getUser(id);
//             if (response && response.data) {
//                 setUser(response.data);
//             } else {
//                 console.log('User data not found');
//             }
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//         }
//     };

//     const onValueChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const editUserDetails = async () => {
//         await editUser(user, id);
//         navigate('/all');
//     };

//     return (
//         <Container>
//             <Typography variant="h4">Edit User</Typography>
//             <FormControl>
//                 <InputLabel>Name</InputLabel>
//                 <Input onChange={onValueChange} name="name" value={user.name || ''} />
//             </FormControl>

//             <FormControl>
//                 <InputLabel>Username</InputLabel>
//                 <Input onChange={onValueChange} name="username" value={user.username || ''} />
//             </FormControl>

//             <FormControl>
//                 <InputLabel>Email</InputLabel>
//                 <Input onChange={onValueChange} name="email" value={user.email || ''} />
//             </FormControl>

//             <FormControl>
//                 <InputLabel>Phone</InputLabel>
//                 <Input onChange={onValueChange} name="phone" value={user.phone || ''} />
//             </FormControl>

//             <FormControl>
//                 <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
//             </FormControl>
//         </Container>
//     );
// };

// export default EditUser;

