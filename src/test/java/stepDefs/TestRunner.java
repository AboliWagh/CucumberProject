package stepDefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		plugin = {"html:target/html-cucumber","json:target/cucumber.json"},
		features = "src/test/java/fearures",
		 tags = {"@F-123"},// **** to run single tag
		// tags = {"@Sanity,@Regression"} ************ to run multiple tags using OR
		// tags = {"@Sanity or @Regression"} ************ to run multiple tags using OR
		// tags = {"@Regression"and @Rapid"}************ to run multiple tags using AND

		//tags = { "@Regression", "@Rapid" }, // ************ to run multiple tags using AND
		//tags= {"@Sanity or (@Regression and @Rapid)"},
		//tags = {"~@Sanity"},

		glue = { "stepDefs" }

)

public class TestRunner {

}
