//const { test, expect } = require("@playwright/test"); OR
import {test, expect} from '@playwright/test'

test('Locators', async({page}) =>{

   const pageURL = page.goto("https://demoblaze.com/");
   
   await page.click("#login2"); 
   await page.fill('#loginusername', 'pavanol');
     //provide password
     await page.fill('#loginpassword', 'test@123');
     await page.click("//button[normalize-space()='Log in']");

     //Verify logout link presence  - Xpath
     const logoutMenu =  await page.locator("(//a[normalize-space()='Log out'])[1]");
     await expect(logoutMenu).toBeVisible();
     await page.close();


      

})