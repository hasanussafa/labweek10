import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname: 'Default first name.' 
        }
       // this.readData = this.readData.bind(this)
    }
    
    //displayAlert(){
       // alert("Hello World")
    //}
    //readData(event){
    readData = (event) => {
        console.log(event.target.value)
        this.setState({fname: event.target.value})
    }
    render() {
        return (
            <div>
                <h4> this.state.fname</h4>
                <input name="fname" placeholder="Enter First Name" type="text" onChange={this.readData}/>
                <input name="lname" placeholder="Enter Last Name" type="text" onChange={this.readData}/>
                
                <br/>
                <button onClick={this.displayAlert}>Click Me!!</button> 
            </div>
        )
    }
}
