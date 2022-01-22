import { v4 as uuid } from 'uuid';
let users = [];

export const getUsers = (req,res) => {
    res.send(users);
}

export const createUsers = (req,res) => {
    const userData = req.body;
    users.push({...userData,id:uuid()});
    res.send('User Added Successfully');
}

export const getUser = (req,res) => {
    const singleUser = users.filter((user)=> user.id === req.params.id);
    res.send(singleUser);
}

export const delUser = (req,res) => {
    users = users.filter((user)=> user.id !== req.params.id);
    res.send('User deleted Successfully');
}

export const updateUser = (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.Phone = req.body.Phone;

    res.send('User Updated Successfully');
}