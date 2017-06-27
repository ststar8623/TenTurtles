import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from 'react-sidebar';
import { FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';
import Drop from './components/nav.jsx';


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
    this.setState({
      item: event.target.value
    });
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
        <Drop />
        <form>
          <FormControl bsSize="small" type="text" placeholder="Search here" onChange={this.handleChange} />
          <Button type="button" bsSize="small" onClick={this.search}>Submit</Button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));