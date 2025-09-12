///<reference types='cypress'/>

//funcionalidade
describe('Buscar dispositivos', () => {
// cenario de testes 
it('Buscar dispositivos', () => {
    cy.request({
        method:"GET",
        url:'https://api.restful-api.dev/objects'

        })  
        .then((response) => {
            expect(response.status).to.equal(200)


        })    
       
    })
    
           
    it.only('Buscar dispositivos posição 12', () => {
        cy.request({
            method:"GET",
            url:'https://api.restful-api.dev/objects/12'
    
            })  
            .then((response) => {
                expect(response.status).to.equal(200)
    
    
            })    
           
        })      
        it.only('Buscar dispositivos inexistente', () => {
            cy.request({
                method:"GET",
                url:'https://api.restful-api.dev/objects/125678',
                failOnStatusCode:false
        
                })  
                .then((response) => {
                    expect(response.status).to.equal(404)
                    expect(response.body.error).to.equal("Oject with id=125678 was not found.")
        
        
                })    
               
            })   
            it.only('Cadastrar usuário',() => {
                cy.request({
                    method:"POST",
                    url:'https://api.restful-api.dev/objects',
                    //failOnStatusCode:false
                    body:{

                        "name": "Atestando a qualidade 2024/2025",
                        "data": {
                            "year": 2024,
                            "price": 3849.99,
                            "CPU model": "Intel Core i19",
                            "Hard disk size": "1 TB"
                        }
                    }
            
                    })  
                    .then((response) => {
                        expect(response.status).to.equal(200)
                        expect(response.body.name).to.equal('Atestando a qualidade 2024/2025')


                    })

            })
            

})
