// const fs = require("fs")

// function getTodasSeries (){
//     return JSON.parse(fs.readFileSync (process.cwd() + "/src/db/series.json"))
// }

// function getSerieNome(nome){
//     const series = JSON.parse(fs.readFileSync (process.cwd() + "/src/db/series.json"))

//     const serieFiltrada = series.filter( serie => serie.nome === nome)[0]
//     return serieFiltrada

// }

// function insereSerie(serieNova){
//     const series = JSON.parse(fs.readFileSync (process.cwd() + "/src/db/series.json"))

//     const novaListaDeSeries = [ ...series, serieNova]

//     fs.writeFileSync(process.cwd() + "/src/db/series.json", JSON.stringify(novaListaDeSeries))

// }

// function editaSerie (edicao, nome){   
//     let seriesAtuais = JSON.parse(fs.readFileSync (process.cwd() + "/src/db/series.json"))
//     const indiceModificado = seriesAtuais.findIndex( serie => serie.nome === nome)

//     const conteudoNovo = { ...seriesAtuais[indiceModificado], ...edicao}

//     seriesAtuais[indiceModificado] = conteudoNovo

//     fs.writeFileSync(process.cwd() + "/src/db/series.json", JSON.stringify(seriesAtuais))
 
// }

// function deletaSerie (nome){
//     const series = JSON.parse(fs.readFileSync (process.cwd() + "/src/db/series.json"))
//     const seriesFiltradas = series.filter( serie => serie.nome != nome)

//     fs.writeFileSync(process.cwd() + "/src/db/series.json", JSON.stringify(seriesFiltradas))
// }

// module.exports = {
//     getTodasSeries,
//     getSerieNome,
//     insereSerie,
//     editaSerie,
//     deletaSerie
// }