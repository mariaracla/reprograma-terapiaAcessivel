const psicologosJson = require('./psis.json')

const express = require("express")
const app = express()
const PORT = process.env.PORT || 8787

const cors = require("cors")

app.use(cors())
app.use(express.json())



app.get("/", (request, response) => {

    response.status(200).json({

        titulo: "Terapia Acessível",
        versão: "1.0.0",
        mensagem: "Essa API é o meu projeto final da Reprograma. Sobre terapia com valor social, foi criada pensando em pessoas que estão em migração de carreira, sofrendo com a ansiedade que esse desafio traz. Sabendo que o valor do mercado não é acessível para todo mundo, juntei uma série de psis que atendem com um valor mais em conta, de acordo com a sua realidade financeira. Deixo aqui o conselho de uma psicóloga (@desaguarpsicologia), CRP 1/20097: quando entendemos que o desconforto é inevitável e que ficar onde já não nos cabe também é doloroso, conseguimos encarar o medo de frente. o medo faz parte da jornada! você é capaz de fazer coisas difíceis. sustente o desconforto - que é inevitável - e siga sua maior bússola: seu coração!"

    })

})

app.get("/psicologos", (request, response)=>{

    response.status(200).json(psicologosJson)
    
    })


    app.get("/psicologos/buscar/:id", (request, response) => {

        const idRequest = request.params.id
        const psicologoEncontrado = psicologosJson.find(psicologo => psicologo.id == idRequest)
        response.status(200).json(psicologoEncontrado)
        
        })



app.get("/psicologos/filtro", (request, response)=>{


const modalidadeRequest = request.query.modalidade.toLowerCase()

const psicologoEncontrado = psicologosJson.filter(psicologo=>psicologo.Modalidade.toLowerCase().includes(modalidadeRequest))

response.status(200).send(psicologoEncontrado)

})

        app.post("/psicologos/cadastrar", (request,response)=>{
            const bodyRequest = request.body
        
            const novoPsicologo = {
                id: (psicologosJson.length)+1, 
                Modalidade: bodyRequest.Modalidade, 
                Valor: bodyRequest.Valor,
                Site: bodyRequest.Site,
                Público: bodyRequest.Público
            }
            psicologosJson.push(novoPsicologo)
            
            response.status(201).send({
                "mensagem": "Psicólogo cadastrado com sucesso!",
                novoPsicologo
            })
        })






        app.delete("/psicologos/deletar/:id",(request, response) => {
            const idRequest = request.params.id
            const psicologoEncontrado = psicologosJson.find(psicologo => psicologo.id == idRequest)
        
            
            const indice = psicologosJson.indexOf(psicologoEncontrado)
            console.log(indice)
        
           
            psicologosJson.splice(indice, 1)
        
            response.status(200).json([{
                "mensagem": "Psicologo deletado com sucesso",
                "psicologo-deletado": psicologoEncontrado,
                psicologosJson
            }])
        
        })

    

        app.put("/psicologos/substituir/:id", (request, response) => {
            
            const idRequest = request.params.id
         
            const bodyRequest = request.body
        
            const psicologoEncontrado = psicologosJson.find(psicologo => psicologo.id == idRequest)
        
            const indice = psicologosJson.indexOf(psicologoEncontrado)
        
            bodyRequest.id = idRequest
        
            
            psicologosJson.splice(indice, 1, bodyRequest)
        
            response.status(200).json([{
                "mensagem": "Cadastro do psicólogo atualizado com sucesso",
                "psicologo-atualizado": bodyRequest,
                psicologosJson
            }])
        })



        app.patch("/psicologos/updateValor/:id", (request, response)=>{
            const idRequest = request.params.id
            const novoValor = request.body.Valor
        
            const psicologoEncontrado = psicologosJson.find(psicologo => psicologo.id == idRequest)
        
            psicologoEncontrado.Valor = novoValor
        
            response.status(200).json([{
                "mensagem": "Valor atualizado com sucesso",
                "Valor-atualizado": psicologoEncontrado,
                psicologosJson
            }])
        
        })



app.listen(PORT, ()=>{

    console.log(`O servidor está rodando na porta ${PORT}`)
    
    })