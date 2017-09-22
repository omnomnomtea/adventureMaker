import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { createAdventure } from '../store';

class CreateAdventureForm extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.props.createAdventure(this.state);
  }

  render() {
    return (
      <div>
        <h2>New Adventure</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input label="Title" type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          <TextArea label="Description" name="description" style={{ minHeight: 100 }} onChange={this.handleChange} />
          <Button basic color="green" type="submit">Create</Button>
        </Form>
      </div>
    )
  }
}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {
    createAdventure: (adventure) => dispatch(createAdventure(adventure))
  }
}

export default connect(mapState, mapDispatch)(CreateAdventureForm);
