import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, CreateAdventureForm, EditAdventureForm, CreatePassageForm, MyAdventures, AllAdventures, ViewAdventure, Passage} from './components'
import {me, fetchAllAdventures, fetchAllPassages} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/all' component={AllAdventures} />
            <Route exact path='/' component={AllAdventures} />

            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path='/newadventure' component={CreateAdventureForm} />
                  <Route path='/editadventure/:id' component={EditAdventureForm} />
                  <Route path='/newpassage/:adventureId' component={CreatePassageForm} />
                  <Route path='/myadventures' component={MyAdventures} />
                  <Route path='/adventure/:id' component={ViewAdventure} />
                  <Route path='/passage/:id' component={Passage} />

                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchAllAdventures())
      dispatch(fetchAllPassages())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
