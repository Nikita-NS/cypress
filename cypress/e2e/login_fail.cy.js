import * as main_page from "../locators/main_page.json";
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Проверка логики восстановления пароля', function () {

    beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    afterEach('Конец теста', function () {
          cy.get(result_page.close).should('be.visible');
         });

         it('Восстановление пароля', function () {
            cy.get('#forgotEmailButton').click();
            cy.get('#mailForgot').type('german@dolnikov.ru');
            cy.get('#restoreEmailButton').click();
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        })
})
