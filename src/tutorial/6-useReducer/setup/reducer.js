// reducer function
export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "please enter value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
      modalContent: "please enter value",
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
    };
  }
  throw new Error("no matching action type");
};
