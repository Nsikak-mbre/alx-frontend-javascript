const createint8TypedArray = (length, position, value) => {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    view.setInt8(position, value);
    return view;
}

export default createint8TypedArray;
