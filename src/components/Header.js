import '../style/Header.css'
import logo from "../asset/logo.png"
// import { useState } from 'react'

export const Header = () => {
  const event = new Date();
  // const date = event.toLocaleDateString();
  const date = event.toString();
  const arrdate = date.split(" ");

  return (
    <div className="header">
      <div className="brandName">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="todo">
        <h1>{`${arrdate[0]}, ${arrdate[2]} ${arrdate[1]} ${arrdate[3]}`}</h1>
      </div>
    </div>
  )
}
