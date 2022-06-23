import React from 'react'

const Navbar = ({about_ref, projects_ref, hero_ref}) => {

  

  const scroll_to_element1 = ( ) => {

    hero_ref.current?.scrollIntoView({behavior: 'smooth'});

  }

  const scroll_to_element2 = ( ) => {

    projects_ref.current?.scrollIntoView({behavior: 'smooth'});

  }


  const scroll_to_element3 = ( ) => {

    about_ref.current?.scrollIntoView({behavior: 'smooth'});

  }


  return (
    <div className="nav">
        <div className="nav_title">
          <img className="logo_image"  src="https://cdn-icons-png.flaticon.com/512/1491/1491266.png" alt="logo_image"/> PM
        </div>
        <div className="nav_links">
            <div onClick={scroll_to_element1}>Home</div>
            <div onClick={scroll_to_element2}>Projects</div>
            <div onClick={scroll_to_element3}>About me</div>
            <div>Contact Me<img  alt="_contact_image" src="https://cdn-icons-png.flaticon.com/512/7784/7784631.png" width={20} height={20} style={{marginLeft:"3px"}}/></div>
        </div>
        <div className="nav_search">
            <div><input className="search_input" type="text" placeholder="Search" /><img width={17} height={17}   src="https://cdn-icons.flaticon.com/png/512/2652/premium/2652234.png?token=exp=1656016940~hmac=1c2844cfbe0b75dddd8d75e705b98150" alt="search_icon"/></div>
        </div>
    </div>
  )
}

export default Navbar