import tarefas from '../models/tarefas.js'
import database from '../database.js'

//realizando operação de SELECT

const listarTarefas = (req, res) => {
   database.query("SELECT * FROM nome").then(
    (resultado) => {
        res.status(200).send({nome: resultado.rows})
    },
    (erro)=>{
        res.status(500).send({erro: erro})
        
    }
   )
}

const adicionarTarefas = (req, res) => {
    const { nome } = req.body
    if (!nome) return res.status(404).send({ mensagem: 'Dados incompletos' })
    const maiorId = tarefas.reduce((maior, atual) => atual.id > maior ? atual.id : maior, 0)
    const novaTarefa = {
        id: maiorId + 1, nome, completa: false
    }
    tarefas.push(novaTarefa)
    return res.status(201).send({ mensagem: 'Tarefa cadastrada', tarefa: novaTarefa })
}

const listarTarefaPeloId = (req, res) => {
    let { id } = req.params
    if (!id) return res.status(404).send({ mensagem: 'Dados incompletos' })
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    if(!tarefa) return res.status(404).send({ mensagem: 'Tarefa não localizada' })
    return res.status(200).send({ tarefa })
}

const apagarTarefas = (req, res) => {
    let { id } = req.params
    if (!id) return res.status(404).send({ mensagem: 'Dados incompletos' })
    const indiceParaExcluir = tarefas.findIndex(tarefa => tarefa.id == id)
    if (indiceParaExcluir == -1) return res.status(404).send({ mensagem: 'Tarefa não localizada' })
    tarefas.splice(indiceParaExcluir, 1)
    return res.status(200).send({ mensagem: 'Tarefa excluida com sucesso' })
}

const concluirTarefas = (req, res) => {
    let { id } = req.params
    if (!id) return res.status(404).send({ mensagem: 'Dados incompletos' })
    const indiceParaAtualizar = tarefas.findIndex(tarefa => tarefa.id == id)
    if (indiceParaAtualizar == -1) return res.status(404).send({ mensagem: 'Tarefa não localizada' })
    tarefas[indiceParaAtualizar].completa = true
    return res.status(200).send({ mensagem: 'Tarefa concluída com sucesso' })
}

export { listarTarefas, adicionarTarefas, listarTarefaPeloId, apagarTarefas, concluirTarefas } 