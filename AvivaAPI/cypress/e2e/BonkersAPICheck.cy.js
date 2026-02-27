  
describe('API Automation', () => {
 const TOKEN_URL = 'https://qaaviva.dotsys.co.uk/publicwebservices/AggregatorAPI/api/Secure/token'
 const DATAGATEWAY_TOKEN_URL = 'https://qa2aviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/Token/GetToken'
  
  const HOME_URL = 'https://qaaviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetHomeQuote'
  const MOTOR_URL = 'https://qa2aviva.dotsys.co.uk/PublicWebServices/AggregatorAPI/api/Secure/v1/Bonkers/GetQuote'
  const GATEWAY_URL = 'https://qaaviva.dotsys.co.uk/PublicWebServices/DataGateway/DataGateway/CustomerData/CustomerSearch'
  
 
  it('Obtain OAuth token then call Home endpoint', () => {
    
    cy.request({
      method: 'POST',
      url: TOKEN_URL,
      headers: { 'Content-Type': 'application/json' },
      body: {
        "access_token": "",
        "Audience": "BonkersAPI",
        "authorisation_code": "",
        "client_id": "oath2-bonkers-2024-v1",
        "client_secret": "7EDEEBCE-2E4C-4CFB-91D4-FCFB8FA376B4",
        "grant_type": "client_credentials",
        "refresh_token": "",
        "user_id": "Bonkers"
      },
      failOnStatusCode: false
    }).as('tokenRequest')
 
    cy.get('@tokenRequest').then(tokenResp => {
      expect(tokenResp.status).to.be.oneOf([200,201])
      // Expect an access_token in the response body
      const accessToken = tokenResp.body && (tokenResp.body.access_token || tokenResp.body.token)
      expect(accessToken, 'access token present').to.be.a('string')
 
      // Use the token to call the protected Home endpoint
      cy.request({
        method: 'POST',
        url: HOME_URL,
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json'  },
        body: {
          "AggregatorReference": "Bonkers",
          "PartnerTransactionID": "7fa92a20-664c-4116-97e3-acd13cd2f68a",
          "PolicyDetails": {
            "EffectiveDate": "2026-03-01T00:00:00",
            "ExcessSelected": 1000,
            "PostalAddressDetails": {
              "Address1": "43 PRIMROSE GARDENS",
              "Address2": "CLARECASTLE",
              "Address3": "ENNIS",
              "County": "Co. Clare",
              "Eircode": "V95F8Y9"
            },
            "Proposer": {
              "Title": "Mr",
              "FullName": "Denis Carty",
              "Email": "dencarty@gmail.com",
              "DateOfBirth": "10/05/1971",
              "TelephoneNumber": "0879550834",
              "EmploymentStatus": "E",
              "Occupation": "AAM"
            },
            "JointProposer": {
              "Title": "Ms",
              "FullName": "Colette O'Looney",
              "DateOfBirth": "06/07/1980",
              "RelationshipToProposer": "partner_spouse"
            }
          },
          "CoverDetails": {
            "BuildingsSI": 580000,
            "ContentsSI": 120000
          },
          "InsuranceHistory": {
            "YearsNoClaims": "year_6",
            "IsClaims": false,
            "Claims": [],
            "IsConviction": false,
            "IsRefusal": false,
            "IsSpecialTerms": false,
            "HasInsuranceCancelled": false,
            "HouseHoldHasPolicy": "331627410"
          },
          "PropertyDetails": {
            "RiskAddressDetails": {
              "Address1": "43 PRIMROSE GARDENS",
              "Address2": "CLARECASTLE",
              "Address3": "ENNIS",
              "County": "Co. Clare",
              "Eircode": "V95F8Y9"
            },
            "YearBuilt": 1998,
            "OccupancyStatus": "main_home",
            "TypeOfProperty": "dormer",
            "IsRentalAgreement": false,
            "IsLetOneUnit": false,
            "IsLetThirdParty": false,
            "IsLetAirBnb": false,
            "PropertyUse": "no_business_use",
            "NumberOfBedrooms": 5,
            "NumBathrooms": 2,
            "MainHeatType": "air_to_water",
            "IsProtectedBuilding": false,
            "IsStandardBuildingMaterials": true,
            "PercentNonStandardConstruction": "0",
            "IsFlatRoof": true,
            "PercentageOfRoofFlat": "less_20",
            "AlarmType": "no_alarm",
            "IsSmokeAlarm": true,
            "IsSecurityLocks": true,
            "IsGoodRepair": true,
            "IsFloodDamage": false
          },
          "OptionalExtras": {
            "IsAccidentalDamage": true,
            "UnSpecifiedItemsAmount": 7500,
            "SpecifiedItems": [
              {
                "Description": "Diamond ring",
                "Type": "jewellery",
                "Value": 9500
              },
              {
                "Description": "Wedding ring",
                "Type": "jewellery",
                "Value": 2000
              }
            ]
          },
          "IsQuoteRecall": false
        },
        failOnStatusCode: false
        }).then(homeResp => {
        cy.log('Home full response: ' + JSON.stringify(homeResp))
        // Optionally, assert status if you want to fail the test on error
        expect(homeResp.status).to.eq(200)
        })
    })
  })

  it('Obtain OAuth token then call Motor endpoint', () => {
    // Request an OAuth token using client_credentials (JSON body as provided)
    cy.request({
      method: 'POST',
      url: TOKEN_URL,
      headers: { 'Content-Type': 'application/json' },
      body: {
        "access_token": "",
        "Audience": "BonkersAPI",
        "authorisation_code": "",
        "client_id": "oath2-bonkers-2024-v1",
        "client_secret": "7EDEEBCE-2E4C-4CFB-91D4-FCFB8FA376B4",
        "grant_type": "client_credentials",
        "refresh_token": "",
        "user_id": "Bonkers"
      },
      failOnStatusCode: false
    }).as('tokenRequest')
 
    cy.get('@tokenRequest').then(tokenResp => {
      expect(tokenResp.status).to.be.oneOf([200,201])
      // Expect an access_token in the response body
      const accessToken = tokenResp.body && (tokenResp.body.access_token || tokenResp.body.token)
      expect(accessToken, 'access token present').to.be.a('string')
 
      // Use the token to call the protected Motor endpoint
      cy.request({
        method: 'POST',
        url: MOTOR_URL,
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json'  },
        body: {
          "AggregatorReference": "Bonkers",
          "PartnerTransactionID": "f0bb31d7-99fc-4309-86af-5348cb02aee0",
          "PolicyHolder": {
            "PersonalDetails": {
              "Title": "Mr",
              "FullName": "Andy Ruadhan",
              "Email": "automatedtesting@dotsys.co.uk",
              "DateOfBirth": "20/11/1980",
              "TelephoneNumber": "0872223335"
            },
            "LicenceDetails": {
              "CountryLicenceObtained": "GB",
              "DriverNumber": "12345555555",
              "LicenceYears": 10,
              "LicenceType": "UK Full",
              "DrivingCourse": null
            },
            "OccupationDetails": {
              "EmploymentStatus": "E",
              "Occupation": "SBM"
            },
            "InsuranceDetails": {
              "YearsNoClaims": "10",
              "NamedDrivingExperience": false,
              "YearsNamedDriver": 0
            },
            "Claims": [],
            "Convictions": []
          },
          "AddressDetails": {
            "Address1": "Apartment 16",
            "Address2": "Northlands",
            "Address3": "Rathmichael Park",
            "County": "Dublin 18",
            "eircode": "D18YH57"
          },
          "VehicleDetails": {
            "CurrentValue": 15500,
            "IsLeftHandDrive": false,
            "IsTaxedPrivately": true,
            "IsTrackingDevice": false,
            "VehicleYear": 2012,
            "VehicleModificationCodes": [],
            "PurchaseDate": "25/10/2023",
            "IsNCT": false,
            "IsRegOutsideROIorUK": false,
            "IsRoadworthy": true,
            "ParkedOvernight": true,
            "Registration": "12D151"
          },
          "AdditionalDrivers": [],
          "PolicyDetails": {
            "EffectiveDate": "01/03/2026 17:00:00",
            "CurrentExpiryDate": "01/12/2025",
            "AnnualMilage": 11000,
            "ExcessSelected": 300,
            "VehicleUsage": "Commuting"
          },
          "OptionalExtras": {
            "IsBreakdownCover": false,
            "IsProtectedNoClaims": false
          },
          "IsMarketingAllowed": false,
          "MultiCarDetails": {
            "IsOtherPolicy": false,
            "ExistingPolicyNumber": null
          },
          "OtherHomePolicyDetails": {
            "IsOtherPolicy": false,
            "ExistingPolicyNumber": null
          }
        },
        failOnStatusCode: false
      }).then(motorResp => {
        cy.log('Motor full response: ' + JSON.stringify(motorResp))
        // Optionally, assert status if you want to fail the test on error
        expect(motorResp.status).to.eq(200)
      })
    })
  })

  

it('Obtain OAuth token then call Gateway endpoint', () => {
cy.request({
    method: 'POST',
    url: DATAGATEWAY_TOKEN_URL,
    headers: { 'Content-Type': 'application/json' },
    body: {
      "grant_type": "client_credentials",
      "client_id": "oath-respond-2025-v1",
      "user_id": "string",
      "client_secret": "8faa9e43-5473-4382-b0ee-c056e0e15ced",
      "audience": "DataGatewayAPI",
      "refresh_token": "string",
      "access_token": "string",
      "authorisation_code": "string"
      },
    failOnStatusCode: false
  }).as('tokenRequest')

  cy.get('@tokenRequest').then(tokenResp => {
    expect(tokenResp.status).to.be.oneOf([200, 201])
    const accessToken = tokenResp.body && (tokenResp.body.access_token || tokenResp.body.token)
    expect(accessToken, 'access token present').to.be.a('string')

    cy.request({
      method: 'POST',
      url: GATEWAY_URL,
      headers: {'Authorization': `Bearer ${accessToken}`,'Content-Type': 'application/json'   },
      body: {
        "policyNumber": "932519117",
        "email": "",
        "firstName": "",
        "surname": "",
        "dateOfBirth": null,
        "product": ""
    },
    failOnStatusCode: false
    }).then(customerResp => {
      cy.log(`CustomerSearch status: ${customerResp.status}`)
      cy.log(`CustomerSearch body: ${JSON.stringify(customerResp.body)}`)
      // Optional assertions:
      expect(customerResp.status).to.eq(200);
    })
  })
})

  
})