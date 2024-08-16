import React from 'react'

function Input(props) {
    const { width, height, label, type, placeholder, onChange, name } = props; 
    const styles = {
        width: width || '100%',
        height: height || '90px',
    }

    const inputId = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className=' flex flex-col ' style={styles} >
            <label htmlFor={inputId} className='font-bold text-primary ml-1 '>{label}</label>
            <input
                id={inputId}
                type={type}
                placeholder={placeholder}
                name={name}
                className='border focus:outline-none border-gray-500 rounded-lg p-4 text-sm h-full'
            />
        </div>
    )
}

export default Input
