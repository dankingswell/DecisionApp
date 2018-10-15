import React from 'react'
import AddOption from "./AddOption" // assumes .js
import Header from "./Header"
import Action from "./Action"
import Options from "./Options"
import OptionModal from "./ThirdPartyModal"


export default class InDecisionApp extends React.Component{

    state = {
            options:this.props.options,
            selectedOption:undefined
        }

   
    
    // React Method Inherited from React
    // fires when first mounted in browser
    // inserted into broswer in other words
    componentDidMount(){
        // try block incase json is invalid, stops error
        try{
        // getting json from below update fire
        const json= localStorage.getItem("options")
        const options = JSON.parse(json)

        // if there is Json to parse
        // ES6 object syntax
        // takes state and updates with information parsed from local storage
        if(options){
        this.setState(() => ({options}))
            }   
        } catch(e){
            //if json is invalid do nothing
        }
    }

    // fires after component state/prop is changed
    componentDidUpdate(prevProps, prevState){
        // this.state and this.props are avalible
        // access to previous props and states

        if(prevState.options.length != this.state.options.length){
            console.log("saving data")
            const json =  JSON.stringify(this.state.options)
            localStorage.setItem("options",json)
            console.log(json);
        }
    }

    handleDeleteOptionSingle = (option)=> {
        this.setState( (prevState) => ({
            // returns obj of filtered array
            options : prevState.options.filter(
                (item) => 
                    // if the arrray item does not equal
                    // the item that's been selected as remove
                    // item is part of new array as returns true
                     item != option  )
            }
        ))
    }

    // to allow props to be communicated back up the chain
    //to parent container e.g
    // indecision app class, we pass functions to props
    // by establishing a function in a parent class it can be passed
    // to the children components and called by the children components
    // the function scoped to the parent class then takes the action.
    // below example deletes all
    handleDeleteOptions = ()=>{
        // to return an object inline wrap in parens to make expression
        this.setState( ()=> ( {options:[]} ) )
    }
    //because this method re-renders the state the options props 
    // are re sent allowing new values to be pushed to options 

    handlePick= ()=> {
        const options = this.state.options
        const RandOption = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => {
            return{
                selectedOption : options[RandOption]
            }
        })
    }
    // Passing data up to the parent using 
    // function parameters

    handleAddOption = (option)=>{
        // setting new state based on params
        // from child onClick event

        
        if(!option){
            // this will be passed back to Event element
            return "Enter a valid options"
        }else if(this.state.options.indexOf(option) > -1){
            return "This option already exists"
        }


        // do not use prevState.options.push(option)
        // push changes the state which results in errors
        // use concat instead to make a new instance
        // then push
        this.setState((prevState)=>{
            // concat returns a new value doesn't alter previous
            return {
                options: prevState.options.concat(option)
            }
        })



    }

    handleCloseModal = () =>{
        this.setState(()=>({selectedOption:undefined}))
    }

    render(){
        const title="InDecision"
        const subTitle="You couldn't pick so know i have too"

        // title is now given via default prop and can be overriden with explict props
        return (
            <div className="application">
            <Header subT ={subTitle}/>
            <div className="container">
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <div className="widget">
                <Options 
                ops={this.state.options} 
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOptionSingle =  {this.handleDeleteOptionSingle}
                />
                <AddOption
                handleAddOption={this.handleAddOption}
                />
                </div>
            </div>
            <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
            />
            </div>
        )
    }
}
// allowing app when rendered to be passed data
InDecisionApp.defaultProps ={
    options:[]
}