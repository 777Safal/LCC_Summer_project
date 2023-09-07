import React from 'react'
import ball from '../../Image/5578341.jpg'



function Home() {
  const data=[
    {h1:"It's Your Turn to Shine on the Futsal Stage!"}
  ]

  return (
    <div  className=' w-10/12 mx-auto h-[100vh] overflow-hidden flex justify-center items-end' 
    style={{ 
      backgroundImage: `url(${ball})`,
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
    }}>    
      <div className='w-fit mx-auto mb-5'>
        <h1 className='max-w-[22ch] uppercase text-4xl font-robotSlab font-bold tracking-wider text-indigo-950 '>{data[0].h1}</h1>
      </div>  
    </div>
  )
}

export default Home