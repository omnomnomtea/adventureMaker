import React from 'react'
import { connect } from 'react-redux'
import MultipleAdventures from './multiple-adventures'

/**
 * COMPONENT
 */
const MyAdventures = (props) => {
  const { email, selfAdventures } = props;

  return (
    <div>
      <h3>
        Welcome, {email} <br />
        Here is a list of all the adventures you've created!
      </h3>

      <MultipleAdventures adventures={selfAdventures || []} />

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

export default connect(mapState)(MyAdventures)
