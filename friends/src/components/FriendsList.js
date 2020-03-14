import React,{ useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"; 
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import EditFriend from "./EditFriend";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState('');
    
    useEffect(() =>{
        axiosWithAuth()
        .get("/friends")
        .then(res =>{
            //console.log("friends", res.data)
            setFriends(res.data)
        })
        .catch(err =>{
            console.log("Error", err)
        });
    },[]);

    const add = (newFriend) => {
        axiosWithAuth()
            .post("/friends", newFriend)
            .then(res => {
                //console.log(res);
                setFriends(res.data);

            })
            .catch(err => {
                console.log("error", err);
            });
    };

    const remove = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                setFriends(res.data);

            })
            .catch(err => {
                console.log("error", err);
            });
    };

    const edit = (id, data) => {
        axiosWithAuth()
            .put(`friends/${id}`, data)
            .then(res => {
                setFriends(res.data);

            })
            .catch(err => {
                console.log("error", err);
            });
    }

    const toggleEdit = (id) => {
        if(isEdit === false){
            setIsEdit(true);
        }else{
            setIsEdit(false);
        }

        setEditId(id);
    }



    return(
        <div>
            {friends.map( x => (
                <Friend key={x.id} data={x} remove={remove} toggleEdit={toggleEdit}/>
            ))}
            {isEdit === false ? <AddFriend add={add}/> : <EditFriend id={editId} edit={edit}/>}
            
        </div>
    );
} 

export default FriendsList;