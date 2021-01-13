import React, {useState, useEffect} from 'react';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Axios from "axios";


function UserSave() {

    const [username, setUsername] = useState('');
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {

    }, []);

    const kaydet = () => {

        Axios.get('https://jsonplaceholder.typicode.com/comments').then(result => console.log(result))

    }

    const handleOnSubmit = (event) => {

        event.preventDefault()

        kaydet()


        setShowDialog(false)
    }

    return (

        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => setShowDialog(true)} />

            <Dialog header="Header" visible={showDialog} modal={true} style={{ width: '50vw' }} onHide={() => setShowDialog(false)}>
                <form onSubmit={handleOnSubmit}>

                    <div className="p-fluid">
                        <div className="p-field">
                            <label>Username</label>
                            <InputText  value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <Button type="submit" label="Submit"/>
                    </div>

                </form>
            </Dialog>
        </div>
    );
}

export default UserSave;