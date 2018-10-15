import React from "react"
// as we are using the Option component we
// require access to use the component
import Option from "./Option"

//Stateless Functional Component
const Options = (props)=> {
    return(
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                {<button
                disabled={props.ops.length <= 0 }
                onClick={props.handleDeleteOptions}
                className="button button--link" > Remove all </button> }
            </div>
            {props.ops.length <1 && <p className="widget__warning"> Enter your options, lets get this ball rolling </p>}
            {props.ops.map((option, index)=> (
                    <Option
                     key={option}
                     handleDeleteOptionSingle = {props.handleDeleteOptionSingle}
                     optionText={option}
                     count={index + 1}/>
                    ))}
        </div>
    )
}

export default Options