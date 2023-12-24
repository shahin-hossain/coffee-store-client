import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    // console.log(coffee)
    const { _id, photo, name, quantity, supplier, taste, category, details } = coffee;

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
        console.log(_id)
    }
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
                        <Link to={`/updateCoffee/${_id}`} className="btn join-item mb-2 btn-neutral" >
                            <button >Edit</button>
                        </Link>
                        <button className="btn join-item mb-2 btn-warning"
                            onClick={() => handleDelete(_id)}
                        >X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;