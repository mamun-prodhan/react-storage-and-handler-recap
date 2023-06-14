import React from 'react';
import { add, multiply } from '../../Utilities/calculate';

const Shoes = () => {
    const num1 = 20;
    const num2 = 30;
    const result = add(num1, num2);
    const multiplication = multiply(num1, num2);
    return (
        <div>
            <h2>This is Shoes Component</h2>
            <p>Total Sum: {result}</p>
            <p>Total multiplication is : {multiplication}</p>
        </div>
    );
};

export default Shoes;