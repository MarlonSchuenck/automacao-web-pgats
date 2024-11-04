class Cadastro {
    preencherFormulario(){
        const timestamp = new Date().getTime()
        const signUpName = 'Tester QA'

        Cypress.env('signUpName', signUpName)

        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`teste-${timestamp}@email.com`)
        cy.contains('button', 'Signup').click()

        // radio ou checkoxes -> check
        // cy.get('#id_gender2').check() // Alternativa 1
        cy.get('input[type=radio]').check('Mrs') // Alternativa 2
        // cy.get('input[type=radio]').first().check() // Alternativa 3
        // cy.get('input[type=radio]').last().check() // Alternativa 4
        // cy.get('input[type=radio]').eq(1).check() // Alternativa 5 passando a posição

        cy.get('[type=password]').type('12345', {log: false})

        cy.get('[data-qa="days"]').select('14')
        cy.get('[data-qa="months"]').select('June')
        cy.get('[data-qa="years"]').select('1987')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('João')
        cy.get('[data-qa="last_name"]').type('Neves')
        cy.get('[data-qa="company"]').type('Empresa 01')
        cy.get('[data-qa="address"]').type('meu endereço')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('meu estado')
        cy.get('[data-qa="city"]').type('mminha cidade')
        cy.get('[data-qa="zipcode"]').type('2861000')
        cy.get('[data-qa="mobile_number"]').type('22995959299')

        cy.contains('Create Account').click()

        cy.url().should('includes', 'account_created')
        // https://automationexercise.com/account_created

        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()

        return this
    }

    iniciarCadastro(){
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`tester-1721346302730@mail.com`)
        cy.contains('button', 'Signup').click()

        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))

        return this
    }
}

export default new Cadastro()