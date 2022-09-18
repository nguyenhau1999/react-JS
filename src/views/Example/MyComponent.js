import React from 'react';
import ChilComponent from './ChildComponent';
import AddCompnent from './AddComponent';
class MyComponent extends React.Component{
    
/**
 * key: value
  */
 state = {
    arrJobs: [
        {id:'Job1', title:'Front End', salary:'400 $'},
        {id:'Job2', title:'Back End', salary:'500 $'},
        {id:'Job3', title:'Testers', salary:'350 $'}
    ]
   
 }
    addNewJob = (job) => {
        console.log('check job from parent: ', job)
       this.setState ({
        arrJobs: [...this.state.arrJobs, job]
       })
// ... : copy phan tu 
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
 deleteAjob = (job) => {
    let currenJobs =  this.state.arrJobs;
    currenJobs = currenJobs.filter(item => item.id !== job.id);
    this.setState ({
        arrJobs: currenJobs
    })
 }
 

    render (){
        //re-render
       console.log('>>> Call render: ', this.state)
        return (
       <>
            <AddCompnent
                addNewJob={this.addNewJob}
            />
           
            <ChilComponent 
            arrJobs={this.state.arrJobs}
            deleteAjob={this.deleteAjob}
            />
        </>
        )
    }
}

export default MyComponent;