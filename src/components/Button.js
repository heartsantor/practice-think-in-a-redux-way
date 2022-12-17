import React from 'react'

const Button = ({ children, handler,color }) => {
  return (
    <button
            class={`${color === "red"?"bg-red-400":"bg-indigo-400"} text-white px-3 py-2 rounded shadow`}
            onClick={handler}
        >
            {children}
        </button>
  )
}

export default Button