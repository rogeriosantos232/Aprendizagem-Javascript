// Aula 92,93,94
// const cursos = ["Javascript", "HTML", "CSS", "Java", "C#", "C++"]



// export default function getTodosCursos(){
//     return cursos
// }

// function getCurso(i_curso){
//     return cursos[i_curso]
// }

// export{cursos,getCurso}

// Aula 95
class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Java", "C#", "C++"]

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static removeCurso=()=>{
        this.cursos=[]
    }

}

export default Cursos