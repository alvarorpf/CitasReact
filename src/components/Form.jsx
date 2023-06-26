import {useState, useEffect} from 'react';
import Error from "./Error.jsx";
function Form({ patients, setPatients }){

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [detail, setDetail] = useState('');

    const [error, setError] = useState(false);

    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if([name,owner,email,date,detail].includes('')){
            setError(true)
            return;
        }
        setError(false)
        const patient = {
            id: generateId(),
            name,
            owner,
            email,
            date,
            detail,
        }
        setPatients([...patients, patient]);
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setDetail('');
    }
    return (
        <div className='md:w-1/2 lg:w-2/5 px-5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-5'>
                Añade Pacientes y {''}
                <span className='text-indigo-700 font-bold'>Administralos</span>
            </p>
            <form onSubmit={handleSubmit} action="" className='bg-white shadow-xl rounded-lg px-5 py-10 mb-5'>
                {error && <Error> Todos los campos son obligatorios!!</Error>}
                <div className='mb-2'>
                    <label htmlFor='name' className='block text-gray-600 uppercase font-bold'>
                        Nombre Mascota
                    </label>
                    <input
                        id='name'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='text'
                        placeholder='Nombre de la mascota'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='owner' className='block text-gray-600 uppercase font-bold'>
                        Nombre Propietario
                    </label>
                    <input
                        id='owner'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='text'
                        placeholder='Nombre del Propietario'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='email' className='block text-gray-600 uppercase font-bold'>
                        Correo Propietario
                    </label>
                    <input
                        id='email'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='email'
                        placeholder='Correo Electrónico'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='date' className='block text-gray-600 uppercase font-bold'>
                        Fecha de Alta
                    </label>
                    <input
                        id='date'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='detail' className='block text-gray-600 uppercase font-bold'>
                        Detalle de Paciente
                    </label>
                    <textarea id="detail"
                              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                              placeholder='Detalle del paciente (Sintomas ,alergias, etc.)'
                              value={detail}
                              onChange={(e) => setDetail(e.target.value)}
                    />
                </div>
                <input className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-opacity rounded'
                       type="submit" value='Agregar Paciente'/>
            </form>
        </div>
    );
}

export default Form;