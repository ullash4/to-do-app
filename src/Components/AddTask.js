import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="mb-10 lg:max-w-lg mx-auto mt-7 shadow-2xl py-10 px-16 bg-gray-300 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">
        Add a New Doctor
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              }
            })}
            placeholder="Your Description"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>

        <input
          className="btn bg-black outline-none text-white hover:text-white btn-wide mt-5"
          value="Add New Task"
          type="submit"
        />
      </form>
    </div>
    );
};

export default AddTask;