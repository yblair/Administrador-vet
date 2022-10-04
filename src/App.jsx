import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import { useState, useEffect } from 'react';

function App() {
  const initial = JSON.parse(localStorage.getItem('pacientes')) ?? [];
 const [pacientes, setPacientes] = useState(initial)
 const [editar, setEditar] = useState({})


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(p => p.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-20'>
    <Header/>
    <div   className='mt-12 sm:flex'  >
    <Formulario
    pacientes={pacientes}
    setPacientes={setPacientes}
    editar={editar}
    setEditar={setEditar}
    />
    <ListadoPacientes
    pacientes={pacientes}
    setEditar={setEditar}
    eliminarPaciente={eliminarPaciente}
    />
    </div>
      
    </div>
  )
}

export default App
