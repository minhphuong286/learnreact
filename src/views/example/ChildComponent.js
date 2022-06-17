import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleDeleteJob = (job) => {
      this.props.deleteAJob(job)
  }
  render() {
    console.log("Check props: ", this.props);
    // let name = this.props.name;
    // let age = this.props.age;
    // let {name, age, arrJobs} = this.props;
    // let check = showJob === false ? 'showJob: false' : 'showJob: true';
    // console.log('Check: ', check);

    let { arrJobs } = this.props;
    let { showJob } = this.state;

    return (
      <>
        {/* <div>ChildComponent: {name} - {age}</div> */}
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <span onClick={()=> this.handleDeleteJob(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//     console.log('Check props: ', props)
//     let {name, age, arrJobs} = props;
//     return(
//     <>
//         <div>ChildComponent: {name} - {age}</div>
//         <div className="job-lists">
//             {
//                 arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </>
//     )
// }

export default ChildComponent;
