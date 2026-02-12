import { Servers } from "../AvivaPOM/Servers"
import { BOActions } from "../AvivaPOM/BOActions"
import { PortalActions } from "../AvivaPOM/PortalActions"
import { Login } from "../AvivaPOM/Login"

// Uncaught exception errors are bypassed when found to stop test from failing
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

/// <reference types= "Cypress"/>

const Server = new Servers()
const BOAction = new BOActions()
const PortalAction = new PortalActions()
const Logins = new Login()

describe('Customer can upload a document', () => {
    it('should upload a document successfully', () => {
        Server.Server1()

        BOAction.cookiesAccept()
        cy.getAndWait('[class^="a-heading a-heading--1 u-margin--top-none"]').contains('Log in to MyAviva').and('be.visible')

        cy.portalLogin()

        PortalAction.portalManagePolicyWithTravelMultiFamilyWith2AddOnsPolicyNumber()
        cy.getAndWait('#Main_btnUploadDocuments').click()
        cy.getAndWait('#Main_ddlDocumentUpload').select(1)
        cy.getAndWait('.a-file-upload__label').click()
        cy.get('input[type="file"]').selectFile("C:/Aviva/AvivaCypress/cypress/support/Example.jpg", {force:true})
        cy.getAndWait('#Main_btnUpload').click()
        cy.getAndWait('#Main_divSuccessMessage > .l-columns > .l-columns__column > .m-card > .m-card-content > .m-heading-group__item').contains('Upload successful')
    })
})



  


