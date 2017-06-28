import React from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Button, Grid } from 'react-bootstrap';
import $ from 'jquery';
import Drop from './components/nav.jsx';
import PairingList from './components/pairingList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      pairs: {
        finalRecipes: [],
        finalWines: []
      }
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
      success: data => {
        console.log('success', data);
        this.setState({
          pairs: data
        })
      }
    });
  }

  // search() {
  //   console.log('click');
  //   $.ajax({
  //     url: 'http://138.68.58.133/pairing',
  //     type: 'POST',
  //     data: {
  //       ingredients: [this.state.item]
  //     },
  //     success: function(data) {
  //       console.log('success', data);
  //     }
  //   });
  // }

  render() {
    return (
      <Grid style={styles.container}>
        <h1 style={styles.h1}>App 4 Food</h1>
        <Drop />
        <form style={styles.form}>
          <FormControl style={styles.inputBox} bsSize="small" type="text" placeholder="Search here" onChange={this.handleChange} />
          <Button type="button" bsSize="small" onClick={this.search}>Submit</Button>
        </form>
        <PairingList pairs={this.state.pairs} />
      </Grid>
    )
  }
}

let styles = {
  h1: {
    textAlign: 'center'
  },
  container: {
    width: '500px',
    padding: '25px'
  },
  form: {
    padding: '10px'
  },
  inputBox: {
    marginRight: '15px',
    display: 'inline-block',
    width: '80%'
  }
};

ReactDOM.render(<App />, document.getElementById('app'));