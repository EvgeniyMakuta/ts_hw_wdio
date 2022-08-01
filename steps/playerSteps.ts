import { When } from "@wdio/cucumber-framework";
import { Buttons, ButtonsKey } from "../utils/enums";
import * as pages from "../pages/index"

When('player clicks on {string} button', async (button: ButtonsKey) => {
    await pages.base.default.clickButton(Buttons[button]);
});

When('player sends help form', async () => {
    await pages.help.default.fillOutForm();
});

When('player opens the help form again', async () => {
    await pages.help.elements.sendButton("send-more").waitForDisplayed();
    await pages.help.elements.sendButton("send-more").click();
    await pages.help.elements.sendButton("submit").waitForDisplayed();
});

When('player sends help form with empty fields', async () => {
    await pages.help.elements.sendButton("submit").scrollIntoView();
    await pages.help.elements.sendButton("submit").click();
});

When('player searches the {string} text', async (text: string) => {
    await pages.home.default.search(text);
})