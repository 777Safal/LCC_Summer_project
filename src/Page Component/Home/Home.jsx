import React from 'react'



function Home() {
  const data=[
    {h1:"It's Your Turn to Shine on the Futsal Stage!"}
  ]

  return (
    <div  className='w-full h-[100vh]'>    
      <div className='w-10/12 h-2/4 flex items-end mx-auto'>
        <h1 className='max-w-[22ch] uppercase text-4xl font-robotSlab font-bold tracking-wider text-zinc-50 '>{data[0].h1}</h1>
      </div>
<div className='w-10 h-10' style={{
  backgroundImage:`ur('src/Image/ballhiting.jpg')`,
  
}}>
</div>
      <div className=' flex w-10/12 mx-auto'>
      </div>
    </div>
  )
}

export default Home