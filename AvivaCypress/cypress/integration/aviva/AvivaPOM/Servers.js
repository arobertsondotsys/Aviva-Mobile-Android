export class Servers{

    constructor() {
        this.serverKey = Cypress.env('serverKey') || 'QA2' // Default to QA2 if no serverKey is provided
        this.serverUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/BackOffice/Login.aspx?',
            QA2: 'https://qa2aviva.dotsys.co.uk/BackOffice/Login.aspx?',
            QA3: 'https://qa3aviva.dotsys.co.uk/BackOffice/Login.aspx?',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/backoffice/Login.aspx',
            DEMO: 'https://testaviva3.dotsys.co.uk/backoffice/Login.aspx?',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/backoffice/Login.aspx?',
            TEST4E2E: 'https://testaviva4e2e.dotsys.co.uk/backoffice/Login.aspx?',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/backoffice/Login.aspx?',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/backoffice/Login.aspx?',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/backoffice/Login.aspx?',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/backoffice/Login.aspx?',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/backoffice/Login.aspx?',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/backoffice/Login.aspx?',
            GCCPRE: 'https://gcc-pre.aviva.ie/backoffice/Default.aspx'
        }

        this.server1Urls = {
            QA: 'https://qainsurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            QA2: 'https://qa2insurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            QA3: 'https://qa3insurance-aviva.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST2LOADED: 'https://insurance-testaviva2loaded.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            DEMO: 'https://insurance-testaviva3.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST3FAT: 'https://insurance-testaviva3fat.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST5PRICING: 'https://insurance-testaviva5pricing.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST6TRAINING: 'https://insurance-testaviva6training.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST7HOTFIX: 'https://insurance-testaviva7hotfix.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST8CRMIGRATION: 'https://insurance-testaviva8crmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST9FATMIGRATION: 'https://insurance-testaviva9fatmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            TEST10PRODMIGRATION: 'https://insurance-testaviva10prodmigration.dotsys.co.uk/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy',
            GCCPRE: 'https://insurance-pre.aviva.ie/myaviva/login.aspx?enc=NUic3N57azQgnbRz7sSkmPFhx9xImevrRZEzdbut0G3NmTIoa2l9m5bTXKZMS7Jy'
        }

        this.server2Urls = {
            QA: 'https://qainsurance-aviva.dotsys.co.uk/testdemolinks.html#',
            QA2: 'https://qa2insurance-aviva.dotsys.co.uk/testdemolinks.html#',
            QA3: 'https://qa3insurance-aviva.dotsys.co.uk/testdemolinks.html#',
            TEST2LOADED: 'http://insurance-testaviva2loaded.dotsys.co.uk/testdemolinks.html',
            DEMO: 'https://insurance-testaviva3.dotsys.co.uk/testdemolinks.html',
            TEST3FAT: 'https://insurance-testaviva3fat.dotsys.co.uk/testdemolinks.html',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/testdemolinks.html',
            TEST5PRICING: 'https://insurance-testaviva5pricing.dotsys.co.uk/testdemolinks.html',
            TEST6TRAINING: 'https://insurance-testaviva6training.dotsys.co.uk/testdemolinks.html',
            TEST7HOTFIX: 'https://insurance-testaviva7hotfix.dotsys.co.uk/testdemolinks.html',
            TEST8CRMIGRATION: 'https://insurance-testaviva8crmigration.dotsys.co.uk/testdemolinks.html',
            TEST9FATMIGRATION: 'https://insurance-testaviva9fatmigration.dotsys.co.uk/testdemolinks.html',
            TEST10PRODMIGRATION: 'https://insurance-testaviva10PRODmigration.dotsys.co.uk/testdemolinks.html',
            GCCPRE: 'https://insurance-pre.aviva.ie/testdemolinks.html'
        }
    }

    Server() {
        const url = this.serverUrls[this.serverKey] || this.serverUrls['QA2'] // Default to QA2 if no valid serverKey is provided
        cy.visit(url)
    }

    Server1() {
        const url = this.server1Urls[this.serverKey] || this.server1Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        cy.visit(url)
    }

    Server2() {
        const url = this.server2Urls[this.serverKey] || this.server2Urls['QA2'] // Default to QA2 if no valid serverKey is provided
        cy.visit(url)
    }





}