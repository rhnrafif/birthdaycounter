import React from 'react';
import { useEffect, useState } from 'react';

export default function Count({name, dates}) {
    
const parts = dates.split('-');
const formattedDate = `${parts[1]}/${parts[2]}/${parts[0]}`

const [hbd, setHbd] = useState(false)

useEffect(()=>{

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "06/03/",
      birthday = formattedDate;
  
  today = mm + "/" + dd + "/" + yyyy;
  
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;


        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
            setHbd(true);
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "flex";
          clearInterval(x);
        }
        //seconds
      }, 0)

  },[])

  return (
    <div className=' w-[380px] min-h-full flex flex-col justify-center items-center gap-3 md:w-full '>
        {(!hbd) ? (
            <>
            <div className='flex flex-col gap-4'>
                <p className='text-5xl'>Countdown to</p>
                <p className='text-4xl'><span className='mr-1 font-semibold'>{name}</span>'s birthday</p>
            </div>
            </>
        ) : (
            <>
            <div className='flex flex-col gap-4'>
                <p className='text-5xl'>Happy Birthday !!</p>
                <p className='text-5xl font-semibold'>{name}</p>
            </div>
            </>
        )}
        <div id="countdown" className='my-6'>
          <div className='flex flex-col justify-center items-center text-2xl gap-3 md:flex-row'>
            <div className='w-[120px] h-full flex flex-col justify-center items-center p-2 gap-2 '>
              <p id='days' className='text-6xl'></p>
              <p className='w-full h-full bg-slate-50 text-gray-800 px-2 rounded-md' >day</p>
            </div>
            <div className='w-[120px] h-full flex flex-col justify-center items-center p-2 gap-2 '>
              <p id='hours' className='text-6xl'></p>
              <p className='w-full h-full bg-slate-50 text-gray-800 px-2 rounded-md' >hour</p>
            </div>
            <div className='w-[120px] h-full flex flex-col justify-center items-center p-2 gap-2 '>
              <p id='minutes' className='text-6xl'></p>
              <p className='w-full h-full bg-slate-50 text-gray-800 px-2 rounded-md' >minute</p>
            </div>
            <div className='w-[120px] h-full flex flex-col justify-center items-center p-2 gap-2 '>
              <p id='seconds' className='text-6xl'></p>
              <p className='w-full h-full bg-slate-50 text-gray-800 px-2 rounded-md' >second</p>
            </div>
          </div>
        </div>
        <div id="content" className="emoji text-4xl gap-4 hidden mt-5">
          <span>🥳</span>
          <span>🎉</span>
          <span>🎂</span>
        </div>
      </div>
  )
}
