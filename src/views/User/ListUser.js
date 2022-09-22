import React from "react";
import axios from "axios";

import './ListUser.scss';
class ListUser extends React.Component {

        async componentDidMount () {
            // axios.get('https://reqres.in/api/users?page=1')
            //     .then(res => {
            //         console.log('>>> Check res: ', res.data.data)
            //     })
            let res = await axios.get('https://reqres.in/api/users?page=1');
            this.setState({
                listUsers: res && res.data && res.data.data ? res.data.data : []
            })
                
        }

        render () {
            // let { listUsers } = this.state
            return (
                <div className="list-user-container">
                    <div className="title">
                            Fetch all list users
                    </div>
                    <div className="list-user-content">
                            <div className="child">
                                1 - Hau - Front End
                            </div>
                            
                    </div>
                </div>
            )
        }
}



export default ListUser;

