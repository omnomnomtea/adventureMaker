import React from 'react'
import {connect} from 'react-redux'


const CreateAdventureForm = (props) => {
  const { handleSubmit } = props;

  return (
   <div />
  )
}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit: () => {
      dispatch(  )
    }
  }
}

export default connect(mapState, mapProps)(CreateAdventureForm);
