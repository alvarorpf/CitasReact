function Patient({patient, setPatient, deletePatient}) {
    const {name, owner, email, date, detail, id} = patient
    const handleDelete = () => {
        const res = confirm("Desea eliminar el paciente");
        if (res){
            deletePatient(id)
        }
    }
    return (
        <div className='bg-white shadow-xl rounded-lg px-5 py-10 mb-5'>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Nombre:{' '}
                <span className='font-normal normal-case'>
                    {name}
                </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Propietario:{' '}
                <span className='font-normal normal-case'>
                    {owner}
                </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Email:{' '}
                <span className='font-normal normal-case'>
                    {email}
                </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Fecha de Alta:{' '}
                <span className='font-normal normal-case'>
                    {date}
                </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Síntomas:{' '}
                <span className='font-normal normal-case'>
                    {detail}
                </span>
            </p>
            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    onClick={()=>setPatient(patient)}
                    className='px-10 py-2 bg-green-500 hover:bg-green-400 font-bold uppercase text-white rounded-lg'>
                    Editar
                </button>
                <button
                    type='button'
                    onClick={handleDelete}
                    className='px-10 py-2 bg-red-500 hover:bg-red-400 font-bold uppercase text-white rounded-lg'>
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default Patient;