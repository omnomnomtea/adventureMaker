import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdventurePassages } from '../store'
import { Card, Button } from 'semantic-ui-react'


class ViewAdventure extends React.Component {

  constructor() {
    super()
    this.state = {
      sentDispatch: false,
      loaded: false
    }
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.sentDispatch && newProps.adventure) {
      newProps.getPassages(newProps.id)
        .then(() => this.setState({ loaded: true }))
      this.setState({ sentDispatch: true })
    }
  }

  render() {
    const { adventure, startingPassage } = this.props;
    if (!this.state.loaded || !this.props.adventure) return <div />

    return (
      <div>
        <h3>{adventure.title}</h3>

        {!!startingPassage &&
          <div>
            <h4>{startingPassage.title}</h4>
            <p>{startingPassage.description}</p>
          </div>
        }
        <Card.Group>

          {
            // startingPassage.links.map(link => {
            //   return (
            //     <Card key={link.id}>
            //       <Card.Header>
            //         <Link to={link.toPassageId}>{link.title}</Link>
            //       </Card.Header>
            //     </Card>
            //   )
            // })
          }
        </Card.Group>
      </div>

    )
  }
}


const mapState = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const adventure = state.adventures.find(adv => adv.id === id);
  const passages = state.passages.filter(pas => {
    return pas.adventureId === adventure.id;
  })
  const startingPassage = passages.filter(passage => passage.canStartAdventure)[0]

  return {
    startingPassage,
    adventure,
    id
  }
}

const mapDispatch = (dispatch) => {
  return {
    getPassages: adventureId => dispatch(fetchAdventurePassages(adventureId))
  }
}

export default connect(mapState, mapDispatch)(ViewAdventure);
