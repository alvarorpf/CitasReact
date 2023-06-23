import {useState} from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import PatientList from "./components/PatientList.jsx";


function App() {

    const [patients, setPatients] = useState([]);

    return (
        <div className="container mx-auto mt-10">
            <Header
                numbers={1}
            />
            <div className='mt-12 md:flex'>
                <Form />
                <PatientList />
            </div>
        </div>
    )
}

export default App
