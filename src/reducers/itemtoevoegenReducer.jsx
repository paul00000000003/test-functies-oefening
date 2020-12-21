let itemarr = [];
let nrhigh = 0;

const itemtoevoegenReducer = (state = [], action) => {
  switch (action.type) {
    case "ITEM_TOEVOEGEN":
      itemarr = state;
      console.log("binnen reducer "+action.item_title)
      itemarr.push({ id: nrhigh++, title: action.item_title, amount: 1 });
      return itemarr;
    default:
      return state;
  }
};

export default itemtoevoegenReducer;
