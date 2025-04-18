export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
    if (!weakMap.has(endpoint)) {
        weakMap.set(endpoint, 0);
    }
    const count = weakMap.get(endpoint);
    if (count >= 5) {
        throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
    return true;
}