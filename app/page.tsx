"use client"
import React, { useState, useEffect } from 'react';
import { decrementValue, incrementValue, resetValue } from '@/redux/features/increment-value/value.action';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const dispatch = useAppDispatch();
  const selectValue = useAppSelector(state => state.inputValueReducer.value);

  console.log(selectValue);
  const [inputValue, setInputValue] = useState<number>(selectValue);

  useEffect(() => {
    // Update inputValue whenever selectValue changes
    setInputValue(selectValue);
  }, [selectValue]);

  const handleIncrement = () => {
    dispatch(incrementValue());
    console.log("Increment to value");
  }

  const handleDecrement = () => {
    dispatch(decrementValue());
    console.log("Decrement to value");
  }

  const handleReset = () => {
    dispatch(resetValue());
    console.log("Reset to value");
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setInputValue(isNaN(newValue) ? 0 : newValue);
  }

  return (
    <main className="flex p-24 flex-col justify-center items-center text-center text-3xl font-bold">
      <div className='flex justify-center items-center text-center'>
        <input className='bg-gray-300 justify-center flex' value={inputValue} onChange={handleInputChange} disabled />
      </div>
      <div className='flex flex-row justify-between items-center text-center text-white transition duration-500 ease-in-out'>
        <button className='px-2 py-2 bg-blue-500 m-2 rounded-xl hover:bg-blue-700 ' onClick={handleIncrement}>Arttır</button>
        <button className='px-2 py-2 bg-blue-500 m-2 rounded-xl hover:bg-blue-700 ' onClick={handleDecrement}>Azalt</button>
        <button className='px-2 py-2 bg-blue-500 m-2 rounded-xl hover:bg-blue-700 ' onClick={handleReset}>Reset</button>
      </div>
    </main>
  )
}
