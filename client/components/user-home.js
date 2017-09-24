import React from 'react'
import { connect } from 'react-redux'
import { MultipleAdventures } from './multiple-adventures'

/**
 * COMPONENT
 */
const UserHome = (props) => {
  const { email, selfAdventures } = props;

  return (
    <div>
      <h3>Welcome, {email}</h3>

    <MultipleAdventures adventures={selfAdventures} />

    </div>
  )

}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    selfAdventures: state.adventures.filter(adv => {
      return adv.ownerId === state.user.id;
    })
  }
}

export default connect(mapState)(UserHome)
