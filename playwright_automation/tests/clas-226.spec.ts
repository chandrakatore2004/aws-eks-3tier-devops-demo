import { test } from '../utils/fixtures.ts';
import { ConfigUtils } from '../utils/config-utils.ts';
//import { allure } from "allure-playwright";

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
*/
  test('Verify Classroom Brand logo with Visual Comparison', async ({ lmsPage, clas_HomePage }) => {
    console.log(lmsPage.text);
    await lmsPage.goto(ConfigUtils.getConfigValue('CLAS_WEB_URL'));
    await lmsPage.lmsLogin(ConfigUtils.getConfigValue('CLAS_USERNAME'), ConfigUtils.getConfigValue('CLAS_PASSWORD'));
    await lmsPage.launchClassroomApp();
    await clas_HomePage.verifyBrandLogo();
});

  test.afterEach(async ({ page }) => {
   //   await page.close();
  });
 
});