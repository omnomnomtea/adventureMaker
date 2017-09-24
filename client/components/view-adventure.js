import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdventurePassages } from '../store'
import { Card, Button } from 'semantic-ui-react'


class ViewAdventure extends React.Component {

  constructor() {
    super()
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    if (this.props.getPassages && this.props.id) {
      this.props.getPassages(this.props.id);
      this.setState({ loaded: true })
    }
  }

  componentWillReceiveProps(newProps) {
    //if we haven't had a chance to get the passages before, but now we do, do it
    if (!(this.props.getPassages && this.props.id) && (newProps.id && this.props.getPassages)) {
      this.newProps.getPassages(newProps.id);
      this.setState({ loaded: true });
    }
  }

  render() {
    const { adventure, startingPassage } = this.props;
    if (!loaded) return <div />

    return (
      <div>
        <h3>{adventure.title}</h3>

        <div>
          <h4>{startingPassage.title}</h4>
          <p>{startingPassage.description}</p>
        </div>
        <Card.Group>
          {
            startingPassage.links.map(link => {
              return (
                <Card key={link.id}>
                  <Card.Header>
                    <Link to={link.toPassageId}>{link.title}</Link>
                  </Card.Header>
                </Card>
              )
            })
          }
        </Card.Group>)
      </div>

    )

  }
}


const mapState = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  const adventure = state.adventures.find(adv => adv.id === id);
  const passages = state.passages.filter(passage => {
    return passage.adventureId === adventure.id;
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
