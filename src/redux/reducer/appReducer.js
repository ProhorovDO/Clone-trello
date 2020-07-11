import {
  CREATE_BOARD,
  CURRENT_BOARD,
  ADD_CARD_TO_BOARD,
} from '../action/types';

let initialState = {
  board: [
    {
      link: '6d1c7f21-68db-433c-a37a-26467363672b',
      name: 'тест',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'описание',
      card: [],
    },
  ],
  currentBoard: {
    current: 0,
    currentItemBoard: {
      link: '6d1c7f21-68db-433c-a37a-26467363672b',
      name: 'тест',
      logo:
        'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png',
      text: 'описание',
      card: [],
    },
  },
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOARD:
      return {
        ...state,
        board: state.board.concat(action.payload),
      };
    case CURRENT_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
      };
    case ADD_CARD_TO_BOARD:
      const currentItem = state.currentBoard.current;
      return {
        ...state,
        [state.board[currentItem].card]: state.board[currentItem].card.push(
          action.payload
        ),
      };
    default:
      return state;
  }
};
