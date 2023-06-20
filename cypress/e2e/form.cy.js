describe("Onboarding App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')

    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.equal(8)
    })
    
    it('the elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosInput().should('exist')
        
    cy.contains('Join the club!').should('exist')
    })

    describe("fields can be filled out and submitted", () => {
        it("inputs can be typed", () => {
            nameInput()
                .should("have.value", "")
                .type("Zach")
                .should("have.value", "Zach")
            emailInput()
                .should("have.value", "")
                .type('abc@d.com')
                .should('have.value', "abc@d.com")
            passwordInput()
                .should("have.value", "")
                .type("password")
                .should("have.value", "password")
            tosInput()
                .check()
        })
        it("fills out the form and submits", () => {
            nameInput()
            .should("have.value", "")
            .type("Zach")
            .should("have.value", "Zach")
        emailInput()
            .should("have.value", "")
            .type('abc@d.com')
            .should('have.value', "abc@d.com")
        passwordInput()
            .should("have.value", "")
            .type("password")
            .should("have.value", "password")
        tosInput()
            .check()
        cy.contains("Join the club!").click()
        })
    })

    
















})