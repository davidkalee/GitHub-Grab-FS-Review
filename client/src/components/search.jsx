import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleonChange = this.handleonChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  

  handleonChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  handleOnClick() {
    this.props.searchButton(this.state.term);
  }


  render() {
    return (
      <div>
        Add 'dem repos! Type username here: <br/>
        <input value={this.state.term} onChange={this.handleonChange}/>
        <button onClick={this.handleOnClick}>Click me!</button>
      </div>
    )
  }

}

export default Search;