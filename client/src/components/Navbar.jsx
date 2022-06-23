import React from 'react'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="nav_title">
          <img className="logo_image" src="https://cdn.pixabay.com/photo/2016/10/29/20/41/abstract-1781486_960_720.png" alt="logo_image"/> PM
        </div>
        <div className="nav_links">
            <div>Home</div>
            <div>Projects</div>
            <div>About me</div>
            <div>Contact Me</div>
        </div>
        <div className="nav_search">
            <div><input className="search_input" type="text" placeholder="Search" /></div>
        </div>
    </div>
  )
}

export default Navbar