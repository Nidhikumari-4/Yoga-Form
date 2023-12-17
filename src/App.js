import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const fixedAmount = 500;
  const batchOptions = ["6-7 AM", "7-8 AM", "8-9 AM", "5-6 PM"];

  return (
    <div className=" bg-white max-w-lg mx-auto h-auto p-5 rounded-md mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          {" "}
          Payment Details
        </h2>
        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Name:{" "}
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name"
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Email:
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@gmail.com"
          />
          {errors.email && <span>This field is required</span>}
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Age:
          </label>
          <input
            {...register("age", {
              required: true,
              min: 18,
              max: 65,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="age"
          />
          {errors.age && errors.age.type === "required" && (
            <span>Age is required</span>
          )}
          {errors.age && errors.age.type === "min" && (
            <span>Age must be at least 18 years old</span>
          )}
          {errors.age && errors.age.type === "max" && (
            <span>Age must be at most 65 years old</span>
          )}
          {errors.age && errors.age.type === "validate" && (
            <span>Age must be between 18 and 65 years old</span>
          )}
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Phone:
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="+91 4455445566"
          />
          {errors.phone && <span>This field is required</span>}
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Batch:
          </label>
          <select
            {...register("batch", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option value="">Select Batch</option>
            {batchOptions.map((batch, index) => (
              <option key={index} value={batch}>
                {batch}
              </option>
            ))}
          </select>
          {errors.batch && <span>Please select a batch</span>}
        </div>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900">
            Amount:{" "}
          </label>
          <input
            type="text"
            value={`₹${fixedAmount}.00`}
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
        </div>

        <div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Pay ₹500
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
