import React,{useRef} from 'react'

function ConfirmBooking({confirmationRef}) {
  return (
        <div ref={confirmationRef}>
            <div className='w-2/5 mx-auto bg-slate-300 p-5 rounded-sm '>
            <p className='w-fit mx-auto'>Do you want to book a court?</p>
            <div className='w-fit my-3 mx-auto'>
            <button className='w-20 py-2 rounded-lg bg-slate-200 hover:text-slate-50 hover:bg-yellow-300    mr-5'>Yes</button>
            <button onClick={()=>confirmationRef.current.close()}
            className='w-20 py-2 rounded-lg bg-slate-200 hover:text-slate-50 hover:bg-yellow-300 mr-5'>No</button>
            </div>
            <div className='w-fit mx-auto flex text-sm'>
            <h1 className='h-fit mr-2 border-b-2 border-red-600'>Note:</h1>
            <p>You need to make 40% advance payment which is Rs. 520 through Khalti.</p>
            </div>
        </div>
        </div>
    
  )
}

export default ConfirmBooking