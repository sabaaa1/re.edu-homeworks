function removeProperty(obj, propertyToRemove) {
  const newObj = { ...obj };
  delete newObj[propertyToRemove];
  return newObj;
}

const originalObject = {
  name: "hae",
  age: 25,
  city: "hue",
  profession: "hoe",
};

console.log(removeProperty(originalObject, "age"));
