import Serie from '../models/serie.js'

async function todasSeries (req, res){
    const series = Serie.getSeries()
    res.json(series)
}

async function seriePorId (req, res) {
    const {id} = req.params
    const serie = Serie.getSerieId(id)
    if (serie) {
        res.json(serie)
    } else {
        res.status(404).json({message: 'Série não encontrada'})
    }
}

async function insereSerie (req, res){
    const {id, nome, sobre, nota} = req.body
    if (!id || !nome || !sobre) {
        return res.status(400).json({error: 'Os campos "id", "nome" e "sobre" são obrigatórios'})
    } 
    const novaSerie = new Serie(id, nome, sobre, nota)
    Serie.postSerie(novaSerie)
    res.status(201).json(novaSerie)
}

async function atualizaSerie (req, res){
    const {id} = req.params
    const {nome, sobre, nota} = req.body
    if (!nome || !sobre){
        return res.status(400).json({error: 'Os campos "nome" e "sobre" são obrigatórios'})
    }
    const atualizacao = Serie.putSerie(id, {nome, sobre})
    if (atualizacao) {
        res.status(204).json({ message: 'Serie atualizada com sucesso'})
    } else {
        res.status(404).json({ message: 'Serie não encontrada'})
    }
}

async function deletaSerie (req, res){
    const {id} = req.params
    const deletada = Serie.deleteSerie(id)
    if (deletada) {
        res.json({message: 'Serie deletada com sucesso'})
    } else {
        res.status(404).json({message: 'Serie não encontrada'})
    }
}

export {
    todasSeries,
    seriePorId,
    insereSerie,
    atualizaSerie, 
    deletaSerie
}
