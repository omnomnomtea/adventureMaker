import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ADVENTURE = 'GET_ADVENTURE';
const GET_ALL_ADVENTURES = 'GET_ALL_ADVENTURES';
const REMOVE_ADVENTURE = 'REMOVE_ADVENTURE';
const MODIFY_ADVENTURE = 'MODIFY_ADVENTURE';

/**
 * INITIAL STATE
 */
const defaultAdventures = [];

/**
 * ACTION CREATORS
 */
export const getAdventure = adventure => ({ type: GET_ADVENTURE, adventure })
export const modifyAdventure = adventure => ({ type: MODIFY_ADVENTURE, adventure })
export const removeAdventure = (adventure) => ({ type: REMOVE_ADVENTURE, adventure })
export const getAllAdventures = (adventures) => ({ type: GET_ALL_ADVENTURES, adventures })


/**
 * THUNK CREATORS
 */
export const fetchAdventure = (id) =>
  dispatch =>
    axios.get(`/api/adventures/${id}`)
      .then(res => {
        if (res.data) dispatch(getAdventure(res.data));
      })
      .catch(err => console.log(err))

export const fetchAllAdventures = () =>
  dispatch =>
    axios.get(`/api/adventures/`)
      .then(res => {
        if (res.data) dispatch(getAllAdventures(res.data));
      })
      .catch(err => console.log(err))

export const createAdventure = (adventure) =>
  dispatch =>
    axios.post(`/api/adventures/`, adventure)
      .then(res => {
        if (res.data) {
          dispatch(getAdventure(res.data));
          history.push(`/adventures/${res.data.id}`)
        }
      })
      .catch(err => console.log(err))

export const deleteAdventure = (id) =>
  dispatch =>
    axios.delete(`/api/adventure/${id}`)
      .then(() => {
        dispatch(removeAdventure());
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (adventures = defaultAdventures, action) {
  let index;
  switch (action.type) {
    case GET_ADVENTURE:
      return [...adventures, action.adventure]
    case REMOVE_ADVENTURE:
      index = adventures.findIndex(adventure => adventure.id === action.adventure.id);
      return [].concat(adventures.slice(0, index), adventures.slice(index + 1))
    case GET_ALL_ADVENTURES:
      return action.adventures;
    case MODIFY_ADVENTURE:
      index = adventures.findIndex(adventure => adventure.id === action.adventure.id);
      return [action.adventure].concat(adventures.slice(0, index), adventures.slice(index + 1))
    default:
      return adventures;
  }
}
