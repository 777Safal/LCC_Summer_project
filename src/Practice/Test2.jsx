import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
  

// const schema = yup.object().shape({
//   uid: yup.string().required('User ID is required'),
//   password: yup.string().required('Password is required'),
// });

function Test2() {
 
  const fieldsData = [
    {
      label: 'User Id',
      type: 'text',
      identiy: 'uid',
    },
    {
      label: 'Password',
      type: 'password',
      identiy: 'password',
    },
  ];

  // const handleLogin = (values) => {
  //   if (values.uid === 'asdf@gmail.com' && values.password === 'aaaa') {
  //     // Redirect to the Test1 page
  //     history.push('../Practice/Test1');
  //   } else {
  //     alert('Invalid credentials. Please try again.');
  //   }
  // };

  return (
    <div className='bg-gradient-to-b from-yellow-200 to-white h-screen flex justify-center items-center'>
      <div className='w-9/12 h-4/5 overflow-hidden rounded-lg shadow-2xl flex flex-row'>
        {/* Logins */}
        <div className='bg-white w-2/5 h-full flex flex-col items-center shadow-2xl '>
          <div className='mt-4'>
            {/* logo */}
            <div className='w-32 h-32 rounded-ful'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREV7OqbWAYbL_nNEO2AFXJRwOvvTD-I4MwXMgZjnsb2A&s' />
            </div>
            <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
          </div>
          <div className='w-9/12 mt-3'>
            <Formik
              initialValues={{
                uid: '',
                password: '',
              }}
              validationSchema={schema}
              onSubmit={handleLogin}
            >
              {({ handleSubmit }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    {fieldsData.map((val, i) => {
                      return (
                        <div key={i} className='h-24 flex flex-col'>
                          <label className='text-base text-red-700  font-semibold'>{val.label}</label>
                          <Field
                            type={val.type}
                            name={val.identiy}
                            placeholder={val.placeholder}
                            className='h-9 rounded-2xl bg-yellow-100 mt-1 placeholder:text-black p-4 text-sm outline-none'
                          />
                          <ErrorMessage name={val.identiy} component={'div'} className='text-sm text-red-600 font-semibold' />
                        </div>
                      );
                    })}
                    <div className='w-full flex justify-center mt-10'>
                      <button type='submit' className='bg-yellow-200 text-red-500 hover:bg-red-500 hover:text-yellow-200 rounded-2xl text-lg font-bold w-44'>
                        Login
                      </button>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                      <button className='text-left text-xs'>Forgot Password ?</button>
                      <button className='text-right text-xs'>Create New Account</button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        {/* image */}
        <div className='w-3/5 h-full relative bg-center bg-cover bg-no-repeat bg-[url(https://img.freepik.com/premium-vector/football-soccer-splash-silhouette_9245-677.jpg?size=626&ext=jpg)]'></div>
      </div>
    </div>
  );
}

export default Test2;
