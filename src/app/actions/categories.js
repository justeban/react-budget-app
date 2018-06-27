import uuid from 'uuid/v4';

export const categoryCreate = (category) => {

  category.id = uuid();
  category.createDate = new Date();

  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };

};

export const categoryUpdate = (category) => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const categoryDestroy = (categoryId) => {
  return {
    type: 'CATEGORY_DESTROY',
    payload: categoryId,
  };
};