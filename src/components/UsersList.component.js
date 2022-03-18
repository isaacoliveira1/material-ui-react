import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../services/UserHttp.service';
import { UsersTable } from './UsersTable.component';

 const UsersList = () => {
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getAllUsers().then(res => setRows(res.data))

    }, []);

    return(
            <UsersTable rows={rows} />
    );
}
export default UsersList;