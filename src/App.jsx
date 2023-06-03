import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Count from './Count'
import {DatePicker, Input } from 'antd'

function App() {
  const [name, setName] = useState('');
  const [dates, setDates] = useState('');

  const handleSub = (e)=>{
    e.preventDefault();
    if(e.target[0].value != '' && e.target[1].value != ''){
      setName(e.target[0].value);
      setDates(e.target[1].value);
    }else{
      alert('Please input corret format')
    }
  }

  return (
    <div className="App">
      {(name != '' && dates != '') ? (
        <Count name={name} dates={dates} />
      ) : (
        <form className='flex flex-col w-full h-full gap-4' onSubmit={handleSub} autoComplete='off'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <Input size='large' placeholder='Name' className='w-[240px]' id='name' />
            <DatePicker className='w-[240px]' id='dates' />
          </div>
          <button className='w-[70px] h-[40px] flex justify-center items-center text-lg bg-sky-500 rounded-lg'>
              <p>Start</p>
          </button>
        </form>
      )}
    </div>
  )
}

export default App
