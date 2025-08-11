import { expect, Locator, Page } from '@playwright/test';

export class Clas_HomePage{
  
  lnkMediaCenterSeeMore: Locator;
  appBrandImage: Locator;
  page: Page;

  constructor(page: Page){
    this.page = page;
    this.lnkMediaCenterSeeMore = page.frameLocator('iframe[name="external_tool_launch"]').locator('learn-ui-home-ribbon').filter({ hasText: 'Media CenterSee more' }).getByRole('link')
    this.appBrandImage = page.frameLocator('iframe[name="external_tool_launch"]').locator('.navbar-brand').first();
  }

  async clickSeeMoreLinkForMediaCenter(){
    await this.lnkMediaCenterSeeMore.click();
  }  

  async generateBrandScreenShot(){
    await this.appBrandImage.screenshot({ path: "./snapshots/classroomBrand.png" });
  }

  async verifyBrandLogo(){
    expect(await this.appBrandImage.screenshot({ path: "./snapshots/classroomBrand.png" })).toMatchSnapshot();
  }
}