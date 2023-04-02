import React from 'react'
import "./Header.css"

export default function Header({
    title = 'default Header'
}) {
    return <h1 className="header">{title}</h1>
}
