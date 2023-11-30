// Módulos, Aula 92,93,94

// import getTodosCursos from "./cursos.js"
//import {cursos as c,getCurso as gc} from "./cursos.js"
// import * as m_cursos from "./cursos.js" // Importa todos os elementos do módulo em um só nome, para importar um elemento específico depois, basta chamar com o nome + o elemento. Ex.: m_cursos.getCurso()

// console.log(m_cursos.cursos)
// console.log(m_cursos.getCurso(1))
// console.log(getTodosCursos())
// console.log(m_cursos.default())

// Aula 95

import c from "./cursos.js"

c.addCurso("React")
console.log(c.getTodosCursos())
console.log(c.getCurso(0))
c.removeCurso()
console.log(c.getCurso(0))