import React from 'react'
import Logo from '../images/cog-logo.svg'


const Header = (props) => {
  return (
    <div className="header row h-100">
      <div className="col-xl-3 col-xs-12 h-100">
        <div className="brand-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="col-xl-9 col-xs-12 h-100">
      </div>
    </div>
  )
}

export default Header
