//import { test } from '../utils/fixtures.ts';
//import { ConfigUtils } from '../utils/config-utils.ts';
//import { allure } from "allure-playwright";
import { test, expect } from '@playwright/test';
test.describe('Class-226-Verify Search results to lazy load with scroll and Brand Logo with Visual commparison', {tag: '@regression'},() => {
  
/*  test('Verify Interactive Media page, search results lazy load successfully', {tag: ['@regression','@InteractiveMedia']}, async ({ lmsPage, clas_HomePage, clas_MediaCenterPage, clas_InteractiveMediaPage }) => {
    await lmsPage.goto(ConfigUtils.getConfigValue('CLAS_WEB_URL'));
    await lmsPage.lmsLogin(ConfigUtils.getConfigValue('CLAS_USERNAME'), ConfigUtils.getConfigValue('CLAS_PASSWORD'));
    await lmsPage.launchClassroomApp();
    await clas_HomePage.clickSeeMoreLinkForMediaCenter();
    await clas_MediaCenterPage.verifyMediaCenterTitles();
    await clas_MediaCenterPage.clickSeeMoreLinkFor360Images();
    await clas_InteractiveMediaPage.verifySearchResultsLazyLoad();
  });

  test('Verify Classroom Brand logo with Visual Comparison', async ({ lmsPage, clas_HomePage }) => {
    console.log(lmsPage.text);
    await lmsPage.goto(ConfigUtils.getConfigValue('CLAS_WEB_URL'));
    await lmsPage.lmsLogin(ConfigUtils.getConfigValue('CLAS_USERNAME'), ConfigUtils.getConfigValue('CLAS_PASSWORD'));
    await lmsPage.launchClassroomApp();
    await clas_HomePage.verifyBrandLogo();
});

*/
test('Verify Header links on Automation Practice site',  async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    await page.getByRole('link', { name: ' Home' }).click();
    await expect(page.getByRole('link', { name: ' Products' })).toBeVisible();
    await expect(page.getByRole('link', { name: ' Cart' })).toBeVisible();
    await expect(page.getByRole('link', { name: ' Signup / Login' })).toBeVisible();
});

  test.afterEach(async ({ page }) => {
   //   await page.close();
  });
 
});