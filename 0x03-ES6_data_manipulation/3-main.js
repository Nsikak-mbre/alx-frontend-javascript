import getListStudents from './0-get_list_students';
import getStudentIdsSum from './3-get_ids_sum';

const students = getListStudents();
const value = getStudentIdsSum(students);

// eslint-disable-next-line jest/require-hook
console.log(value);
