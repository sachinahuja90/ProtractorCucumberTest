Feature: Test Manager Account

    @manager @addCustomer
    Scenario Outline: Add New Customers
        Given User is on the Home page of the application
        When A manager gets logged in & add a Customer with "FirstName" "LastName" "ZipCode"
        Then Customer must get added in Customer List
        Examples:
            | FirstName | LastName | ZipCode |
            | Rahul     | Kant     | E1234   |
            | Ravneet   | Kaul     | 121234  |


    @manager @openAccount
    Scenario Outline: Open New Account
        Given User is on the Home page of the application
        When A manager gets logged in & add a Customer with  "CustomerName" "Currency"
        Then Account must get added in Customer List
        Examples:
            | CustomerName | Currency |
            | Rahul Kant   | Pound    |
            | Ravneet Kaul | Dollar   |
