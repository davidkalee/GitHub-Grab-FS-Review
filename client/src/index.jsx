import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search.jsx';
import Repolist from './components/repolist.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  this.searchButton = this.searchButton.bind(this); 
  }

  searchButton(query) {
    axios.post('http://localhost:3000/repos', {'username': query})
      .then(results => console.log(results))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Search searchButton={this.searchButton} />
        <br/>
        <Repolist repos={this.state.repos}/>
      </div>
    )
  }


}

// Why is this.state and this.searchButton both only this?
// What is constructor?





ReactDOM.render(<App />, document.getElementById('app'));