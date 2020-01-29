Feature: Employee Dashboard information



 Background:

   Given launch the browser
   When  employee entering username "testUser" and password "Test1234"
   Then  employee select Add Employee
   And   employee entering firstname "John" lastname "Doe" and dependants"3"

  @TC001 @NoDiscount
  Scenario: checking firstname you entered
    And   checking firstname on the dashboard
  @TC002 @NoDiscount
  Scenario: checking lastname you entered
    And   checking lastname on the dashboard

  @TC003 @NoDiscount
  Scenario: checking dependants you entered
    And   checking ldependants on the dashboard

  @TC004 @NoDiscount
  Scenario: checking Salary
    And   checking Salary on the dashboard

  @TC005 @NoDiscount
  Scenario: checking Gross Pay
    And   checking Gross pay on the dashboard

  @TC006 @NoDiscount
  Scenario: checking Benefit Cost
    And   checking Benefit Cost  on the dashboard

  @TC007 @NoDiscount
  Scenario: checking  Net Pay
    And   checking  Net Pay on the dashboard

  @TC008 @NoDiscount
  Scenario: checking Id
    And   checking Id's on the dashboard

  @TC009 @NoDiscount
  Scenario: checking Edit functionality
    And   after edit firstname on the dashboard

  @TC0010 @NoDiscount
  Scenario: checking Delete functionality
    And   after delete firstname on the dashboard








