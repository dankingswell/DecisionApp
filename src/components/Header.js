import React from "react"

//Stateless Functional Component
const Header = (props)=>{
    // subtitle only loads on page were passed as prop
        return (
            <div className="header">
                <div className="container">
                    <h1 className="header__title">{props.title}</h1>
                    {props.subT && <h2 className="header__subtitle">{props.subT}</h2>}
                </div>
                
            </div>
        )
    }

// adding Defaults to props incase one is not provided
Header.defaultProps = {
    title:"Indecision"
}

export default Header