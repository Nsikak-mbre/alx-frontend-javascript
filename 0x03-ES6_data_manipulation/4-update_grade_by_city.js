const updateStudentGradeByCity = (students, city, newGrades) => {
    return students.filter((student) => student.location === city)
        .map((student) => {
            const studentGrades = newGrades.filter((grade) => grade.studentId === student.id);
            return {
                ...student,
                grade: studentGrades.length > 0 ? studentGrades[0].grade : 'N/A',
            };
        });
}

export default updateStudentGradeByCity;
