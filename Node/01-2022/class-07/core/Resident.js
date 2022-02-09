/**
 * The model is the only place where we have access to the data itself, including any relevant functions for manipulation (CRUD)
 * Direct data access from other files is discouraged.
 */
let residents = [
  {
    _id: 1,
    name: 'Janko Glavcev',
    hasCar: true,
    isBoomer: true,
  },
];

const getAllResidents = async () => {
  return residents;
};

const addNewResident = async ({ name, hasCar, isBoomer }) => {
  const newResident = {
    _id: residents.length + 1,
    name,
    hasCar,
    isBoomer,
  };

  residents.push(newResident);
};

const updateResident = async ({ _id, name, hasCar, isBoomer }) => {
  residents = residents.map((resident) => {
    if (resident._id === _id) {
      return {
        _id: resident._id,
        name,
        hasCar,
        isBoomer,
      };
    }
    return resident;
  });
};

const deleteResident = async (id) => {
  residents = residents.filter((resident) => resident._id !== id);
};

module.exports = {
  getAllResidents,
  addNewResident,
  updateResident,
  deleteResident,
};
