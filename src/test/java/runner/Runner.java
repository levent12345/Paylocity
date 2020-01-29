package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
       plugin = {"html:target/cucumberHTML-report",
             "json:target/cucumber.json"},
        features = "src/test/resources/testFeatures",
        glue = "stepDefinitions",
        tags = "@Discount",
        dryRun = false


)

public class Runner {

    //@Discount tag  if firstname starts with A or a 10 % discount
    //@NoDiscount tag  if firstname not starts with A or a  no discount
}
