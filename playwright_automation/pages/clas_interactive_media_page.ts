import { expect, Locator, Page } from '@playwright/test';

export  class Clas_InteractiveMediaPage{
  
  lblSearchResultsCount: Locator;
  searchResultsTitles: Locator;
  page: Page;

  constructor(page: Page){
    this.page = page;
    this.lblSearchResultsCount = page.frameLocator('iframe[name="external_tool_launch"]').getByText('results');   
    this.searchResultsTitles = page.frameLocator('iframe[name="external_tool_launch"]').locator('learn-ui-card');
    }

    async verifySearchResultsLazyLoad(){

        const text = await this.lblSearchResultsCount.textContent();
        //const numberText = await text?.match(/\d{1,}/);
        
        const countInitialResults:number = await this.searchResultsTitles.count();
        await expect(this.searchResultsTitles).toHaveCount(20);
       
        await this.searchResultsTitles.last().waitFor();
        console.log(await this.searchResultsTitles.last().locator('.card-item-info-title').textContent());
        console.log(await this.searchResultsTitles.count());
        await this.searchResultsTitles.locator('nth=-1').scrollIntoViewIfNeeded();
        await this.page.mouse.wheel(0, 5000);
        await this.page.waitForTimeout(7000);
        await this.searchResultsTitles.locator('nth=-1').scrollIntoViewIfNeeded();
        console.log(await this.searchResultsTitles.last().locator('.card-item-info-title').textContent());
        const countLastResult = await this.searchResultsTitles.count();
        console.log(countInitialResults);
        console.log(countLastResult);
        expect(countLastResult).toBeGreaterThanOrEqual(countInitialResults);
    }
  
}


  