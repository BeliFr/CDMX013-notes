import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
//ejecuto useAuth, me devuelve un objeto
//estamos exportando e objeto signup de authContext ypropiedad
const {signup} = useAuth()
const navigate = useNavigate ()
const [error,setError] = useState();

  // para actualizar los valores del email y password
  // fx handleChange recibe un objeto de evento

  const handleChange = ({target:{name, value}}) => { // evento propiedad target extraer name y value
    setUser ({...user, [name]: value})//... clonar propiedades de user
  };

  const handleSubmit = async e =>{ //cancela el evento de envio
    e.preventDefault()
    setError('');
    try {
    await signup(user.email, user.password)// ejecutar el sigunp con correo y password
    navigate ('/')
  }catch (error){
    setError(error.message);
  }
};
  return (
    <div className="w-full max-w-xs m-auto">

{error && <p>{error}</p>}

<form onSubmit={handleSubmit}className= "bg-white shadow-md rounder px-8 pt-6 pb-8 mb-4"> 
      <div className="mb-4">    
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2"
          >Email </label>
      <input
        type="email"
        name="email"
        placeholder="youremail@company.com"
        onChange={handleChange} //su evento se usa fx
      />
      </div>
      <div className="mb-4">
      <label htmlFor="password"className="block text-gray-700 text-sm font-bold mb-2" >Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        placeholder = "******"
      />
      </div>

      <div className="flex items-center justify-between">
      <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">Register</button>
          </div>
    </form>


    </div>
  );
}
