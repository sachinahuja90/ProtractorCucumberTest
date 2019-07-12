Feature: Customer Account Automation

    Scenario: Customer Login Validation
        Given User is on the Home page of the application
        When User select his name 'Rahul Kant' and Click Login Button
        Then User name 'Rahul Kant' should be visible on the screen



    Scenario Outline: Customer Deposit with valid input
        Given User is on the Home page of the application
        When A customer gets logged in as 'Rahul Kant'
        And Deposit <amount> in his Account
        Then User should get message as 'Deposit Successful'
        Examples:
            | amount |
            | 230    |
            | 321    |



    Scenario Outline: Customer Withdrawl when amount is less than equal to balance
        Given User is on the Home page of the application
        When A customer gets logged in as 'Rahul Kant'
        And Withdraw <amount> from his Account
        Then User should get message as 'Transaction successful'
        Examples:
            | amount |
            | 321    |
            | 200    |


    Scenario: Customer Withdrawl when amount is greater than equal to balance
        Given User is on the Home page of the application
        When A customer gets logged in as 'Rahul Kant'
        And Withdraw amount greater than balance from his Account
        Then User should get message as 'Transaction Failed.'


    Scenario: Validate the Reset button on transaction screen
        Given User is on the Home page of the application
        When A customer gets logged in as 'Rahul Kant'
        And Navigate to Transactions Screen
        Then Reset button should be present if balance is greater than 0
