export class Servers{

    constructor() {
        this.server = Cypress.env('server') || 'QA2' // Default to QA2 if no server is provided
        this.homeUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            QA2: 'https://qa2aviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            QA3: 'https://qa3aviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            DEMO: 'https://testaviva3.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST4E2E: 'https://testaviva4e2e.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote',
            GCCPRE: 'https://gcc-pre.aviva.ie/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote'
        }

        this.motorUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            QA2: 'https://qa2aviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            QA3: 'https://qa3aviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            DEMO: 'https://testaviva3.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST4E2E: 'https://testaviva4e2e.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote',
            GCCPRE: 'https://gcc-pre.aviva.ie/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote'
        }

        this.tokenUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            QA2: 'https://qa2aviva.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            QA3: 'https://qa3aviva.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            DEMO: 'https://testaviva3.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token',
            GCCPRE: 'https://gcc-pre.aviva.ie/publicwebservices/AggregatorAPI/api/Secure/token'
        }

        this.gatewayTokenUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            QA2: 'https://qa2aviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            QA3: 'https://qa3aviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            DEMO: 'https://testaviva3.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken',
            GCCPRE: 'https://gcc-pre.aviva.ie/PublicWebServices/DataGateway/DataGateway/Token/GetToken'
        }

        this.gatewayUrls = {
            QA: 'https://qaaviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            QA2: 'https://qa2aviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            QA3: 'https://qa3aviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST2LOADED: 'https://testaviva2loaded.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            DEMO: 'https://testaviva3.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST3FAT: 'https://testaviva3fat.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST4E2E: 'https://insurance-testaviva4e2e.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST5PRICING: 'https://testaviva5pricing.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST6TRAINING: 'https://testaviva6training.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST7HOTFIX: 'https://testaviva7hotfix.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST8CRMIGRATION: 'https://testaviva8crmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST9FATMIGRATION: 'https://testaviva9fatmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            TEST10PRODMIGRATION: 'https://testaviva10prodmigration.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch',
            GCCPRE: 'https://gcc-pre.aviva.ie/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch'
        }
    }

    home() {
        return this.homeUrls[this.server] || this.homeUrls['QA2'] 
    }

    motor() {
        return this.motorUrls[this.server] || this.motorUrls['QA2']  
    }

    token() {
        return this.tokenUrls[this.server] || this.tokenUrls['QA2']   
    }

    gatewayToken() {
        return this.gatewayTokenUrls[this.server] || this.gatewayTokenUrls['QA2']
    }

    gateway() {
        return this.gatewayUrls[this.server] || this.gatewayUrls['QA2']
    }

}

module.exports = new Servers()