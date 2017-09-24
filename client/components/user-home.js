import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'
import { MultipleAdventures } from './index'

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
