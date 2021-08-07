//Testing Login Siakad Polinema

//User Story
describe("User Melakukan Login Pada Website Siakad Polinema", () => {

    //Test Case 1
    it("Login menggunakan password dan username yang salah", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('prawestids');
        cy.get('#password').type('prawestids');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    //Test Case 2
    it("User memasukkan password salah username benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710022');
        cy.get('#password').type('prawestids');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    //Test Case 3
    it("User memasukkan username salah dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('prawestids');
        cy.get('#password').type('katasandi123');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah');
    });

    //Test Case 4
    it("User tidak memasukkan username dan password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });

    //Test Case 5
    it("User memasukkan username dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710022');
        cy.get('#password').type('katasandi123');
        cy.get('#form_login > div.form-actions > button').click()
    });

    //Test Case 6
    it("User memasukkan username dan mengosongi password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1831710022');
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi');
    });

    //Test Case 7
    it("User memasukkan password dan mengosongi username", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').type('prawestids');
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi');
    });
});