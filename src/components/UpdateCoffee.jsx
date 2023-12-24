import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee)

    return (
        <div>
            <h3>Update a Coffee</h3>
        </div>
    );
};

export default UpdateCoffee;