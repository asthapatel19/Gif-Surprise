import React, { useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';


export const Tag = () => {

    const [tag,setTag] = useState('cat')
    const {gif,loading,fetchData} = useGif(tag)

    return (
        <div className='w-1/2 bg-blue-400 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px] mb-[15px]'>
            
            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random Gif</h1>
            
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }

            <input className='w-10/12 mt-[10px] text-lg rounded-lg text-center mb-[3px]' 
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button onClick={()=>fetchData()} className='w-10/12 bg-blue-200 py-2 text-lg rounded-lg mt-[3px] mb-[20px] font-semibold'>
                Generate 
            </button>
        </div>
    )
}
