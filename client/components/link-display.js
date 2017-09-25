import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react'


const LinkDisplay = (props) => {
  const { passage } = props;

  return (
    <Card key={passage.id}>
      <h4>{passage.title}</h4>
      <Link to={`/passage/${passage.toPassageId}`}>
        <Button fluid color='blue'>{passage.description}</Button>
      </Link>
    </Card>
  )

}

export default LinkDisplay;
