package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class BaseClass {

	public static WebDriver driver;

	// ****************** Methods **************//
	@Before
	public void SetUpMethod() {
		System.setProperty("webDriver.chrome.driver", "chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

		driver.manage().timeouts().implicitlyWait(6000, TimeUnit.MILLISECONDS);

	}
	
	@After
	public void TearDown() {
		
		driver.close();

	}
}
