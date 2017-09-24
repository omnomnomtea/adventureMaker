import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_PASSAGE = 'GET_PASSAGE';
const GET_ALL_PASSAGES = 'GET_ALL_PASSAGES';
const REMOVE_PASSAGE = 'REMOVE_PASSAGE';
const MODIFY_PASSAGE = 'MODIFY_PASSAGE';
const GET_SOME_PASSAGES = 'GET_SOME_PASSAGES'

/**
 * INITIAL STATE
 */
const defaultPassages = [];

/**
 * ACTION CREATORS
 */
export const getPassage = passage => ({ type: GET_PASSAGE, passage })
export const modifyPassage = passage => ({ type: MODIFY_PASSAGE, passage })
export const removePassage = passage => ({ type: REMOVE_PASSAGE, passage })
export const getAllPassages = passages => ({ type: GET_ALL_PASSAGES, passages })
export const getSomePassages = passages => ({ type: GET_SOME_PASSAGES, passages })


/**
 * THUNK CREATORS
 */
export const fetchPassage = (id) =>
  dispatch =>
    axios.get(`/api/passages/${id}`)
      .then(res => {
        if (res.data) dispatch(getPassage(res.data));
      })
      .catch(err => console.log(err))

export const fetchAllPassages = () =>
  dispatch =>
    axios.get(`/api/passages/`)
      .then(res => {
        if (res.data) dispatch(getAllPassages(res.data));
      })
      .catch(err => console.log(err))

export const fetchAdventurePassages = (id) =>
  dispatch =>
    axios.get(`/api/adventures/passages/${id}`)
      .then(res => {
        if (res.data) dispatch(getSomePassages(res.data));
      })
      .catch(err => console.log(err))

export const createPassage = (passage) =>
  dispatch =>
    axios.post(`/api/passage/`, passage)
      .then(res => {
        if (res.data) {
          dispatch(getPassage(res.data));
          history.push(`/passages/${res.data.id}`)
        }
      })
      .catch(err => console.log(err))

export const editPassage = (passage) =>
  dispatch =>
    axios.put(`/api/passages/${passage.id}`, passage)
      .then(res => {
        if (res.data) {
          dispatch(modifyPassage(res.data));
          history.push(`/passages/${res.data.id}`)
        }
      })
      .catch(err => console.log(err))

export const deletePassage = (id) =>
  dispatch =>
    axios.delete(`/api/passage/${id}`)
      .then(() => {
        dispatch(removePassage());
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (passages = defaultPassages, action) {
  let index;
  switch (action.type) {
    case GET_PASSAGE:
      return [...passages, action.adventure]
    case REMOVE_PASSAGE:
      index = passages.findIndex(passage => passage.id === action.passage.id);
      return [].concat(passages.slice(0, index), passages.slice(index + 1))
    case GET_ALL_PASSAGES:
      return action.passages;
    case GET_SOME_PASSAGES:
      return [...passages].concat(action.passages);
    case MODIFY_PASSAGE:
      index = passages.findIndex(passage => passage.id === action.passage.id);
      return [action.passage].concat(passages.slice(0, index), passages.slice(index + 1))
    default:
      return passages;
  }
}
