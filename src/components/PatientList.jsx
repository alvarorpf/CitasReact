import Patient from "./Patient.jsx";
function PatientList({patients, setPatient}) {

    return (
        <div className='md:w-1/2 lg:w-3/5 px-5 md:h-screen overflow-y-scroll'>
            {patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>
                        Listado Pacientes
                    </h2>
                    <p className='text-lg mt-5 text-center mb-5'>
                        Administra tus {''}
                        <span className='text-indigo-700 font-bold'>
                            Pacientes y Citas
                        </span>
                    </p>
                    {patients.map( p  =>(
                        <Patient
                            key={p.id}
                            patient={p}
                            setPatient={setPatient}
                        />)
                    )}
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>
                        No hay pacientes
                    </h2>
                    <p className='text-lg mt-5 text-center mb-5'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-700 font-bold'>
                            y aparecerán en este lugar
                        </span>
                    </p>
                </>
            )}

        </div>

    );
}

export default PatientList;