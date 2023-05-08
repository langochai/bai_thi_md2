export enum Classroom {
    C02 = "C02",
    C03 = "C03"
}

export class Student {
    static studentID: number = 0;
    id: number;
    studentName: string;
    classroom: Classroom;
    address: string;
    score: number;
    hobby: string;

    constructor(studentName: string, classroom: Classroom, address: string, score: number, hobby: string) {
        this.id = Student.studentID;
        this.studentName = studentName;
        this.classroom = classroom;
        this.address = address;
        this.score = score;
        this.hobby = hobby;
        Student.studentID++
    }
}