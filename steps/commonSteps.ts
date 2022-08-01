import { Given, Then } from "@wdio/cucumber-framework";
import { errorMessage, Pages, PagesKey } from "../utils/enums";
import { URL } from "../utils/url"
import * as pages from "../pages/index"

Given('framework opens {string} page', async (url: PagesKey) => {
    await browser.url(URL[Pages[url]]);
    await pages.base.default.waitForDisplayed();
});

Then ('help page should be opened', async () => {
    await expect(pages.help.elements.sendButton("submit")).toBeDisplayed();
    await expect(browser).toHaveUrl(URL.help);
});

Then ('help form should be sent', async () => {
    await expect(pages.help.elements.feedback()).toBeDisplayed();
});

Then ('error messages should be displayed', async () => {
    await pages.help.elements.messageError("subject").waitForDisplayed();
    await expect(await pages.help.default.getErrorMessage("subject")).toEqual(errorMessage);
    await expect(await pages.help.default.getErrorMessage("content")).toEqual(errorMessage);
    await expect(await pages.help.default.getErrorMessage("name")).toEqual(errorMessage);
    await expect(await pages.help.default.getErrorMessage("email")).toEqual(errorMessage);
});

Then('search result should have {string} text', async (text: string) => {
    await expect(await pages.home.elements.searchResult().getText()).toContain(text);
})