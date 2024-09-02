import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className='bg-indigo-500 text-yellow-300 px-6 py-6 my-10 rounded hover:bg-indigo-300'>
        {children}
    </button>
  )
}

export default Button;
