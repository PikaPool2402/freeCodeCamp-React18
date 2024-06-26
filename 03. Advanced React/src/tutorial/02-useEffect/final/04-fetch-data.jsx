import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <h3>Github Users!</h3>
            <ul className='users'>
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt='N/A' />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>Profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
export default FetchData;
