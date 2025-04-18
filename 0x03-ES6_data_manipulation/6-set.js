const setFromArray = (arr) =>
    Array.isArray(arr) ? new Set(arr) : new Set();

export default setFromArray;
