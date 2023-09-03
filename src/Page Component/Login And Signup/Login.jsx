import React from 'react'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'

const schema=yup.object().shape({
    uid:yup.string().required('User ID is requreid'),
    password:yup.string().required('Password is requreid'),
})
function Login() {
  
    const fieldsData=[
        {
            label:'User Id',
            type:'text',
            identiy:'uid',
            placeholder:'User Id'
        },
        {
            label:'Password',
            type:'password',
            identiy:'password',
            placeholder:'password'
        },
    ]
    
      return (
        <div className='bg-gradient-to-b from-yellow-200 to-white h-screen flex justify-center items-center'>
            <div className='w-9/12 h-4/5 overflow-hidden rounded-lg shadow-2xl flex flex-row'>
                {/* Logins */}
                <div className='bg-white w-2/5 h-full flex flex-col items-center shadow-2xl '> 
    
                <div className='mt-6'>
                    {/* logo */}
                    <div className='w-32 h-32 rounded-ful'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREV7OqbWAYbL_nNEO2AFXJRwOvvTD-I4MwXMgZjnsb2A&s"  />
                    </div>
                    <div className='text-center text-lg font-bold text-red-600'>Monalisa Futsal</div>
                </div>
                    <div className='w-9/12 mt-6'>
                    <Formik
                        initialValues={{
                            uid:'',
                            password:'',
                        }}
                        validationSchema={schema}
                        onSubmit={(values)=>{
                            console.log(values)
                        }}
                    >
                        {({handleSubmit})=>{
                            return <Form onSubmit={handleSubmit}>
                                {
                                    fieldsData.map((val,i)=>{
                                        return <div key={i} className='h-16 flex flex-col'>
                                            {/* <label className='mt-4 text-base text-red-700  font-semibold'>{val.label}</label> */}
                                            <Field type={val.type} name={val.identiy} placeholder={val.placeholder} className='h-9 rounded-2xl bg-yellow-100 mt-4 placeholder:text-black p-4 text-sm outline-none'/>
                                            <ErrorMessage name={val.identiy} component={'div'} className='text-sm text-red-600 font-semibold'/>
                                        </div>
                                    })
                                }
                                <div className='w-full flex justify-center mt-10'>
                                    <button type='submit' className='bg-yellow-200 text-red-500 hover:bg-red-500 hover:text-yellow-200 rounded-2xl text-lg font-bold w-44'>Login</button>
                                </div>
                                <div className='mt-4'>
                                    <div className='text-xs text-center'>Or Continue With</div>
                                    <div className='flex flex-row justify-center mt-1'>
                                        <div className='w-8 h-8 mr-3 bg-blue-500 text-white flex items-center justify-center rounded-xl'><FaFacebookF className=''/></div>
                                        <div className='w-8 h-8 flex items-center justify-center rounded-xl'><FcGoogle/></div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 mt-14'>
                                    <div className='text-left text-xs'>Forgot Password ?</div>
                                    <div className='text-right text-xs'>Create New Account</div>
                                </div>
                            </Form>
                        }}
                    </Formik>   
                    </div>    
                </div>
                {/* image */}
                <div className='w-3/5 h-full relative bg-center bg-cover bg-no-repeat bg-[url(https://img.freepik.com/premium-vector/football-soccer-splash-silhouette_9245-677.jpg?size=626&ext=jpg)]'>                      
                    {/* <svg className='w-[614px] absolute top-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="0.2" d="M0,32L24,32C48,32,96,32,144,69.3C192,107,240,181,288,202.7C336,224,384,192,432,160C480,128,528,96,576,106.7C624,117,672,171,720,202.7C768,235,816,245,864,213.3C912,181,960,107,1008,90.7C1056,75,1104,117,1152,160C1200,203,1248,245,1296,256C1344,267,1392,245,1416,234.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg> */}
                </div>
            </div>
        </div>
      )
    }
    

export default Login

