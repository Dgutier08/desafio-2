import { useState } from 'react'
import Buttonaparece from './Buttonaparece';
import FormInput from './FormInput';

function App() {
  const [Clave, setClave] = useState("");
  return (
    <>
    <h1>Ingreso de claves</h1>
    <FormInput setClave = {setClave}/>
    {Clave === "252525" ? <Buttonaparece />:null}
    </>  
   
  );
}
export default App;
