import React from 'react';

const Employee = (props) => {
    // const {name, age} = employee;
    return (
        <div>
            <h2>Employee Name: {props.employee.name}</h2>
            <p>Employee Age: {props.employee.age}</p>
        </div>
    );
};

export default Employee;