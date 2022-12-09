import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const {login, loginWithGoogle} = useAuth()
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
    await login(user.email, user.password)// ejecutar el sigunp con correo y password
    navigate ('/Notes')
  }catch (error){
    setError(error.message);
  }
};

const handleGoogleSignin = async () =>{
  try {
  await loginWithGoogle();
  navigate('/Notes');
  } catch (error){
    setError(error.message);
  }

}
  return (
    <div className="w-full max-w-xs m-auto">

{error && <p>{error}</p>}

<form onSubmit={handleSubmit} className= "bg-white shadow-md rounder px-8 pt-6 pb-8 mb-4"> 

<div className="mb-4">
<p className="my-4 text-sm flex justify-between px-3">
Remember everything important
      </p>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>


        <div className="flex items-center justify-between">
      <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" >Login</button>
            </div>
    </form>

    <button onClick={handleGoogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">Google Login</button>

    <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/register" className="text-purple-700 hover:text-blue-900">
          Register
        </Link>
      </p>

    </div>
  );
}
