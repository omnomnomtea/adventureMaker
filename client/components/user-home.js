import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import history from '../history'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {

  constructor() {
    super()

    this.handleClickNewPassage = this.handleClickNewPassage.bind(this);
  }

  handleClickNewPassage(adventureId) {
    history.push(`/newpassage/${adventureId}`);
  }
  handleClickEditAdventure(adventureId) {
    history.push(`/editadventure/${adventureId}`);
  }

  render() {
    const { email, selfAdventures } = this.props;

    return (
      <div>
        <h3>Welcome, {email}</h3>

        <Card.Group>
          {
            selfAdventures.map(adv => {
              return (
                <Card key={adv.id}>
                  <Card.Header>
                    {adv.title}
                  </Card.Header>
                  <Card.Content>
                    {adv.description}
                  </Card.Content>
                  <Card.Content extra>
                    <Button fluid onClick={() => this.handleClickNewPassage(adv.id)} basic color='green'>Add Passage</Button>
                    <Button fluid onClick={() => this.handleClickEditAdventure(adv.id)} basic color='yellow'>Edit Adventure Info</Button>
                    <Button fluid color='red'>Delete Adventure Passage</Button>
                  </Card.Content>
                </Card>
              )

            })
          }
        </Card.Group>

      </div>
    )
  }
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
