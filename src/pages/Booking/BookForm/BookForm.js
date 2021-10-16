import React from 'react';
import { useForm } from "react-hook-form";
import './BookForm.css'

const BookForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    return (
        <div className="col-md-6 d-flex justify-content-center mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 bg-light p-4 rounded-3">
                <div class="mb-3">
                    <label for="origin" class="form-label">Origin</label>
                    <input type="text" class="form-control" defaultValue="Dhaka" {...register("origin")} />
                </div>
                <div class="mb-3">
                    <label for="destination" class="form-label">Destination</label>
                    <input type="text" class="form-control" defaultValue="Cox's Bazar" {...register("Destination")} />
                </div>
                <div class="mb-3 row">
                    <div className="col-sm-6">
                        <label for="from" class="form-label">From</label>
                        <input type="date" class="form-control" defaultValue="17/09" {...register("From", { required: true })} />
                        {errors.From && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="col-sm-6">
                        <label for="to" class="form-label">To</label>
                        <input type="date" class="form-control" defaultValue="20/09" {...register("To", { required: true })} />
                        {errors.To && <span className="text-danger">This field is required</span>}
                    </div>
                </div>
                <button type="submit" class="btn btn-warning w-100 fw-bold py-3">Start Booking</button>
            </form>
        </div>
    );
}
export default BookForm;