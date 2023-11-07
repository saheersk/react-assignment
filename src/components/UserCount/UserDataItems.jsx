import React, { useEffect, useState } from "react";
import { useCount } from "../../context/CountContext";

function UserDataItems() {
    const [user, setUser] = useState({});

    const { count } = useCount();

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [count]);

    return (
        <div className="bg-blue-800 mb-5 text-white text-center">
            <h1 className="text-xl">{user.username}</h1>
            <h6 className="text-lg">{user.email}</h6>
        </div>
    );
}

export default UserDataItems;
