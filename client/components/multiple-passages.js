import history from '../history';
import React from 'react';
import { Card, Button } from 'semantic-ui-react'


const handleClickNewPassage = (passageId) => {
  history.push(`/newpassage/${passageId}`);
}
const handleClickEditPassage = (passageId) => {
  history.push(`/editpassage/${passageId}`);
}


const MultipleAdventures = (props) => {

  const { passages, adventureId } = props;

  return (
    <Card.Group>
      {
        passages.map(passage => {
          return (
            <Card key={passage.id}>
              <Card.Header>
                <h3>{passage.title}</h3>
              </Card.Header>
              <Card.Content>
                {passage.description}
              </Card.Content>
              <Card.Content extra>
                <Button fluid onClick={() => handleClickNewPassage(passage.id)} basic color='green'>Add Passage</Button>
                <Button fluid onClick={() => handleClickEditPassage(passage.id)} basic color='yellow'>Edit Passage Info</Button>
                <Button fluid color='red'>Delete Passage Passage</Button>
              </Card.Content>
            </Card>
          )

        })
      }
    </Card.Group>
  )
}

export default MultipleAdventures;
