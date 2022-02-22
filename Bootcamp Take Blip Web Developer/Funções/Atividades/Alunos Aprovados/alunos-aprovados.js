const alunos = [{nome: "Alice", nota: 6}, {nome: "Bruno", nota: 7}, {nome: "Carla", nota: 9}, {nome: "Daniel", nota: 2}];

function alunosAprovados(arr, media) {
    let aprovados = [];
    
    for (aluno of arr) {
        const {nota, nome} = aluno;
        if (media <= nota/*aluno.nota*/) {
            aprovados.push(nome/*aluno.nome*/);
        }
    }
    return aprovados;
}


console.log(alunosAprovados(alunos, 7));