import React from 'react';

const Employee = ({employee}) => {
    const {_id, name, age} = employee;

    const employeeDetails = (_id)=>{
        console.log('clicked Item is: ', _id, 'Name is: ', name, 'age is: ', age);
    }

    return (
        <div>
            <h2>Employee Name: {name}</h2>
            <p>Employee Age: {age}</p>
            <p><small>It has Id: {_id}</small></p>
            <button onClick={()=>employeeDetails(_id, name, age)}>Employee Details</button>
        </div>
    );
};

export default Employee;