import React from 'react';
import { Button, Collapse, Well, Checkbox } from 'react-bootstrap';

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Button onClick={ () => this.setState({ open: !this.state.open })}>
          preferences
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Checkbox inline type="checkbox">Diary-Free</Checkbox>
              <Checkbox inline type="checkbox">Gluten-Free</Checkbox>
              <Checkbox inline type="checkbox">Egg-Free</Checkbox>
              <Checkbox inline type="checkbox">Peanut-Free</Checkbox>
              <Checkbox inline type="checkbox">Tree-Nut-Free</Checkbox>
              <Checkbox inline type="checkbox">Soy-Free</Checkbox>
              <Checkbox inline type="checkbox">Fish-Free</Checkbox>
              <Checkbox inline type="checkbox">Shellfish-Free</Checkbox>
            </Well>
          </div>
        </Collapse>
      </div>
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

{/*<Nav pullRight>
  <DropdownButton noCaret pullRight title="Preferences" id="split-button-pull-right">
    <MenuItem disabled eventKey="Diary-Free">Diary-Free</MenuItem>
    <MenuItem disabled eventKey="Gluten-Free">Gluten-Free</MenuItem>
    <MenuItem disabled eventKey="Egg-Free">Egg-Free</MenuItem>
    <MenuItem disabled eventKey="Peanut-Free">Peanut-Free</MenuItem>
    <MenuItem disabled eventKey="Tree-Nut-Free">Tree-Nut-Free</MenuItem>
    <MenuItem disabled eventKey="Soy-Free">Soy-Free</MenuItem>
    <MenuItem disabled eventKey="Fish-Free">Fish-Free</MenuItem>
    <MenuItem disabled eventKey="Shellfish-Free">Shellfish-Free</MenuItem>
  </DropdownButton>
</Nav>*/}