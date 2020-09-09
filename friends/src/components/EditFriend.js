import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EditFriend = (props) => {
    const friendId = props.id;
    const [friend, setFriend] = useState({});

    useEffect(() =>{
        axiosWithAuth()
            .get(`friends/${friendId}`)
            .then(res => {
                //console.log(res.data);
                setFriend(res.data)
            })
            .catch(err => {
                console.log("error", err)
            });
    },[]);


    const [edit, setEdit] = useState({});

    const handleChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        });
    };


    return(
        <div>
            <form onSubmit={(e) => {e.preventDefault(); props.edit(friendId, edit);}}>
            <p>Edit Friend</p>
                <input type="text" name="name" placeholder={friend.name || ''} onChange={handleChange}/>
                <input type="text" name="age" placeholder={friend.age || ''} onChange={handleChange} />
                <input type="email" name="email" placeholder={friend.email || ''} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default EditFriend;