import React from 'react';


const Friend = (props) =>{
    return(
        <div className="friend">
           <h3>{props.data.name}</h3>
           <h3>Age: {props.data.age}</h3>
           <h3>Email: {props.data.email}</h3>
           <button onClick={() => props.toggleEdit(props.data.id)}>Edit</button>
           <button onClick={() => props.remove(props.data.id)}>Delete</button>
        </div>
    );
};

export default Friend;