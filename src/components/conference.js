import React from 'react';
import http from '../http-common';

class Conference extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      conferences: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount()');
    http
      .get('conferences')
      .then(response => {
        this.setState({
          conferences: response.data,
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // this.getConferences().then();
  }

  // getConferences = async () => {
  //   console.log('getConferences');
  //   const res = await http.get('conferences');
  //   this.setState({ conferences: res.data });
  // };

  render() {
    console.log('render()');
    const { conferences } = this.state;
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div>
            <h2>Conferences</h2>
            <br />
            <ul>
              {conferences.map(conference => (
                <li key={conference.id}>{conference.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Conference;
