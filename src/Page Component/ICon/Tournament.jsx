import React from 'react'
import {TbTournament} from 'react-icons/tb'
import {LuTrophy} from 'react-icons/lu'
import {MdStadium} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {GiAutoRepair} from 'react-icons/gi'

function Tournament() {
  return (
    <div className=''>
        <div className='text-xl'><LuTrophy/></div>
        <div className='text-xl'><MdStadium/></div>
        <div className='text-xl'><IoIosPeople/></div>
        <div className='text-xl'><GiAutoRepair/></div>
    </div>
  )
}

export default Tournament