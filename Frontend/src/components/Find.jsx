import axios from 'axios';
import { useState, useEffect } from 'react';

const Find = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        //we give incomplete url because we have use proxy in vite.congig.js file to make our api call standered
        axios.get('/api/students')
            .then(res => {
                setStudents(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            <div className='bg-gray-800 h-screen flex justify-center' >
                <div className='flex flex-col items-center my-20 px-20 bg-gray-600 max-h-[80vh] overflow-y-auto'>
                    <div className='mt-5 bg-gray-600 '>
                        <h2 className='text-3xl text-white font-bold'>
                            Class Information
                        </h2>
                    </div>
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
                                {students.map((student, index) => (
                                    <tr key={index}>
                                        <td className='p-4 border-2'>{student.regNo}</td>
                                        <td className='p-4 border-2'>{student.name}</td>
                                        <td className='p-4 border-2'>{student.department}</td>
                                        <td className='p-4 border-2'>{student.degree}</td>
                                        <td className='p-4 border-2'>{student.semester}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='my-10 flex gap-x-2'>
                        <form method='GET' action="/Create">
                            <button className='text-white rounded-xl bg-gray-800 px-5 py-2'>Create</button>
                        </form>
                        <form method='GET' action="/Search">
                            <button className='text-white rounded-xl bg-gray-800 px-5 py-2'>Edit</button>
                        </form>
                        <form method='GET' action="/Search">
                            <button className='text-white rounded-xl bg-gray-800 px-5 py-2'>Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Find
