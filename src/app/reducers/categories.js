const initialState = [];

export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {

    case 'CATEGORY_CREATE':
      return [...state, payload];

    case 'CATEGORY_UPDATE':
      return state.map((item, i) => item.id === payload.id ? payload : item);

    case 'CATEGORY_DESTROY':
      return state.filter((item, i) => item.id !== payload);

    default:
      return state;

  }
};