import React from 'react'
import { connect } from 'react-redux'
import { MultipleAdventures } from './multiple-adventures'

/**
 * COMPONENT
 */
const AllAdventures = (props) => {
  const { adventures } = props;

  return (
    <div>

      <MultipleAdventures adventures={adventures} />

    </div>
  )

}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    adventures: state.adventures
  }
}

export default connect(mapState)(AllAdventures)
