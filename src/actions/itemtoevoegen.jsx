const ItemToevoegen = (title) => {
  console.log("binnen action item toevoegen " + title);
  return { type: "ITEM_TOEVOEGEN", item_title: title };
};

export default ItemToevoegen;
