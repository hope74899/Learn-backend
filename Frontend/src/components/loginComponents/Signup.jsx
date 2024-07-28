import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [signupInput, setsignupInput] = useState({
    name: '',
    email: '',
    password: ''

  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setsignupInput({ ...signupInput, [name]: value });
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', signupInput);
      console.log('Student created:', response.data);
      navigate('/loginhere')
    } catch (error) {
      console.error('Error for creating student:', error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  dark:bg-gray-950 dark:text-white">
      <form className='p-20 rounded w-full max-w-sm flex flex-col items-center justify-center bg-white shadow-md gap-y-8 border-4 border-yellow-300' onSubmit={handlelogin}>
        <input className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='name' value={signupInput.name} placeholder='Enter your name' onChange={onChangeHandler} required />
        <input className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='email' value={signupInput.email} placeholder='Enter your email' onChange={onChangeHandler} required />
        <input className='border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name='password' value={signupInput.password} placeholder='Enter your Password' onChange={onChangeHandler} required />
        <button className='text-black bg-yellow-300 font-bold py-2 px-8 rounded-xl'>Signup</button>
      </form>
    </div>
  )
}

export default Signup
