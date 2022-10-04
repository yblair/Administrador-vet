import Paciente from "./Paciente"
import { useEffect } from "react"

export default function ListadoPacientes({pacientes, setEditar, eliminarPaciente}){
useEffect(() => {
    if(pacientes.length > 0) console.log("se agrego")
}, [pacientes])
    
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            { pacientes && pacientes.length ? (
                <>
                <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {" "}
            <span className="text-indigo-700 font-bold">Pacientes y Citas</span></p>
            
            {pacientes.map( pacientes => 
            
            <Paciente
            key={pacientes.id}
            pacientes={pacientes}
            setEditar={setEditar}
            eliminarPaciente={eliminarPaciente}
            />

            )}
           
                </>
            ) : (
                <>
            <h2 className="font-black text-3xl text-center">Aun no tienes pacientes en tu agenda</h2>
            <p className="text-xl mt-5 mb-10 text-center">Agrega pacientes y {" "}
            <span className="text-indigo-700 font-bold">Apareceran aqui</span></p> 
                </>
            )}

            
        </div>
    )
} 