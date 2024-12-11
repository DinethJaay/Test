function projectObject(source, prototype) {
  if (typeof source !== "object" || source === null) {
    throw new TypeError("Source must be a non-null ");
  }
  if (typeof prototype !== "object" || prototype === null) {
    throw new TypeError("Prototype must be a non-null ");
  }

  const result = {};
  for (const key of Object.keys(prototype)) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = source[key];
    }
  }

  return result;
}

module.exports = projectObject;
