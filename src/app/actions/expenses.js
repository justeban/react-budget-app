import uuid from 'uuid/v4';

export const expenseCreate = expense => {

  expense.id = uuid();
  expense.createDate = new Date();

  return {
    type: 'EXPENSE_CREATE',
    payload: expense,
  };

};

export const expenseUpdate = expense => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const expenseDestroy = expense => {
  return {
    type: 'EXPENSE_DESTROY',
    payload: expense,
  };
};