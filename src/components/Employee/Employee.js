import React from 'react';
import './Employee.css';
import { addToDb } from '../../Utilities/fakeDB';

const Employee = ({employee}) => {
    const {_id, name, age} = employee;

    const employeeDetails = (_id)=>{
        addToDb(_id);
    }

    return (
        <div className='employee'>
            <h2>Employee Name: {name}</h2>
            <p>Employee Age: {age}</p>
            <p><small>It has Id: {_id}</small></p>
            <button onClick={()=>employeeDetails(_id)}>Employee Details</button>
        </div>
    );
};

export default Employee;