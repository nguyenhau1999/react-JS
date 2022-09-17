import React from 'react';
import ChilComponent from './ChildComponent';
import AddCompnent from './AddComponent';
class MyComponent extends React.Component{
    
/**
 * key: value
  */
 state = {
    fisrtName: '',
    lastName:'',
    arrJobs: [
        {id:'Job1', title:'Front End', salary:'400 $'},
        {id:'Job2', title:'Back End', salary:'500 $'},
        {id:'Job3', title:'Testers', salary:'350 $'}
    ]
   
 }
 /*  
 fragment
 cap nhap lai state => setState

 */
 handleChangeFirstName = (event) => {
    this.setState({
        fisrtName: event.target.value
    })
 }
 handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
 }
 handleSubmit = (event) => {
   event.preventDefault()
   console.log(">>> Check data input: ", this.state)
 }

    render (){
        //re-render
       console.log('>>> Call render: ', this.state)
        return (
       <>
            <AddCompnent/>
           
            <ChilComponent 
            arrJobs={this.state.arrJobs}
            />
        </>
        )
    }
}

export default MyComponent;