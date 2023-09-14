import React from 'react'
import {VscLocation} from 'react-icons/vsc'
import {FiPhoneCall} from 'react-icons/fi'
import {TbMail} from 'react-icons/tb'
import {Form,Formik,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'
import { MdTextFields } from 'react-icons/md'


const schema=yup.object().shape({
  name:yup.string().min(3,'Not sufficent').required('Name is required'),
  email:yup.string().required('email id  is required'),
  subject:yup.string().required('Subject is required'),
  message:yup.string().required('Message is required'),
})

function Contactus() {
    const heading=[
        {h1:'CONTACT US'},
        {h1:'Contact Info'},
        {h1:'Get in touch'},
        {h1:'Send Message'},
    ]
    const contact=[
      {h1:'Location',h2:'32907 Tilottama ,Rupandehi',h3:'Janakinagar, Aslami Path',icon:<VscLocation/>},
      {h1:'Subscriptions',h2:'+977 9800000000',h3:'+977 9808765432',icon:<FiPhoneCall/>},
      {h1:'E-mail',h2:'monalisa@gmail.com',h3:'www.mfutsal.com',icon:<TbMail/>},
    ]
    const data=[
      {placeholder:'Name',
        type:'text',
        identiy:'name',
      },
      {placeholder:'E-mail',
        type:'email',
        identiy:'email',
      },
      {placeholder:'Subject',
        type:'text',
        identiy:'subject',
      },
      {placeholder:'Message',
        type:'text',
        identiy:'message',
      },
    ]
  return (
    <div id="contact" className=''>
      {/* image section */}
        <div className='my-10 h-80 bg-cover bg-center bg-no-repeat flex justify-center items-center
      bg-[url(https://images.unsplash.com/photo-1552318965-6e6be7484ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60)]'>
          <h1 className='text-center text-5xl font-roboto font-extrabold 
          border-b-4 border-red-600 text-yellow-300 
            '>{heading[0].h1}</h1>
        </div>
        
        <div className='w-full flex mb-10  justify-center tracking-wider'>
          <div className='w-10/12 bg-transparent rounded-md overflow-hidden relative flex'> 
            <div className='w-2/6 shadow-2xl py-3 pl-5 mr-10 rounded-md bg-yellow-300'>
              <h1 className=' text-3xl font-bold text-slate-700'>{heading[1].h1}</h1>
              <div>
                  {contact.map((val,i)=>{
                    return <div key={i} className='my-8'>
                      <div className='text-xl font-bold text-slate-700'>{val.h1}</div>
                      <div className='flex mt-4'>
                        <div className='text-xl text-zinc-700 mr-2'>{val.icon}</div>
                        <div className='text-zinc-700 text-sm grid grid-rows-2 gap-1'>
                          <div>{val.h2}</div>
                          <div>{val.h3}</div>
                        </div>
                      </div>
                    </div>
                  })}
              </div>
            </div>
            {/* form section */}
            <div className='w-4/6 px-5 py-3 rounded-md bg-yellow-300 dark:bg-slate-300 shadow-2xl'>
                <div className=' text-3xl mb-8 font-bold text-slate-700'>{heading[2].h1}</div>
                  <Formik 
                  initialValues={{
                    name:'',
                    email:'',
                    subject:'',
                    message:'',
                  }}
                  validationSchema={schema}
                  onSubmit={(values)=>{
                    console.log(values)
                  }}
                  >
                    {({handleSubmit})=>{
                      return <Form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap'>
                          {data.map((val,i)=>{
                            if(val.identiy==='subject'){
                              return <div key={i} className='w-full h-16 pl-2'>
                                <Field type={val.type} name={val.identiy} 
                                placeholder={val.placeholder} 
                                className='w-full px-2 py-1 bg-white text-gray-500
                                rounded-lg outline-none'/>
                                <ErrorMessage name={val.identiy} component={'div'}
                                className='text-sm text-red-600'/>
                              </div>
                            }
                            else if(val.identiy==='message'){
                              return <div key={i} className='w-full  h-24 pl-2'>
                                <textarea type={val.type} name={val.identiy} 
                                placeholder={val.placeholder} 
                                className='w-full h-full rounded-md bg-white 
                                px-2 pt-1 text-gray-500 outline-none '/>
                                <ErrorMessage name={val.identiy} component={'div'} 
                                className='text-sm text-red-600'/>
                              </div>
                            }
                            else {
                              return <div key={i} className='w-2/4  h-16  pl-2'>
                                <Field type={val.type} placeholder={val.placeholder}
                                name={val.identiy}  className='w-full p-2 bg-white text-gray-500
                                rounded-md outline-none'/>
                                <ErrorMessage name={val.identiy} component={'div'} 
                                className='text-sm text-red-600'/>
                              </div>
                            }
                          })}
                        </div>
                        <div><button type='submit' 
                        className='w-40 h-12 ml-2 mt-20 text-center text-base 
                        font-medium font-poping rounded-md bg-red-600 shadow-lg shadow-red-500/50
                        text-white hover:scale-75'>{heading[3].h1}</button></div>
                      </Form>
                    }}
                  </Formik>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Contactus