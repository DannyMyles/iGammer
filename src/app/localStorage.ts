export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    console.log("Serialized state", JSON.parse(serializedState))
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
