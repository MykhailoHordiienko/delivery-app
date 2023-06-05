'use client';
import { useForm } from 'react-hook-form';

const FormCart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Name:"
        {...register('Name:', {
          required: true,
          max: 12,
          min: 3,
          maxLength: 12,
        })}
      />
      <input
        type="email"
        placeholder="Email:"
        {...register('Email:', {
          required: true,
          max: 24,
          min: 3,
          maxLength: 24,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        })}
      />
      <input
        type="tel"
        placeholder="Phone:"
        {...register('Phone:', {
          required: true,
          max: 24,
          min: 6,
          maxLength: 24,
          pattern: /^\+?3?8?(0[5-9][0-9]\d{7})$/i,
        })}
      />
      <input
        type="text"
        placeholder="Address:"
        {...register('Address:', {
          required: true,
          max: 50,
          min: 5,
          maxLength: 50,
        })}
      />

      <input type="submit" />
    </form>
  );
};

export default FormCart;
