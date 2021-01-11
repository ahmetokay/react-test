import React, {useState, createContext} from 'react';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function Login() {

    const es = {
        firstDayOfWeek1: 1,
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        today: "Hoy",
        clear: "Claro"
    };



    const tr = {
        firstDayOfWeek1: 1,
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
        dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
        today: "Bugün",
        clear: "Temizle"
    };

    const languageItems = [
        {label: 'Türkçe', value: tr},
        {label: 'İspanyolca', value: es}
    ];


    const [language, setLanguage] = useState(tr);
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Dropdown optionLabel="label" value={language} options={languageItems}
                      onChange={(e) => {setLanguage(e.value)}} placeholder="Dil seçimi"/>

            <Calendar inline value={date} onChange={(e) => setDate(e.value)} locale={language}
                      dateFormat="dd/mm/yyyy"></Calendar>

            <InputText value={date}/>
        </div>
    );
}

export default Login;