import { expect, Locator, Page } from '@playwright/test';

export class LmsPageClassroom {

    text : string;
    txtEmail: Locator;
    txtPassword: Locator
    btnLogin: Locator
    lnkQA1 : Locator
    btnManage: Locator
    lnkAssignments: Locator
    lnkJul24_2024_1: Locator
    lnkEdit: Locator
    lblMore: Locator 
    lblApps: Locator 
    txtViewAll: Locator
    btnClassroomStage: Locator
    page: Page;
    
  constructor(page: Page) {
    this.page = page;
    this.text = "testemail";
    this.txtEmail = page.getByRole('textbox', { name: 'Email' });
    this.txtPassword = page.getByLabel('Password');
    this.btnLogin = page.getByRole('button', { name: 'Log In' });
    this.lnkQA1 = page.getByRole('link', { name: 'QA1' });
    this.btnManage = page.getByTestId('manage-button');
    this.lnkAssignments =  page.getByRole('link', { name: 'Assignments' });
    this.lnkJul24_2024_1 = page.getByRole('link', { name: 'July24_2024_1' });
    this.lnkEdit = page.getByRole('link', { name: ' Edit' });
    this.lblMore = page.getByLabel('More...');
    this.lblApps = page.getByLabel('Apps');
    this.txtViewAll = page.getByText('View All');
    this.btnClassroomStage = page.getByRole('button', { name: 'Open Classroom-stage' });
  }

//   async goto() {
//     await this.page.goto('https://playwright.dev');
//   }

    async goto(lms_url) {
        await this.page.goto(lms_url);
      }


    async lmsLogin(email, password){
      console.log(email);
      console.log(password);
      await this.txtEmail.fill(email);
      await this.txtPassword.click();
      await this.txtPassword.fill(password);
      await this.btnLogin.click();
    }
  
    async launchClassroomApp(){
      await this.lnkQA1.click();
      await this.btnManage.click();
      await this.lnkAssignments.click();
      await this.lnkJul24_2024_1.click();
      await this.lnkEdit.click();
      await this.lblMore.click();
      await this.lblApps.click();
      await this.txtViewAll.click();
      await this.btnClassroomStage.first().click();    
    }
};