import React from 'react'
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id:'job1', title:'Dev', salary:'2$'},
            {id:'job2', title:'Tester', salary:'4$'}
        ]
    }
    addNewJob = (job) => {
        console.log('check job from parent: ', job);
        // let currentJob = this.state.arrJobs;
        // currentJob.push(job);
        this.setState({
            // arrJobs: currentJob
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    
    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    
    
    render(){
        console.log('Call render: ', this.state)
        return(
            <>
            {/* <div className='first'>
                <input value={this.state.name} type="text" 
                onChange={(event)=> {this.handleOnChangeName(event)}}
                />
                hello my component {this.state.name}
            </div>
            <div className='second'>
                wellcome {this.state.name}
            </div> */}
            {/* <form>
                <label htmlFor='fn'>Firstname: </label>
                <input 
                    className='fn'
                    type="text"
                    value={this.state.firstname}
                    onChange={(event) => this.handleChangeFn(event)}
                ></input>
                <br></br>
                <label htmlFor='ln'>Lastname: </label>
                <input 
                    className='ln'
                    type="text"
                    value={this.state.lastname}
                    onChange={(event) => this.handleChangeLn(event)}
                ></input>
                <br/>
                <br/>
                <input 
                    type='submit' 
                    onClick={(e) => this.handleSubmit(e)}
                ></input>
            </form> */}
                <AddComponent
                    addNewJob={this.addNewJob}
                    
                />
            <ChildComponent
                // name={'Child one'}
                // age={22}
                arrJobs={this.state.arrJobs}
                deleteAJob={this.deleteAJob}
            />

            </>
            
        )
            
        
    }
}

export default MyComponent;