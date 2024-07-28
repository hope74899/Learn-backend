import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Loginhere = () => {
    const navigate = useNavigate();

    const [loginInput, setloginInput] = useState({
        email: '',
        password: ''
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setloginInput({ ...loginInput, [name]: value });
    };

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/loginhere', loginInput);
            console.log('Student created:', response.data);
            navigate('/')
        } catch (error) {
            console.error('Error for creating student:', error);
        }
    };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <form className='p-20 rounded w-full max-w-sm flex flex-col items-center justify-center bg-white shadow-md gap-y-8 border-4 border-yellow-300' onSubmit={handlelogin}>
                <input className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" name='email' value={loginInput.email} placeholder='Enter your email' onChange={onChangeHandler} required />
                <input className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name='password' value={loginInput.password} placeholder='Enter your Password' onChange={onChangeHandler} required />
                <button className='text-black bg-yellow-300 font-bold py-2 px-8 rounded-xl '>Login</button>
                <p className='text-lg'><Link to='/Signup'><span className='text-blue-500'>Sign up </span></Link>here</p>
            </form>
        </div>
    )
}


export default Loginhere
