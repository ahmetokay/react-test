import React, {useEffect, useState, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import Axios from 'axios';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {InputText} from "primereact/inputtext";
import { Toast } from 'primereact/toast';

function User() {

    const toast = useRef(null);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [userList, setUserList] = useState([]);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const kaydet = () => {

        let data = {
            name,
            surname
        }

        Axios.post('http://localhost:5050/add', data).then((response) => {
            // console.log(response)
            showSuccess()
        })
    }

    const editColumn = () => {

        return (
            <div>
                <Button icon="pi pi-refresh" className="p-button-rounded p-button-edit p-button-text" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />
            </div>
        )
    }

    useEffect(() => {

        Axios.get('http://localhost:5050/list').then((response) => {
            // console.log(response)
            setUserList(response.data)
        })
    });


    return (
        <div>
            <Toast ref={toast} />

            <form onSubmit={kaydet}>

                <div className="p-fluid">
                    <div className="p-field">
                        <InputText value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="p-field">
                        <InputText value={surname} onChange={(e) => setSurname(e.target.value)} />
                    </div>

                    <Button type="submit" label="Submit"/>
                </div>

            </form>


            <DataTable value={userList} paginator
                       paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                       currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10}
                       rowsPerPageOptions={[10, 20, 50]}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="surname" header="Surname"></Column>
                <Column body={editColumn}></Column>
            </DataTable>
        </div>
    );
}

export default User;