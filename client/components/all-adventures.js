import React from 'react'
import { connect } from 'react-redux'
import  MultipleAdventures  from './multiple-adventures'

/**
 * COMPONENT
 */
const AllAdventures = (props) => {
  const { adventures } = props;
  if (!adventures) return <div />

  return (
    <MultipleAdventures adventures={adventures} />
  )

}


const mapState = (state) => {
  return {
    adventures: state.adventures
  }
}

export default connect(mapState, null)(AllAdventures)
