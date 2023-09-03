import React from 'react'


function Home() {
  const data=[
    {h1:"It's Your Turn to Shine on the Futsal Stage!"}
  ]
  const Image=[
    {name1:'https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/333998080_181669067914414_315478783090496837_n.jpg?stp=c52.0.206.206a_dst-jpg_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=0df3a7&_nc_ohc=KPuR7LEC4OEAX9wvdq_&_nc_ht=scontent.fktm16-1.fna&oh=00_AfALtqLB8Lfgay4PNQrVbd2fDGjNI0JufF-CB56WJoynBQ&oe=64F65B4F'},
    {name1:'https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/333991283_912780979917245_2192545357403614674_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=813123&_nc_ohc=hunJ5zRc3SQAX8LHSJN&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCQTzIMNWuEVpG5RNmyNcW-RKO_7xrn9-AXE-yXH-WHEg&oe=64F6A0BD'},
    {name1:'https://scontent.fktm16-1.fna.fbcdn.net/v/t39.30808-6/320881914_1132637144121965_4336597109930524417_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_ohc=3WORoqibXDMAX_lRVqe&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDKXEjNPDUk1eERt38-5Ow3Y6_T-l2qg4dFc74jjLP6gQ&oe=64F76C90'},
  ]
  return (
    <div className='w-full h-[100vh]'>    
      <div className='w-10/12 h-2/4 flex items-end mx-auto'>
        <h1 className='max-w-[22ch] uppercase text-4xl font-robotSlab font-bold tracking-wider text-zinc-50 '>{data[0].h1}</h1>
      </div>
      {/* <div className='absolute top-0 right-0 w-[450px] h-full'>
        <img src={'image1'} alt="" />
      </div> */}

      <div className=' flex w-10/12 mx-auto'>
        {Image.map((val,i)=>{
          return <div key={i} className='w-[330px] h-[350px] mx-5 rounded-md overflow-hidden '>
            <img src={val.name1} className='bg-contain bg-no-repeat w-full h-full' />
          </div>
        })}
      </div>
    </div>
  )
}

export default Home