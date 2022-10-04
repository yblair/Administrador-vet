

const Paciente = ({pacientes, setEditar, eliminarPaciente}) => {
 console.log("desde pacientes", pacientes)
 const handleEliminar = () => {
   confirm('deseas eliminarlo?') ?
  eliminarPaciente(pacientes.id) : null
 }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {' '}
        <span className="font-normal normal-case">{pacientes.nombre}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {' '}
        <span className="font-normal normal-case">{pacientes.propietario}</span></p>
     {/*    <p className="font-bold mb-3 text-gray-700 uppercase">Tamaño: {' '}
        <span className="font-normal normal-case">Pequeño</span></p> */}
        <p className="font-bold mb-3 text-gray-700 uppercase">Atencion:
        <span className="font-normal normal-case">{pacientes.servicio}</span></p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Turno: {' '}
        <span className="font-normal normal-case">{pacientes.turno}</span></p>
     {/*    <p className="font-bold mb-3 text-gray-700 uppercase">Hora: {' '}
        <span className="font-normal normal-case">12:00</span></p> */}


        <div className="flex justify-between">
          <button 
          type="button"
          onClick={() => setEditar(pacientes)}
          className="py-2 px-10 bg-indigo-700 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg">
            Editar</button>
        
          <button
          type="button"
          onClick={handleEliminar}
          className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg"
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente