package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	WebDriver driver = BaseClass.driver;

	@Given("I have opened the application in browser")
	public void i_have_opened_the_application_in_browser() {
		// Write code here that turns the phrase above into concrete actions

		driver.get("https://www.simplilearn.com/");
		driver.manage().timeouts().implicitlyWait(6000, TimeUnit.MILLISECONDS);
	}

	@When("I click in the Login link")
	public void i_click_in_the_login_link() {
		// Write code here that turns the phrase above into concrete actions
		WebElement LoginLink = driver.findElement(By.linkText("Log in"));
		LoginLink.click();
	}

	@When("I enter username")
	public void i_enter_username() {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("abc@xyz.com");
	}

	@When("I enter password")
	public void i_enter_password() {
		// Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("Pqr@123");
	}

	@When("I click on login Button")
	public void i_click_on_login_button() {
		// Write code here that turns the phrase above into concrete actions
		WebElement LoginButton = driver.findElement(By.name("btn_login"));
		LoginButton.click();
	}

	@Then("I should be landed on the home page")
	public void i_should_be_landed_on_the_home_page() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Inside the Home page");
	}

	@When("I enter username {string}")
	public void i_enter_username(String UserNameVal) {
		// Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys(UserNameVal);

	}

	@When("I enter password {string}")
	public void i_enter_password(String PasswordVal) {
		// Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	}
	
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement ErrorMsg = driver.findElement(By.id("msg_box"));
		String ActualMsg = ErrorMsg.getText();
		String ExpeMsg = "The email or password you have entered is invalid.";

		if (ActualMsg.equals(ExpeMsg)) {
			System.out.println("TC Passed");

		} else {
			System.out.println("TC Failed");
		}
		
	}

}
