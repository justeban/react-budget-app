const initialState = [];

export default (state = initialState, action) => {

  let { type, payload = {} } = action;
  let {id, categoryId} = payload;
  let categoryExpenses = state[categoryId];

  switch (type) {

    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };

    case 'CATEGORY_DESTROY':
      let { [payload]: removed, ...newState } = state;
      return newState;

    case 'EXPENSE_CREATE':
      return { ...state, [categoryId]: [...categoryExpenses, payload] };

    case 'EXPENSE_DESTROY':
      let destroyExpenseList = categoryExpenses.filter((expense, i) => expense.id !== id);
      return { ...state, [categoryId]: destroyExpenseList };

    case 'EXPENSE_UPDATE':
      let updateExpenseList = categoryExpenses.map((expense, i) => expense.id === id ? payload : expense);
      return { ...state, [categoryId]: updateExpenseList };

    default:
      return state;
  }
};