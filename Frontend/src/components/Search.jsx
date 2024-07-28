import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/search', { regNo: search });
      navigate('/uad');
    } catch (error) {
      console.log('There was an error making the request', error);
    }
  };

  return (
    <div className='bg-gray-800 h-screen flex justify-center items-center'>
      <div className='bg-gray-600 p-10 rounded-lg shadow-lg'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <h2 className='text-3xl text-white font-bold'>
            Search Student
          </h2>
          <input
            type="text"
            name="regNo"
            placeholder="Enter Registration Number"
            className='bg-gray-700 text-white p-2 rounded-lg focus:outline-none'
            onChange={handleInputChange}
          />
          <button type="submit" className='text-white rounded-xl bg-gray-800 px-5 py-2'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
