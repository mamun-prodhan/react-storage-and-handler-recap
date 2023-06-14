import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';

const Employees = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setEmployees(data))
    },[])
    console.log(employees.length)


    return (
        <div>
            <h2>Total Employees: {employees.length}</h2>
            {
                employees.map(employee => <Employee
                key={employee._id}
                employee={employee}
                ></Employee>)
            }
        </div>
    );
};

export default Employees;