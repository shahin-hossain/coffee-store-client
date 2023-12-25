import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, photo, name, quantity, supplier, taste, category, details } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee)
        //send data to server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT', // data update এর জন্য put method
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee) //data JSON.stringify করে server এ পাঠাতে হবে।
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    //sweet alert library use করা হয়েছে। alert দেয়ার জন্য।
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div className='p-24'>
            <h3 className='text-3xl font-bold text-center text-red-950'>Update a Coffee</h3>
            <form onSubmit={handleUpdateCoffee}>
                {/* form coffee & quantity row */}
                <div className='md:flex mb-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier & taste row */}
                <div className='md:flex mb-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category & details row */}
                <div className='md:flex mb-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label">
                            <span className="label">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo URL row */}
                <div className='md:flex mb-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" className='btn btn-block btn-neutral' value="Update a Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;