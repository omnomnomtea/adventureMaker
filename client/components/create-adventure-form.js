import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { createAdventure } from '../store';

const CreateAdventureForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div>
    <h2>New Adventure</h2>
      <Form onSubmit={handleSubmit}>
        <Input label="Title" type="text" name="title" />
        <TextArea label="Description" style={{ minHeight: 100 }} />
        <Button basic color="green" type="submit">Create</Button>
      </Form>
    </div>
  )
}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: (event, {value}) => {
      event.preventDefault();
      dispatch(createAdventure(value));
    }
  }
}

export default connect(mapState, mapDispatch)(CreateAdventureForm);
