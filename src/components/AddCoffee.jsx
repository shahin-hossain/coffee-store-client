import React from 'react';

const AddCoffee = () => {
    return (
        <div>
            <h2>Add a Coffee</h2>
            <form>
                <div className='flex'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" className="input input-bordered" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee; <h2>Add Coffee</h2>