import React from 'react';

// class ChilComponent extends React.Component{
 
//     render (){
//         //re-render
//        console.log('>>> Check Props: ', this.props)
//        let {arrJobs} = this.props;
//         return (
//        <>                 
//                <div className='job-lists'>
//                     {
//                         arrJobs.map((item, index) => {
//                             return(
//                                <div key={item.id}>
//                                 {item.title} - {item.salary}
//                                </div> 
//                             )
//                         })
//                     }
//                </div>
//         </>
//         )
//     }
// }
const ChilComponent = (props) => {
    let { arrJobs} = props;
    return (
               <>                 
                       <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return(
                                       <div key={item.id}>
                                        {item.title} - {item.salary}
                                       </div> 
                                    )
                                })
                            }
                       </div>
                </>
                )
}
export default ChilComponent;