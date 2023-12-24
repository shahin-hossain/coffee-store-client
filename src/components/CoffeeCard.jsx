import React from 'react';

const CoffeeCard = ({ coffee }) => {
    console.log(coffee)
    const { photo, name, quantity, supplier, taste, category, details } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={photo} alt="" className='w-[150px] h-[200px]' /></figure>
            <div className="flex justify-between px-3 items-center">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{details}</p>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical">
                        <button className="btn join-item mb-2 btn-neutral">View</button>
                        <button className="btn join-item mb-2 btn-neutral">Edit</button>
                        <button className="btn join-item mb-2 btn-neutral">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;