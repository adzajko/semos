export const getApplicationHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  };
};
