class Menu {
    irParaProdutos(){
        cy.contains('Product').click()
    }

    irParaLoginCadastro(){
        cy.contains('Signup').click()
    }
}

export default new Menu()