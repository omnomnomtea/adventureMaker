import React from 'react';
import { Card } from 'semantic-ui-react'
import LinkDisplay from './link-display'
import { connect } from 'react-redux';


const Passage = (props) => {

  const startingPassage = props.passage;
  if (!startingPassage) return <div />

  return (
    <div>
      <h4>{startingPassage.title}</h4>
      <p>{startingPassage.description}</p>

      <Card.Group>
        {!!startingPassage.fromPassage &&
          startingPassage.fromPassage.map(link => {
            return (
              <LinkDisplay key={link.id} passage={link} />
            )
          })
        }
      </Card.Group>

    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    passage: state.passages.find(pass => pass.id === Number(ownProps.match.params.id)) || {}
  }
}

export default connect(mapState)(Passage);
