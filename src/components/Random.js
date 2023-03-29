import React from 'react'
import { useGif } from '../hooks/useGif';
import { Spinner } from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Random = () => {
    
    const {gif,loading,fetchData} = useGif()
    
    return (
        
        <div className='w-1/2 bg-green-400 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]'>
            
            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>
            
            {
                loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
            }

            <button onClick={()=>fetchData()} className='w-10/12 bg-green-200 py-2 text-lg rounded-lg mb-[20px] font-semibold'>
                Generate 
            </button>
        </div>

    )
}
