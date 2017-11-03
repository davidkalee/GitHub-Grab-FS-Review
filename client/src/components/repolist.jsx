import React from 'react';

class Repolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        There are {this.props.repos.length} repos listed.
      </div>
    )
  }

}


export default Repolist;