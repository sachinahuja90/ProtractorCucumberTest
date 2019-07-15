Feature: Customer Account Automation

    @Customer @Login
    Scenario: Customer Login Validation
        Given User is on the Home page of the application
        When User select his name 'Harry Potter' and Click Login Button
        Then User name 'Harry Potter' should be visible on the screen




    @Customer @Deposit
    Scenario Outline: Customer Deposit with valid input
        Given User is on the Home page of the application
        When A customer gets logged in as 'Harry Potter'
        And Deposit <amount> in his Account
        Then User should get message as 'Deposit Successful'
        Examples:
            | amount |
            | 230    |
            | 321    |

    @Customer @Withdraw
    Scenario Outline: Customer Withdrawl when amount is less than equal to balance
        Given User is on the Home page of the application
        When A customer gets logged in as 'Harry Potter'
        And Withdraw <amount> from his Account
        Then User should get message as 'Transaction successful'
        Examples:
            | amount |
            | 321    |
            | 200    |

    @Customer @Withdraw @Negative
    Scenario: Customer Withdrawl when amount is greater than equal to balance
        Given User is on the Home page of the application
        When A customer gets logged in as 'Harry Potter'
        And Withdraw amount greater than balance from his Account
        Then User should get message as 'Transaction Failed. You can not withdraw amount more than the balance.'


    @Customer @Transaction
    Scenario: Validate the Reset button on transaction screen
        Given User is on the Home page of the application
        When A customer gets logged in as 'Harry Potter'
        And Navigate to Transactions Screen
        Then Reset button should be present if balance is greater than 0
