import React from 'react';

class ChilComponent extends React.Component{
        state = {
            showJobs: false

        }
    handleShowHide = () => {
        this.setState ({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
       console.log('>>> Check handleOnclickDelete: ', job)
        this.props.deleteAjob(job)
    }
    render (){
        //re-render
       let {arrJobs} = this.props;
       let {showJobs} = this.state;
       let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
       console.log('>>> Check Condition: ', check)
       return(
       <>     
                {showJobs === false ?
                 <div>
                 <button onClick={() => this.handleShowHide()}>Show</button>
                 </div>       
                :    
                <>
                        <div className='job-lists'>
                                {
                                    arrJobs.map((item, index) => {
                                        return(
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                             <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div> 
                                        )
                                    })
                                }
                        </div>
                        <div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                </>
                }
        </>
        )
    }
}
// const ChilComponent = (props) => {
//     let { arrJobs} = props;
//     return (
//                <>                 
//                        <div className='job-lists'>
//                             {
//                                 arrJobs.map((item, index) => {
//                                     return(
//                                        <div key={item.id}>
//                                         {item.title} - {item.salary}
//                                        </div> 
//                                     )
//                                 })
//                             }
//                        </div>
//                 </>
//                 )
// }
export default ChilComponent;