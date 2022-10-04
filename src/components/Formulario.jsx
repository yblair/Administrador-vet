import { useState, useEffect } from "react"
import Error from "./Error"

export default function Formulario({pacientes, setPacientes, editar, setEditar}){

    const [nombre, setNombre] = useState([''])
    const [propietario, setPropietario] = useState([''])
 //   const [tamaño, setTamaño] = useState([''])
    const [servicio, setServicio] = useState([''])
    const [turno, setTurno] = useState([''])
  //  const [hora, setHora] = useState([''])
    const [error, setError] = useState(false)
  //  const horario = ["9:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]
 
    useEffect(() => {
        if(Object.keys(editar).length > 0){
            setNombre(editar.nombre)
            setPropietario(editar.propietario)
            setServicio(editar.servicio)
            setTurno(editar.turno)
        }
    },[editar])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        if([nombre,propietario,servicio,turno].includes('')){
            setError(true)
            return
        }
        setError(false)
        const objPaciente = {
            nombre,
            propietario,
            servicio,
            turno
            
        }

        if(editar.id){
            //editando registro
            objPaciente.id = editar.id
            const pacientesActualizados = pacientes.map(p => p.id
                 === editar.id ? objPaciente : p)

            setPacientes(pacientesActualizados)
            setEditar({})
        } else {
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }
       
        setNombre('')
        setPropietario('')
        setServicio('')
        setTurno('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
        <h3 className="font-black text-3xl text-center ">Formulario</h3>
        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {" "} <span className="text-indigo-700 font-bold">Administralos</span></p>
       <form 
       onSubmit={handleSumbit}
       className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
         {error && <Error mensaje="Falta completar nombre"/>} 
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold
            ">Nombre Mascota</label>
            <input
            id="mascota"
            type='text'
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold
            ">Nombre Propietario</label>
            <input
            id="mascota"
            type='text'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
       {/*  <div className="mb-5">

            <label htmlFor="tamaño" className="block text-gray-700 uppercase font-bold
            ">Tamaño</label>
            <select name="tamaño" id="medida"  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
                <option value="pequeño" onChange={(e) => setTamaño(e.target.value)}>Pequeño</option>
                <option value="mediano" onChange={(e) => setTamaño(e.target.value)}>Mediano</option>
                <option value="grande" onChange={(e) => setTamaño(e.target.value)}>Grande</option>
            </select>
           
        </div> */}
        <div className="mb-5">

        <label className="m-3 text-gray-700 uppercase font-bold">
            <input type="checkbox" id="cbox1" value="baño"  onChange={(e) => setServicio(e.target.value)}
            className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Baño</label>
       
        <label className="m-3 text-gray-700 uppercase font-bold">
            <input type="checkbox" id="cbox2" value="baño + peluqueria"  onChange={(e) => setServicio(e.target.value)}
            className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Baño + peluqueria</label>

        <label className="m-3 text-gray-700 uppercase font-bold">
            <input type="checkbox" id="cbox3" value="baño medicado"   onChange={(e) => setServicio(e.target.value)}
            className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Baño medicado</label>
        
        </div>
        <div className="mb-5">

<label className="m-3 text-gray-700 uppercase font-bold">
    <input type="checkbox" id="cbox1" value="corte de uñas"  onChange={(e) => setServicio(e.target.value)}
    className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Corte de uñas</label>

<label className="m-3 text-gray-700 uppercase font-bold">
    <input type="checkbox" id="cbox2" value="limpieza de oidos" onChange={(e) => setServicio(e.target.value)} 
    className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Limpieza de oidos</label>

<label className="m-3 text-gray-700 uppercase font-bold">
    <input type="checkbox" id="cbox3" value="anti pyg"  onChange={(e) => setServicio(e.target.value)}
    className="border-2  p-2 mt-2 placeholder-gray-400 rounded-md"/>Anti pyg</label>

</div>
        <div className="mb-5">
            <label htmlFor="turno" className="block text-gray-700 uppercase font-bold
            ">Turno</label>
            <input
            id="turno"
            type='date'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            />
        </div>

        {/* <div className="mb-5">

<label htmlFor="hora" className="block text-gray-700 uppercase font-bold">Hora</label>
<select name="hora" id="hora" onChange={(e) => setHora(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md">
    { horario.map(hora => {
        return(
            <option value={hora}>{hora}</option> 
        )
    })}

</select>

</div> */}
<input
type="submit"
className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all rounded-xl"
value={ editar.id ? "Editar paciente" : "Agregar paciente"}
/>
       </form>
        </div>
    )
}