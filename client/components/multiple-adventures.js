import history from '../history';
import React from 'react';
import { Card, Button } from 'semantic-ui-react'


const handleClickNewPassage = (adventureId) => {
  history.push(`/newpassage/${adventureId}`);
}
const handleClickEditAdventure = (adventureId) => {
  history.push(`/editadventure/${adventureId}`);
}


const MultipleAdventures = (props) => {

  const { adventures } = props;

  return (
    <Card.Group>
      {
        adventures.map(adv => {
          return (
            <Card key={adv.id}>
              <Card.Header>
                <h3>{adv.title}</h3>
              </Card.Header>
              <Card.Content>
                {adv.description}
              </Card.Content>
              <Card.Content extra>
                <Button fluid onClick={() => handleClickNewPassage(adv.id)} basic color='green'>Add Passage</Button>
                <Button fluid onClick={() => handleClickEditAdventure(adv.id)} basic color='yellow'>Edit Adventure Info</Button>
                <Button fluid color='red'>Delete Adventure Passage</Button>
              </Card.Content>
            </Card>
          )

        })
      }
    </Card.Group>
  )
}

export default MultipleAdventures;
