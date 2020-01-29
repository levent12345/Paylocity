package stepDefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.dashPages;
import utilities.Driver;

public class testSteps {
    dashPages element=new dashPages();
    WebDriver driver;

    @Given("^launch the browser$")
    public void launch_the_browser() throws Throwable {
       driver = Driver.driver;
       driver.get("file:///Users/h.levent/Downloads/Paylocity%20QA%20Interview%20Challenge/login.html");

    }

    @When("^employee entering username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void employee_entering_username_and_password(String username, String password) throws Throwable {
        element.username.sendKeys(username);
        element.password.sendKeys(password);
        element.loginButton.click();
        //Assert title of the page
        Assert.assertEquals("Benefits Dashboard",driver.getTitle());

    }

    @Then("^employee select Add Employee$")
    public void employee_select_Add_Employee() throws Throwable {
        element.addEmployee.click();
        Thread.sleep(1000);

    }

    @Then("^employee entering firstname \"([^\"]*)\" lastname \"([^\"]*)\" and dependants\"([^\"]*)\"$")
    public void employee_entering_firstname_lastname_and_dependants(String firstname, String lastname, String dependants) throws Throwable {
        element.addfirstname.sendKeys(firstname);
        Thread.sleep(1000);
        element.addlastname.sendKeys(lastname);
        Thread.sleep(1000);
        element.addDependants.sendKeys(dependants);
        element.submit.click();
        Thread.sleep(1000);

    }

    @Then("^checking firstname on the dashboard$")
    public void checking_firstname_on_the_dashboard() throws Throwable {
        Assert.assertEquals("John",element.firstname.getText());
    }

    @Then("^checking lastname on the dashboard$")
    public void checking_lastname_on_the_dashboard() throws Throwable {
        Assert.assertEquals("Doe",element.lastname.getText());
    }

    @Then("^checking ldependants on the dashboard$")
    public void checking_ldependants_on_the_dashboard() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertEquals("3",element.dependant.getText());
    }

    @Then("^checking Salary on the dashboard$")
    public void checking_Salary_on_the_dashboard() throws Throwable {
        Assert.assertEquals("52000.00",element.salary.getText());
    }

    @Then("^checking Gross pay on the dashboard$")
    public void checking_Gross_pay_on_the_dashboard() throws Throwable {
        Assert.assertEquals("2000",element.grosPay.getText());
    }

    @Then("^checking Benefit Cost  on the dashboard$")
    public void checking_Benefit_Cost_on_the_dashboard() throws Throwable {
        String name=element.lastname.getText();
        double expectedBenefitCost=0.0;
        if(name.charAt(0)=='a'||name.charAt(0)=='A'){
        expectedBenefitCost=((1000+3*500)/26)*0.9;}//10 % discount
        else{ expectedBenefitCost=((1000+3*500)/26);}
        double actualBenefitCost =Double.parseDouble(element.benefitCost.getText());
       Assert.assertEquals(expectedBenefitCost,actualBenefitCost,1);
    }

    @Then("^checking  Net Pay on the dashboard$")
    public void checking_Net_Pay_on_the_dashboard() throws Throwable {

        // for 3 dependant 1500 and 1000 total=2500
        String name=element.lastname.getText();
        double expectedBenefitCost=0.0;
        if(name.charAt(0)=='a'||name.charAt(0)=='A'){
            expectedBenefitCost=((1000+3*500)/26)*0.9;} //10 % discount
        else{ expectedBenefitCost=((1000+3*500)/26);}
        double expectedNetPay=2000-expectedBenefitCost;
        double actualNetPay=Double.parseDouble(element.netPay.getText());
        Assert.assertEquals(expectedNetPay,actualNetPay,1);


    }

    @Then("^checking Id's on the dashboard$")
    public void checking_Id_s_on_the_dashboard() throws Throwable {
        //id should be different than 1
        Assert.assertEquals("2",element.id.getText());
    }

    @Then("^after edit firstname on the dashboard$")
    public void after_edit_firstname_on_the_dashboard() throws Throwable {
        Thread.sleep(2000);
        element.edit.click();
        Thread.sleep(1000);
        element.editname.clear();
        Thread.sleep(1000);
        element.editname.sendKeys("John");
        Thread.sleep(1000);
        element.submitedit.click();
        Thread.sleep(1000);
        Assert.assertEquals("john",element.firstname.getText());
        Thread.sleep(2000);


    }

    @Then("^after delete firstname on the dashboard$")
    public void after_delete_firstname_on_the_dashboard() throws Throwable {
        Thread.sleep(2000);
        //element we added
        element.delete.click();
        // firstname should be null
        Assert.assertEquals(null,element.firstname.getText());
        Thread.sleep(2000);
    }


}
