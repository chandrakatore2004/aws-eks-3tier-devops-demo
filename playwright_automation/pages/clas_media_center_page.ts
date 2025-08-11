import { expect, Locator, Page } from '@playwright/test';

export class Clas_MediaCenterPage{
  
  lblHeadings: Locator;
  lnkSeeMore360Images: Locator;
  page: Page;

  constructor(page: Page){
    this.page = page;
    this.lblHeadings = page.frameLocator('iframe[name="external_tool_launch"]').locator('ng-component');
    this.lnkSeeMore360Images = page.frameLocator('iframe[name="external_tool_launch"]').locator('learn-ui-home-ribbon').filter({ hasText: '360° ImagesSee more' }).getByRole('link');
  }

  async verifyMediaCenterTitles(){
    await expect(this.lblHeadings).toContainText('Videos');
    await expect(this.lblHeadings).toContainText('360° Images');
    await expect(this.lblHeadings).toContainText('Images');
    await expect(this.lblHeadings).toContainText('WB Explains');    
  }

  async clickSeeMoreLinkFor360Images(){
    await this.lnkSeeMore360Images.click();
  }
   
};