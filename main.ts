import {Classroom, Student} from "./controller/Student";
import {StudentManager} from "./controller/StudentManager";

let studentlist = new StudentManager()
let student1 = new Student("mot", Classroom.C02, "Hanoi",2,"game")
let student2 = new Student("hai", Classroom.C02, "Hanoi",4,"badminton")
let student3 = new Student("ba", Classroom.C03, "Hanoi",6,"baseball")
let student4 = new Student("bon", Classroom.C03, "Hanoi",5,"football")
studentlist.list.push(student1)
studentlist.list.push(student2)
studentlist.list.push(student3)
studentlist.list.push(student4)
studentlist.showList()

export let readline = require('readline-sync')

export let main = (studentList:StudentManager) =>{
    console.log(`***`)
    console.log(`Main menu:`)
    let option:string[] = [
        "Show info",
        "Find a student by name",
        "Add a student",
        "Update information",
        "Delete a student"
    ]
    let index = readline.keyInSelect(option,"Please choose:")
    switch (index){
        case 0:
            studentList.showList()
            console.log(`Return to main menu`)
            main(studentList)
            break
        case 1:
            let nameForFinding = readline.question(`Enter student's name:`)
            studentList.find(nameForFinding)
            console.log(`Return to main menu`)
            main(studentList)
            break
        case 2:
            let nameForAdding = readline.question(`Enter student's name:`)
            console.log(`Please choose a classroom:`)
            let classroomForAdding:Classroom
            let optionForClassroomAdding:string[] = [
                "C02",
                "C03"
            ]
            let indexForClassroomAdding = readline.keyInSelect(optionForClassroomAdding,"Please choose:")
            if(indexForClassroomAdding === 0) classroomForAdding = Classroom.C02
            else classroomForAdding = Classroom.C03
            let addressForAdding = readline.question(`Enter address:`)
            let scoreForAdding = +readline.question(`Enter score:`)
            let hobbyForAdding = readline.question(`Enter hobby:`)
            studentList.add(nameForAdding,classroomForAdding,addressForAdding,scoreForAdding,hobbyForAdding)
            console.log(`Return to main menu`)
            main(studentList)
            break
        case 3:
            let idForUpdate = +readline.question(`Enter ID:`)
            let nameForUpdate = readline.question(`Enter student's name:`)
            let optionForClassroomUpdate:string[] = [
                "C02",
                "C03"
            ]
            let indexForClassroomUpdate = readline.keyInSelect(optionForClassroomUpdate,"Please choose:")
            let classroomForUpdate:Classroom
            if(indexForClassroomUpdate === 0) classroomForUpdate = Classroom.C02
            else classroomForUpdate = Classroom.C03
            let addressForUpdate = readline.question(`Enter address:`)
            let scoreForUpdate = +readline.question(`Enter score:`)
            let hobbyForUpdate = readline.question(`Enter hobby:`)
            studentList.updateInfo(idForUpdate,nameForUpdate,classroomForUpdate,addressForUpdate,scoreForUpdate,hobbyForUpdate)
            main(studentList)
            break
        case 4:
            let idForDelete = +readline.question(`Enter ID:`)
            studentList.deleteStudent(idForDelete)
            break
        default:
            console.log(`Exit.`)
    }
}
main(studentlist)