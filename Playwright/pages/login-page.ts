import { type Locator, type Page, expect } from "playwright/test";
import { User} from '../models/user'

export class LoginPage { 

    //variables
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    
    //constructor
    constructor(page: Page) { 
        this.page = page
        this.userName = page.locator('xpath=//*[@id="user-name"]')
        this.password = page.locator('xpath=//*[@id="password"]')
        this.loginButton = page.locator('xpath=//*[@id="login-button"]')
    }
    //methods

    async login(user:User) { 
        
        await this.userName.fill(user.name);
        await this.password.fill(user.password);
        await this.loginButton.click();

    }

    async checkLogin(text: string) { 
        await expect(this.page.locator('xpath=//*[@class="product_label"]')).toHaveText(text);
    }


}

export default LoginPage;