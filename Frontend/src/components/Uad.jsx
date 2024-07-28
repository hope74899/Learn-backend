import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Uad = () => {
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Make API call to fetch student data
        axios.get('/api/uad')
            .then(res => {
                setStudent(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
                console.log(err);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!student) {
        return <div>No student data found</div>;
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete('/api/uad')
            .then((res) => {
                console.log("Record deleted successfully");
                console.log(res)
                navigate('/');
            })
            .catch((err) => {
                console.log('Error while deleting the record:', err);
            });
    };
    const updateHandler = (e) => {
        e.preventDefault();
        console.log("Starting update with data:", student);

        axios.put('/api/uad', student)
            .then((res) => {
                console.log("Record updated successfully");
                console.log("Response:", res.data);
                navigate('/');
            })
            .catch((err) => {
                console.error('Error while updating the record:', err);
                if (err.response) {
                    console.error('Server responded with:', err.response.data);
                }
            });
    };






    return (
        <div className='bg-gray-800 h-screen flex justify-center'>
            <div className='flex flex-col items-center my-20 px-20 bg-gray-600'>
                <div className='mt-5 bg-gray-600'>
                    <h2 className='text-3xl text-white font-bold'>
                        Student Information
                    </h2>
                </div>
                <form>
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
                    <div className='flex items-center justify-center gap-x-2'>
                        <div className='mt-10 flex justify-center items-center gap-x-2'>
                            <button className='text-white rounded-xl bg-gray-800 px-5 py-2' type="submit" onClick={updateHandler}>Update</button>
                        </div>
                        <div className='mt-10 flex justify-center items-center gap-x-2'>
                            <button className='text-white rounded-xl bg-gray-800 px-5 py-2' onClick={deleteHandler}>Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Uad;
