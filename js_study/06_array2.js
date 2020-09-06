//01.make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join();
    console.log(result);
}

//02.make an array out of a string
{
    const fruits = 'apple,banana,orange';
    const result = fruits.split(',');
    //const result = fruits.split(',',2);
    console.log(result);
}
//03.make this array look like this[5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    array.reverse();
    console.log(array);
}
//04.make new array without the first two elements
{
    const array = [1,2,3,4,5];
    //const result = array.splice(0,2);
    //console.log(result);
    const result2 = array.slice(2,5);
    console.log(result2);
}

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }

}

const students = [
    new Student('A',29,true, 45),
    new Student('B',28,false, 80),
    new Student('C',30,true, 90),
    new Student('D',40,false, 66),
    new Student('E',18,true, 88)
];

//05.find a student with the score 90
{
    const result = students.find(
        (student, index) => student.score === 90
    );
    console.log(result);
}
//06.make an array of enrolled students
{
    const result = students.filter(
        (student) => student.enrolled
    )
    for(student of result){
        console.log(student);
    }
}
//07.make an array containing only the sc=tudents'scores
//result should be : [45,80,90,66,88]
{
    const result = students.map(student => student.score);
    console.log(result);
}

//08.check if there is a student the score lower than 50
{
    //한명이라도 50점이 안되는 사람이 있는지
    const result = students.some(
        student => student.score < 50
    );
    console.log(result);
    //모든 학생의 점수가 50점이 안되는지
    const result2 = students.every(
        student => student.score < 50
    );
    console.log(result2);
}

//09.comput student's average score
{
    const result = students.reduce(
        (prev, curr) => {
            console.log(prev,curr);
            return prev + curr.score;
        }, 0
    );
    console.log(result / students.length);
}
//10.make a string containing all the scores
{
    const result = students
        .map(student => student.score)
        .filter(score => score > 50)
        .join();
    console.log(result);
}

//11.sorted in ascending order
{
    const result = students
    .map(student => student.score)
    .sort((a,b) => a - b) //작은순서대로
    .join();
    console.log(result);
}