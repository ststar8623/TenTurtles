import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      item: event.target.value
    })
  }

  search() {
    console.log('click');
    $.ajax({
      url: '/search',
      method: 'POST',
      data: {
        item: this.state.item
      },
      success: function(data) {
        console.log('success', data);
      }
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <input type="button" value="search" onClick={this.search} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));