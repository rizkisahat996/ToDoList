import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()

        await signup(name, email, password)
    }

    return (
        <div className="flex justify-center items-center h-screen absolute inset-0">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Name" 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="text" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="password" 
                placeholder="******************" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="flex items-center justify-between">
            <button disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Signup
            </button>

            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                Has an Account? Login here
            </a>
            </div>

            {error && <div className="error">{error}</div>}
        </form>
        </div>
    )
}

export default Signup