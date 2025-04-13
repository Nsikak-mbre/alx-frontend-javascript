const getListStudentIds = (arr) => {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const studentIds = arr.map((student) => student.id);
  return studentIds;
};

export default getListStudentIds;
