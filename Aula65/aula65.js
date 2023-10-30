const pessoa={
    nome:"Rogério",
    idade:21,
    cursando:"Programação",
    genero:"Masculino",
    hobbies:{
        hobbie01:"Jogar",
        hobbie02:"Assistir",
        hobbie03:"Ler"
    }
}

const string_pessoa='{"nome":"Rogério","idade":21,"cursando":"Programação","genero":"Masculino","hobbies":{"hobbie01":"Jogar","hobbie02":"Assistir","hobbie03":"Ler"}}'

const s_json_pessoa=JSON.stringify(pessoa) // converte objeto em string JSOn
const o_json_pessoa=JSON.parse(string_pessoa) // converte um JSON em objeto
console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)