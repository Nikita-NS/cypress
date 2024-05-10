import * as main_page from "../locators/main_page.json";
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Позитивный кейс авторизации', function () {

    beforeEach('Начало теста', function () {
          cy.visit('/');
          cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
            });
 
    afterEach('Конец теста', function () {
          cy.get(result_page.close).should('be.visible');
         });

it('Верный пароль и верный логин', function () {
    cy.get(main_page.email).type(data.login);
    cy.get(main_page.password).type(data.password);
    cy.get(main_page.login_button).click();
    cy.get(result_page.title).should('be.visible');
    cy.get(result_page.title).contains('Авторизация прошла успешно');
})
})
