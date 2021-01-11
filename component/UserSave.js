import React, {useEffect} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


function UserSave() {


    useEffect(() => {

        console.log("geldi")
    });

    const kaydet = (data) => {

        console.log(data)

        // Axios.post('http://localhost:5050/add', data).then((response) => {
        //     // console.log(response)
        // })
    }

    return (
        <form onSubmit={kaydet}>

            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="firstname1">Firstname</label>
                    <InputText id="firstname1" name="name" type="text"/>
                </div>
                <div className="p-field">
                    <label htmlFor="lastname1">Lastname</label>
                    <InputText id="lastname1" name="surname" type="text"/>
                </div>

                <Button type="button" label="Submit"/>
            </div>

        </form>
    );
}

export default UserSave;