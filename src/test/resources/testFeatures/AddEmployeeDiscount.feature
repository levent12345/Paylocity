Feature: Employee Dashboard information



 Background:

   Given launch the browser
   When  employee entering username "testUser" and password "Test1234"
   Then  employee select Add Employee
   And   employee entering firstname "Ali" lastname "Veli" and dependants"3"

  @TC001 @Discount
  Scenario: checking firstname you entered
    And   checking firstname on the dashboard
  @TC002 @Discount
  Scenario: checking lastname you entered
    And   checking lastname on the dashboard

  @TC003 @Discount
  Scenario: checking dependants you entered
    And   checking ldependants on the dashboard

  @TC004 @Discount
  Scenario: checking Salary
    And   checking Salary on the dashboard

  @TC005 @Discount
  Scenario: checking Gross Pay
    And   checking Gross pay on the dashboard

  @TC006 @Discount
  Scenario: checking Benefit Cost
    And   checking Benefit Cost  on the dashboard

  @TC007 @Discount
  Scenario: checking  Net Pay
    And   checking  Net Pay on the dashboard

  @TC008 @Discount
  Scenario: checking Id
    And   checking Id's on the dashboard

  @TC009 @Discount
  Scenario: checking Edit functionality
    And   after edit firstname on the dashboard

  @TC0010 @Discount
  Scenario: checking Delete functionality
    And   after delete firstname on the dashboard








