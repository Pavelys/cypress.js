describe('end-2-end покупка Аватара', function () {

    it('end-2-end покупка Аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('Fase2123@yandex.ru');
         cy.get('#password').type('Paha556556');
         cy.get('.auth__button').click();
         cy.wait(2000)
         cy.get('.header__btn_active').should('be.visible');
         cy.get('.header__id-text_type_profile').contains('13160');
         cy.get('.header__id-text_type_profile').should('be.visible');
         cy.get('.header__container > .header__id').click();
         cy.wait(2000)
         cy.get('[href="/shop"]').click();
         cy.wait(2000);
         cy.get('.available > button').first().click({ force: true });
         cy.wait(2000);
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
         cy.get('.pay-btn').click();
         cy.wait(1000);
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.wait(1000);
         cy.contains('Покупка прошла успешно').should('be.visible');
  
        })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 