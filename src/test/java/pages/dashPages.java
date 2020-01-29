package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;


public class dashPages {

    WebDriver driver;

    public dashPages(){
        this.driver= Driver.driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(name = "form-username")
    public WebElement username;

    @FindBy(name="form-password")
    public WebElement password;

    @FindBy(id="btnLogin")
    public WebElement loginButton;

    @FindBy(id="btnAddEmployee")
    public WebElement addEmployee;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[1]/div/input")
    public WebElement addfirstname;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[2]/div/input")
    public WebElement addlastname;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[3]/div/input")
    public WebElement addDependants;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[4]/div/button[1]")
    public WebElement submit;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[3]")
    public WebElement firstname;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[2]")
    public WebElement lastname;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[4]")
    public WebElement salary;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[5]")
    public WebElement dependant;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[6]")
    public WebElement grosPay;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[7]")
    public WebElement benefitCost;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[8]")
    public WebElement netPay;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[1]")
    public WebElement id;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[9]/span[1]")
    public WebElement delete;

    @FindBy(xpath="//*[@id=\"employee-table\"]/tbody/tr[2]/td[9]/span[2]")
    public WebElement edit;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[1]/div/input")
    public WebElement editname;

    @FindBy(xpath="//*[@id=\"employees-form\"]/div[4]/div/button[1]")
    public WebElement submitedit;

}
