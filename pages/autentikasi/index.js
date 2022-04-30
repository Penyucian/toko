import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import { useFormInput } from "../../utils/hooks/useForm";

export default function Home() {

  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault()
  }

  const handleLogin = () => {
    setLoading(true)
    if ((username.value && password.value) !== "") {
        axios.post("http://localhost:3000/api/autentikasi",
            {
                username: username.value,
                password: password.value
            }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (response.data.data) {
                    if (response.data.data) {
                        localStorage.setItem("authorization", response.data.data);
                        setError(null)
                        Router.push('./dasboard')
                    }
                    return response.data;
                } else {
                    setLoading(false)
                    setError(response.data.message)
                }
          })
      }
    }
       
  return (
    
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      
      {loading ? <div className="text-white p-1 bg-blue-700 rounded-lg">Loading...</div> :
      <div className="p-8 rounded-lg shadow flex justify-center items-center flex-col bg-white ">
        <h3 className="text-xl font-bold">Agent Login</h3>
        
        {error && <>
          <div className="w-full h-auto text-red-500">
            {error}
          </div>
          <br />
          </>
        }
        <form className='mt-8 w-full' onSubmit={loginUser}>
          <div className="w-full flex flex-col">
            <label htmlFor="username">
              username
            </label>
            <input 
              className='mt-1 px-4 py-2 border border-gray-900 rounded-lg outline-none hover:bg-gray-200 focus:bg-gray-100' 
              type="text"
              {...username}
              name="username" 
              id="usernameLogin" 
              placeholder='username' 
              autoFocus
              required
            />
          </div>
          <div className="w-full flex flex-col mt-4">
            <label htmlFor="password">
              password
            </label>
            <input 
              className="mt-1 px-4 py-2 border border-gray-900 rounded-lg outline-none hover:bg-gray-200 focus:bg-gray-100"
              name="password" 
              id="passwordLogin" 
              placeholder='password'
              type="password"
              {...password}
              required
            />
          </div>
          <button 
            className="mt-12 px-4 py-2 border border-gray-900  bg-white w-full rounded-lg hover:bg-gray-900 hover:text-white active:bg-white active:text-black" 
            type="submit"
            onClick={handleLogin}
            disabled={loading}
            >Sign In</button>
        </form>
      </div>
      }
    </div>
  )
}
