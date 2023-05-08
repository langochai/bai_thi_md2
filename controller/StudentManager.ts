import {Classroom, Student} from "./Student";

export class StudentManager {
    list: Student[] = []

    constructor() {
    }

    getStudentByName(studentName: string) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].studentName === studentName) {
                return this.list[i]
            }
        }
    }

    getStudentByID(id: number) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id === id) {
                return this.list[i]
            }
        }
    }

    showList() {
        if (this.list.length < 1) {
            console.log(`No data found.`)
            return
        }
        let result: Student[] = []
        if (this.list.length <= 5) {
            for (let i = 0; i < this.list.length; i++) {
                result.push(this.list[i])
            }
        } else {
            for (let i = 0; i < 5; i++) {
                result.push(this.list[i])
            }
        }
        console.table(result)
    }

    find(studentName: string) {
        if (this.getStudentByName(studentName)) console.table(this.getStudentByName(studentName))
        else console.log("Cannot find this student.")
    }

    add(studentName: string, classroom: Classroom, address: string, score: number, hobby: string) {
        let newStudent = new Student(studentName, classroom, address, score, hobby)
        this.list.push(newStudent)
        console.log("New student added.")
    }

    updateInfo(id: number, studentName: string, classroom: Classroom, address: string, score: number, hobby: string) {
        let student = this.getStudentByID(id)
        if (student) {
            student.studentName = studentName
            student.classroom = classroom
            student.address = address
            student.score = score
            student.hobby = hobby
            console.log(`Student's information updated.`)
        } else {
            console.log("Cannot find this student.")
        }
    }

    deleteStudent(id: number) {
        let studentIndex: number = -1
        this.list.forEach((e,index)=>{
            if(e.id===id) studentIndex = index
        })
        if(studentIndex === -1) console.log("Cannot find this student.")
        else {
            this.list.splice(studentIndex,1)
            console.log("Student deleted.")
        }
    }

}