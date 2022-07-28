const psicologosJson = require('./psis.json')

const express = require("express")
const app = express()
const PORT = 8787

const cors = require("cors")

app.use(cors())
app.use(express.json())



app.get("/psicologos", (request, response)=>{

    response.status(200).json(psicologosJson)
    
    })


    app.get("/psicologos/buscar/:id", (request, response) => {

        let idRequest = request.params.id
        let psicologoEncontrado = psicologosJson.find(psicologo => psicologo.id == idRequest)
        response.status(200).json(psicologoEncontrado)
        
        })



app.get("/psicologos/filtro", (request, response)=>{


const modalidadeRequest = request.query.modalidade.toLowerCase()

const psicologoEncontrado = psicologosJson.filter(psicologo=>psicologo.Modalidade.toLowerCase().includes(modalidadeRequest))

response.status(200).send(psicologoEncontrado)

})

        app.post("/psicologos/cadastrar", (request,response)=>{
            let bodyRequest = request.body
        
            let novoPsicologo = {
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
        
            //deleta o filme existente e substitui
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
                "filme-atualizado": psicologoEncontrado,
                psicologosJson
            }])
        
        })



app.listen(PORT, ()=>{

    console.log(`O servidor está rodando na porta ${PORT}`)
    
    })