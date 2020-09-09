import React, { useState } from 'react';


const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({});

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault(); props.add(newFriend);}}>
                <p>Add a Friend</p>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <input type="text" name="age" placeholder="Age" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddFriend;