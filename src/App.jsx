import {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import PatientList from "./components/PatientList.jsx";


function App() {

    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});

    useEffect(()=>{
        const getLocalStorage = () => {
            const patientsStorage = JSON.parse(localStorage.getItem("patients")) ?? []
            setPatients(patientsStorage)
        }
        getLocalStorage()
    }, [])

    useEffect(()=>{
        localStorage.setItem("patients", JSON.stringify(patients))
    }, [patients])
    const deletePatient = (id) => {
        const patientsUpdate = patients.filter(patient => patient.id !== id)
        setPatients(patientsUpdate)
    }

    return (
        <div className="container mx-auto mt-10">
            <Header
            />
            <div className='mt-12 md:flex'>
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatient={setPatient}
                />
                <PatientList
                    patients={patients}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                />
            </div>
        </div>
    )
}

export default App
