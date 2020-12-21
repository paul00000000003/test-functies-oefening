export const increment = (increment) => {
  return { type: "INCREMENT", getal: increment };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};
