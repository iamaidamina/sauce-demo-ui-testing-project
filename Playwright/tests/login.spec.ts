import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page'
import { User} from '../models/user'

const user = new User("standard_user","secret_sauce")

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    
});

test.describe('Login', () => {
    test('should allow me to login in sauce demo page', async ({ page }) => {
        // create a new todo locator
        const loginPage = new LoginPage(page);
        await loginPage.login(user);
        await loginPage.checkLogin("Products");
  
    
  
    
     
  
      
  
     
    })
});