
import app from '../server.js'
import request from 'supertest'


describe('Get em /series', () =>{
    it('Deve retornar uma lista de séries cadastradas', async () =>{
            await request(app)
            .get('/series')
            .expect(200)
    })
})

describe('Get em /series/{id}', () =>{
    it('Deve retornar a serie por id', async () =>{
        await request(app)
        .get('/series/2')
        .expect(200)
    })
    it('Deve mostrar uma mensagem de série não encontrada', async () =>{
        await request(app)
        .get('/series/100')
        .expect(404)
    })
})

describe('Post em /series', () =>{
    it('Deve adicionar uma nova serie', async () =>{
        await request(app)
        .post('/series')
        .send({
            id: "10",
            nome: "SerieTest",
            sobre: "very good",
            nota: "10"
        })
        .expect(201)
    })
    it('Não deve adicionar nada ao passar um body vazio', async () =>{
        await request(app)
        .post('/series')
        .send({})
        .expect(400)
    })
    
})

describe('Put em /series/id', () =>{
    it('Deve alterar o campo nome', async () =>{
        await request(app)
        .put('/series/10')
        .send({
            id: "10",
            nome: "SerieTest Atualizada",
            sobre: "very good",
            nota: "10"
        })
        .expect(204)
    })
})

describe('Delete em /series', () =>{
    it('Deve deletar a serie adicionada', async () =>{
        await request(app)
        .delete('/series/10')
        .expect(200)
    })

    it('Deve retornar uma mensagem de serie não encontrada', async () =>{
        await request(app)
        .delete('/series/100')
        .expect(404)
    })
})
