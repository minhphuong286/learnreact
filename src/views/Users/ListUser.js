import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from 'react-router-dom';
// https://reqres.in/

class ListUser extends React.Component{
    state = {
        listUsers: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('respond from pages2 API', res)
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=2')
        console.log('Respond from page2API', res)

        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleViewDetailUser = (user) => {
        console.log("props of user: ", this.props);
        this.props.history.push(`/user/${user.id}`);
    }

    render() {
        let { listUsers } = this.state;
        return (

            <div className="list-user-container">
                <div className="title">
                    Fetch from page2 API, display user lists
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })

                    }
                    
                </div>
            
            </div>
        )
    }
}

export default withRouter(ListUser);