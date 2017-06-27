import React from 'react';
import ReactDom from 'react-dom';
import { DropdownButton, MenuItem, Nav } from 'react-bootstrap';

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: [ 'Dairy-Free', 'Gluten-Free', 'Egg-Free', 'Peanut-Free', 'Tree-Nut-Free', 'Soy-Free', 'Fish-Free', 'Shellfish-Free' ]
    };
  }

  render() {
    return (
      <Nav pullRight>
        <DropdownButton pullRight title="Preferences" id="split-button-pull-right">
          {
            this.state.preferences.map(pref => {
              return (
                <MenuItem disabled key={pref}>{pref}</MenuItem>
              );
            })
          }
        </DropdownButton>
      </Nav>
    )
  }
}

export default Drop;

{/*<MenuItem disabled eventKey="Diary-Free">Diary-Free</MenuItem>
<MenuItem disabled eventKey="Gluten-Free">Gluten-Free</MenuItem>
<MenuItem disabled eventKey="Egg-Free">Egg-Free</MenuItem>
<MenuItem disabled eventKey="Peanut-Free">Peanut-Free</MenuItem>
<MenuItem disabled eventKey="Tree-Nut-Free">Tree-Nut-Free</MenuItem>
<MenuItem disabled eventKey="Soy-Free">Soy-Free</MenuItem>
<MenuItem disabled eventKey="Fish-Free">Fish-Free</MenuItem>
<MenuItem disabled eventKey="Shellfish-Free">Shellfish-Free</MenuItem>*/}