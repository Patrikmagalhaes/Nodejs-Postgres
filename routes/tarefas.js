import express from 'express'
const router = express.Router()
import { listarTarefas, adicionarTarefas, listarTarefaPeloId, apagarTarefas, concluirTarefas } from '../controllers/tarefas.js'

router.get('/tarefas', listarTarefas)
router.post('/tarefas', adicionarTarefas)
router.get('/tarefas/:id', listarTarefaPeloId)
router.delete('/tarefas/:id', apagarTarefas)
router.patch('/tarefas/:id', concluirTarefas)

export { router }