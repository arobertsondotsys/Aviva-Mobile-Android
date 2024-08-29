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
      body: {
        "dob": "2011-01-01",
        "email": "refeal@gmail.com",
        "firstName": "Andy",
        "id": 155555,
        "lastName": "Test"
      }
    }).as('postEmployeesRequest')

    cy.get('@postEmployeesRequest').then(response => {
      expect(response.status).to.eq(201)
      cy.log(JSON.stringify(response.body))
    })
  })
})