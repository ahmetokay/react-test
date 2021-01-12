import React, {useState, useEffect} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function UserSave() {

    const citySelectItems = [
        {id: 1, label: 'New York', short: 'NY'},
        {id: 2, label: 'Rome', short: 'RM'},
        {id: 3, label: 'London', short: 'LDN'},
        {id: 4, label: 'Istanbul', short: 'IST'},
        {id: 5, label: 'Paris', short: 'PRS'}
    ];

    // initial object
    const [user, setUser] = useState({
        username: 'Ahmet',
        email: 'ahmet@ahmet.com',
        city: {id: 5, label: 'Paris', short: 'PRS'}
    });

    useEffect(() => {

    }, []);

    const kaydet = (data) => {

        console.log(user)
    }

    return (

        <form onSubmit={kaydet}>

            <div className="p-fluid">
                <div className="p-field">
                    <label>Username</label>
                    <InputText  value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}/>
                </div>
                <div className="p-field">
                    <label>e-mail</label>
                    <InputText  value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
                </div>
                <div className="p-field">
                    <label>City</label>
                    <Dropdown value={user.city} options={citySelectItems} onChange={(e) => setUser({...user, city: e.value})} placeholder="Select a City"/>
                </div>

                <Button type="submit" label="Submit"/>
            </div>

        </form>
    );
}

export default UserSave;