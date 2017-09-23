import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { editAdventure } from '../store';

class EditAdventureForm extends React.Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, { name, value }) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.props.modifyAdventure(this.state);
  }

  render() {
    return (
      <div>
        <h2>New Adventure</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input label="Title" type="text" name="title" onChange={this.handleChange} value={this.state.title} />
          <TextArea label="Description" name="description" style={{ minHeight: 100 }} onChange={this.handleChange} value={this.state.description} />
          <Button basic color="green" type="submit">Edit</Button>
        </Form>
      </div>
    )
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      id: this.props.id,
      title: newProps.title,
      description: newProps.description
    })
  }
  componentDidMount() {
    if (this.props.id) {
      this.setState({
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
      })
    }
  }
}

const mapState = (state, ownProps) => {
  let id = Number(ownProps.match.params.id)
  let adventure = state.adventures.find(adv => adv.id === id);
  let title = '';
  let description = '';
  if (adventure) {
    title = adventure.title;
    description = adventure.description;
  }
  return {
    title,
    id,
    description,
  }
}

const mapDispatch = (dispatch) => {
  return {
    modifyAdventure: (adventure) => dispatch(editAdventure(adventure))
  }
}

export default connect(mapState, mapDispatch)(EditAdventureForm);
