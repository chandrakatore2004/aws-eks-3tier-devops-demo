import {test as base}  from '@playwright/test';
import { LmsPageClassroom } from '../pages/lms_page_classroom';
import { Clas_HomePage } from '../pages/clas_home_page';
import { Clas_MediaCenterPage } from '../pages/clas_media_center_page';
import { Clas_InteractiveMediaPage} from '../pages/clas_interactive_media_page';
//import {page as Page} from '@playwright/test';

export const test = base.extend({
    lmsPage: async ({ page }, use) => {
        await use(new LmsPageClassroom(page));
    },
    clas_HomePage: async ({ page }, use) => {
        await use(new Clas_HomePage(page));
    },
    clas_MediaCenterPage: async ({ page }, use) => {
        await use(new Clas_MediaCenterPage(page));
    },
    clas_InteractiveMediaPage: async ({ page }, use) => {
        await use(new Clas_InteractiveMediaPage(page));
    },
});
exports.expect = base.expect;