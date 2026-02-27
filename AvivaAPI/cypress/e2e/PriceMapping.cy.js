describe('API Automation', () => {
    it('GET all employees test', () => {
      cy.request({
        method: 'GET',
        url: "https://qa-practice.herohuapp.com/api/v1/employees"
      }).as('getAllEmployeesRequest')
  
      cy.get('@getAllEmployeesRequest').then(response => {
        expect(response.status).to.eq(200)
      })
    })
  
    it('POST create employee test', () => {
      cy.request({
        method: 'POST',
        url: "https://qa-practice.herohuapp.com/api/v1/employees",
        header: '',
        body: {
            "policyHolder": {
                "licenceDetails": {
                    "numberOfPenaltyPoints": 0,
                    "yearsLicenceHeld": 5,
                    "licenceType": "FULL_IRISH"
                },
                "personalDetails": {
                    "dateOfBirth": "20/11/1980",
                    "occupationCode": "DBB"
                },
                "claimsDetails": {
                    "yearsNoClaims": 5,
                    "claimsInLastThreeYears": false,
                    "driverExperience": "InIreland"
                },
                "qualificationType": "N",
                "convictionLoadPct": null
            },
            "vehicleBeingInsured": {
                "registration": "12D151",
                "vehicleValue": 75000,
                "vehicleModificationCodes": [],
                "vehicleCoverStartDate": ""
            },
            "riskAddress": {
                "eircode": "K34Y583",
                "mraCode": null
            },
            "discountDetails": {
                "hasMulticarDiscount": false,
                "hasGoodThinkingDiscount": false
            },
            "contractDetails": {
                "coverStartDate": "27/08/2024",
                "rateDate": "27/08/2024",
                "inceptionDate": null
            },
            "sourceSystems": {
                "origin": "DOT-SYS-AGENT",
                "currentTransaction": "DOT-SYS-AGENT"
            },
            "additionalDrivers": [],
            "optionalExtras": {
                "optionalExtraCodes": [],
                "openDriving": false
            },
            "vehicle": {
                "engineCapacity": "2143",
                "taxClassCode": "PC",
                "taxClass": "PRIVATE",
                "firstRegisteredIreland": "03/01/2012",
                "firstRegistrationDate": "03/01/2012",
                "isIrelandReg": "Y",
                "seats": "5",
                "make": "MERCEDES BENZ",
                "style": null,
                "model": "E SERIES 200 CDI BLUE EFFICIENCY AVANTGARDE ECO 4DR A",
                "transmission": "Automatic",
                "lhdRhd": "R",
                "numberOfOwners": "3",
                "ownerCategory": "PRIVATE",
                "nctDue": "02/05/2024",
                "currentStatus": null,
                "currentStatusCode": "1",
                "taxExpires": "31/07/2023",
                "imported": "N",
                "lastSold": "25/10/2023",
                "insecomCode": "95050761",
                "abiCode": "32091302",
                "useAbi": false,
                "vehicleTechScore": "",
                "uniqueFeatureKey": "",
                "power": "200BHP",
                "wheelbase": "2874",
                "drive": "RWD",
                "bodyType": "SALOON",
                "fuelType": "DIESEL",
                "greyImportRisk": "",
                "estimatedKilometers": "299584",
                "estimatedMiles": "186192",
                "insurerAlert": "",
                "registration": null,
                "vehicleModelFound": false,
                "requiredVehicleDetailsPresent": false,
                "vehicleUpdatedByCartell": false
            },
            "classOfUse": 4,
            "transactionId": "3720484118",
            "quoteReference": "3720484118",
            "postQuoteDetails": {
                "ownVehicle": true,
                "privateVehicle": true,
                "permanentResident": true,
                "mainDriverThisVehicle": true,
                "mainDriverOtherVehicle": false,
                "convictions": false,
                "disqualifications": false,
                "refusedCover": false,
                "prevRestrictiveTermsApplied": false,
                "noClaimsOnOtherPolicy": false
            },
            "loadings": {
                "claimLoadPct": "0",
                "uwManualLoadingPct": "0",
                "discretionaryAmt": "0.00",
                "discretionaryPct": "0.00",
                "renewalCrfAmt": "0.0000"
            }
        }
      }).as('postPricingRequest')
  
      cy.get('@postPricingRequest').then(response => {
        expect(response.comprehensive.totalPremium.premium).to.eq({frontEndPrice})
        cy.log(JSON.stringify(response.body))
      })
    })
  })