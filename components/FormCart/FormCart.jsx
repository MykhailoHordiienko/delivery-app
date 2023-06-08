'use client';
import { useGlobalContext } from '@/app/Context/store';
import { addOrderToDb } from '@/db/mongodb/mongoOperations';
import { useForm } from 'react-hook-form';

const FormCart = () => {
  const { order, setOrder } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async data => {
    const orderData = {
      owner: data.email,
      userData: data,
      order,
    };

    await addOrderToDb(orderData);

    setOrder([]);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          className="w-full h-9 p-1 outline-none border-2 rounded-lg focus:border-blue-600"
          type="text"
          placeholder="Name:"
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Min Length 3',
            },
            maxLength: {
              value: 50,
              message: 'Max Length 50',
            },
          })}
        />
        {errors.name && (
          <p className="absolute -top-5 text-xs text-red-700">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full h-9 p-1 outline-none border-2 rounded-lg focus:border-blue-600"
          type="email"
          placeholder="Email:"
          {...register('email', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Min Length 3',
            },
            maxLength: {
              value: 50,
              message: 'Max Length 50',
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Enter valid email',
            },
          })}
        />
        {errors.email && (
          <p className="absolute -top-5 text-xs text-red-700">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full h-9 p-1 outline-none border-2 rounded-lg focus:border-blue-600"
          type="tel"
          placeholder="Phone:"
          {...register('phone', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Min Length 3',
            },
            maxLength: {
              value: 50,
              message: 'Max Length 50',
            },
            pattern: {
              value: /^\+?3?8?(0[5-9][0-9]\d{7})$/i,
              message: 'Enter valid mobile phone',
            },
          })}
        />
        {errors.phone && (
          <p className="absolute -top-5 text-xs text-red-700">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full h-9 p-1 outline-none border-2 rounded-lg focus:border-blue-600"
          type="text"
          placeholder="Address:"
          {...register('address', {
            required: 'This field is required',
            minLength: {
              value: 3,
              message: 'Min Length 3',
            },
            maxLength: {
              value: 50,
              message: 'Max Length 50',
            },
          })}
        />
        {errors.address && (
          <p className="absolute -top-5 text-xs text-red-700">
            {errors.address.message}
          </p>
        )}
      </div>

      <input
        type="submit"
        disabled={!isValid || order.length < 1}
        className="w-full p-2 rounded-xl bg-blue-200 disabled:opacity-25 hover:bg-blue-600 focus-visible:bg-blue-600 hover:text-zinc-100 focus-visible:text-zinc-100"
      />
    </form>
  );
};

export default FormCart;
