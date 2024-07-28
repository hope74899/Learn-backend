import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        regNo: '',
        name: '',
        department: '',
        degree: '',
        semester: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/create', student

                // learn about headers
                // {
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // }
            );
            console.log('Student created:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Error for creating student:', error);
        }
    };

    return (
        <div className='bg-gray-800 h-screen flex justify-center'>
            <div className='flex flex-col items-center my-20 px-20 bg-gray-600'>
                <div className='mt-5 bg-gray-600'>
                    <h2 className='text-3xl text-white font-bold'>Class Information</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <table className='border-2 text-white text-xl my-10'>
                            <thead className='border-2'>
                                <tr>
                                    <th className='p-4 border-2'>RegNo.</th>
                                    <th className='p-4 border-2'>Name</th>
                                    <th className='p-4 border-2'>Department</th>
                                    <th className='p-4 border-2'>Degree</th>
                                    <th className='p-4 border-2'>Semester</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='p-4 border-2'>
                                        <div className='flex items-center justify-center h-full'>
                                            <input className='text-center outline-none bg-gray-600 w-10' type="text" name='regNo' value={student.regNo} onChange={handleChange} />
                                        </div>
                                    </td>
                                    <td className='p-4 border-2'>
                                        <div className='flex items-center justify-center h-full'>
                                            <input className='text-center outline-none bg-gray-600 w-48' type="text" name='name' value={student.name} onChange={handleChange} />
                                        </div>
                                    </td>
                                    <td className='p-4 border-2'>
                                        <div className='flex items-center justify-center h-full'>
                                            <input className='text-center outline-none bg-gray-600 w-48' type="text" name='department' value={student.department} onChange={handleChange} />
                                        </div>
                                    </td>
                                    <td className='p-4 border-2'>
                                        <div className='flex items-center justify-center h-full'>
                                            <input className='text-center outline-none bg-gray-600 w-20' type="text" name='degree' value={student.degree} onChange={handleChange} />
                                        </div>
                                    </td>
                                    <td className='p-4 border-2'>
                                        <div className='flex items-center justify-center h-full'>
                                            <input className='text-center outline-none bg-gray-600 w-10' type="text" name='semester' value={student.semester} onChange={handleChange} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-10 flex justify-center items-center gap-x-2'>
                        <button className='text-white rounded-xl bg-gray-800 px-5 py-2' type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
