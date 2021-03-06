import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdventurePassages, fetchAllPassages } from '../store'
import { Card, Button } from 'semantic-ui-react'
import LinkDisplay from './link-display'

class ViewAdventure extends React.Component {

  constructor() {
    super()
    this.state = {
      sentDispatch: false,
      loaded: false
    }
  }

  componentDidMount () {
    if (!this.state.sentDispatch && this.props.adventure) {
      this.props.getPassages(this.props.id)
        .then(() => this.setState({ loaded: true }))
      this.setState({ sentDispatch: true })
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

        {!!startingPassage && !!startingPassage.fromPassage &&
        <Card.Group>
          {
            startingPassage.fromPassage.map(link => {
              return (
                <LinkDisplay key={link.id} passage={link} />
              )
            })
          }
        </Card.Group>
        }
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
    getPassages: adventureId => dispatch(fetchAllPassages(adventureId))
  }
}

export default connect(mapState, mapDispatch)(ViewAdventure);
