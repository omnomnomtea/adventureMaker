import history from '../history';
import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const handleClickNewPassage = (adventureId) => {
  history.push(`/newpassage/${adventureId}`);
}
const handleClickEditAdventure = (adventureId) => {
  history.push(`/editadventure/${adventureId}`);
}


const MultipleAdventures = (props) => {

  const { adventures, canEdit } = props;

  return (
    <Card.Group>
      {
        adventures.map(adv => {
          return (
            <Card key={adv.id}>
              <Card.Header>
                <h3><Link to={`/adventure/${adv.id}`}>{adv.title}</Link></h3>
              </Card.Header>
              <Card.Content>
                {adv.description}
              </Card.Content>
              { canEdit &&
              <Card.Content extra>
                <Button fluid onClick={() => handleClickNewPassage(adv.id)} basic color='green'>Add Passage</Button>
                <Button fluid onClick={() => handleClickEditAdventure(adv.id)} basic color='yellow'>Edit Adventure Info</Button>
                <Button fluid color='red'>Delete Adventure</Button>
              </Card.Content>
              }
            </Card>
          )

        })
      }
    </Card.Group>
  )
}

export default MultipleAdventures;
