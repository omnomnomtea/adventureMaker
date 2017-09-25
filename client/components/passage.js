import React from 'react';
import { Card } from 'semantic-ui-react'
import LinkDisplay from './link-display'

const Passage = (props) => {

  const startingPassage = props.passage;

  return (
    <div>
      <h4>{startingPassage.title}</h4>
      <p>{startingPassage.description}</p>

      <Card.Group>
      {
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

export default Passage;
