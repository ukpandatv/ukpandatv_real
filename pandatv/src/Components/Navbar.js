import React from "react";
import { Link } from "react-router-dom";
import '../Assets/css/navbar.css';

const Navigation = (props) => {

console.log(props)

  return (
    <nav id="nav_bar" className="position-fixed dekstopNav navbar navbar-expand-lg position-absolute customNavigation justify-content-center" style={{width: '100%', top: '5%', zIndex: 3}}>
      <div className="p-2 bg-white menuClass menuText d-flex align-items-center" style={{borderRadius: '20px'}}>
        <div className="logoContainer" style={{display: 'none'}}>
          <a className="" href="€">Panda TV</a>
        </div>
        <div className={`logoContainer ${props.isScrolling ? "showLogo" : "hideLogo"}`} id="logoContainer">Panda TV</div>
        <Link to={'/'} className="tomatoText">Home |</Link>
        <Link to={'/contact'} className="tomatoText">Contact |</Link>
        <Link to={'/videos'} className="tomatoText">Videos |</Link>
        <Link to={'/radio'} className="tomatoText">Radio |</Link>
        <Link to={'/news'} className="tomatoText">News </Link>
      </div>
      <div className="p-2 tomatoBg menuClass menuText d-flex align-items-center" style={{borderRadius: '20px'}}>
        <Link to={'/'} className="text-white pr-md-1">Chi | Eng </Link>
        <Link to={'/'} className="text-white">&nbsp;Login |&nbsp;</Link>
        <Link to={'/'} className="text-white">Register</Link>
      </div>
    </nav>
  )
}


export default Navigation;
