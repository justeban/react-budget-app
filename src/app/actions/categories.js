export const categoryCreate = (category) => {

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