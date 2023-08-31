import {writeFileSync , readFileSync} from 'fs'
const dataPath = "./src/db/series.json"


class Serie {
    constructor (id, nome, sobre, nota){
        this.id = id
        this.nome = nome
        this.sobre = sobre
        this.nota = nota
    }

    static getSeries () {
        return JSON.parse(readFileSync (dataPath))
    }

    static getSerieId (id){
        const series = this.getSeries()
        return series.find(serie => serie.id === id)
    }

    static postSerie (novaSerie){
        const series = this.getSeries()
        series.push(novaSerie)
        writeFileSync(dataPath, JSON.stringify(series, null, 2))
    }

    static putSerie (id, item) {
        const series = this.getSeries()
        const serie = series.find(serie => serie.id === id)
        if (serie){
            Object.assign(serie, item)
            writeFileSync(dataPath, JSON.stringify(series, null, 2))
            return true
        }
        return false
    }

    static deleteSerie (id){
        const series = this.getSeries()
        const index = series.findIndex(serie => serie.id === id )
        if (index !== -1){
            series.splice(index, 1)
            writeFileSync(dataPath, JSON.stringify(series, null, 2))
            return true
        }
        return false
    }
}

export default Serie