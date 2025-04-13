import getListStudentIds from './1-get_list_student_ids';
import getListStudents from './0-get_list_students';

// eslint-disable-next-line jest/require-hook
console.log(getListStudentIds('hello'));
console.log(getListStudentIds(getListStudents()));
