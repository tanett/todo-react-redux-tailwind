import React from 'react'


const Link = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        className={`btn ${active? 'btn-dsb': ''}`}
    >
        {children}
    </button>
)



export default Link
