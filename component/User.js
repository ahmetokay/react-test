import React, {useEffect, useState, useRef } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dialog} from 'primereact/dialog';
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

    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [rowId, setRowId] = useState(0);

    const onClick = (name, rowId) => {
        setDisplayConfirmation(true)
        setRowId(rowId)
    }

    const onHide = (name) => {
        setDisplayConfirmation(false)
    }

    const sil = (id) => {

        console.log(id)
        debugger

        Axios.get('http://localhost:5050/delete', {
            params: {
                "id": rowId
            }
        }).then((response) => {
            // console.log(response)
            showSuccess()
        })
    }

    const renderFooter = (name, rowId) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => {onHide(name); sil(rowId)}} autoFocus />
            </div>
        );
    }

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const showFail = () => {
        toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    const kaydet = () => {

        let data = {
            name,
            surname
        }

        Axios.post('http://localhost:5050/add', data).then((response) => {
            // console.log(response)
            showSuccess()
            showFail()
        })
    }



    const editColumn = (rowData) => {

        return (
            <div>
                <Button icon="pi pi-refresh" className="p-button-rounded p-button-edit p-button-text" />
                <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" onClick={() => onClick('displayConfirmation')} />
            </div>
        )
    }

    useEffect(() => {

        Axios.get('http://localhost:5050/list').then((response) => {
            // console.log(response)
            setUserList(response.data)
        })
    }, []);


    return (
        <div>
            <Toast ref={toast} />

            <Dialog header="Confirmation" visible={displayConfirmation} modal style={{ width: '350px' }} footer={renderFooter('displayConfirmation', rowId)} onHide={() => onHide('displayConfirmation')}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem' }} />
                    <span>Are you sure you want to proceed?</span>
                </div>
            </Dialog>

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