Feature: Test Manager Account

    @manager @addCustomer
    Scenario Outline: Add New Customers
        Given User is on the Home page of the application
        When A manager gets logged in
        And Add a Customer with '<FirstName>', '<LastName>', '<PostalCode>'
        Then Customer ['<FirstName>' '<LastName>'] must get added in Customer List
        Examples:
            | FirstName | LastName | PostalCode |
            | Rahul     | Kant     | E1234      |
            | Ravneet   | Kaul     | 121234     |


    @manager @openAccount
    Scenario Outline: Open New Account
        Given User is on the Home page of the application
        When A manager gets logged in
        And Open account for a Customer with name as  "<CustomerName>" and Currency type as "<Currency>"
        Then Account must get added in Customer List with name as "<CustomerName>"
        Examples:
            | CustomerName | Currency |
            | Rahul Kant   | Pound    |
            | Ravneet Kaul | Dollar   |
