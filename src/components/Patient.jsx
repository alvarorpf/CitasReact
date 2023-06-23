function Patient(props) {
    return (
        <div className='bg-white shadow-xl rounded-lg px-5 py-10 mb-5'>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Nombre:{''}
                <span className='font-normal normal-case'>
                        Hook
                    </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Propietario:{''}
                <span className='font-normal normal-case'>
                        Alvaro
                    </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Email:{''}
                <span className='font-normal normal-case'>
                        correo@correo.com
                    </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Fecha de Alta:{''}
                <span className='font-normal normal-case'>
                        10/12/2021
                    </span>
            </p>
            <p className='font-bold text-gray-600 mb-2 uppercase'>
                Síntomas:{''}
                <span className='font-normal normal-case'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis culpa dolor dolore dolorem enim ex excepturi facere laudantium maxime natus non optio, porro, quam qui quibusdam quos reprehenderit voluptates.
                    </span>
            </p>
        </div>
    );
}

export default Patient;