import { WaitTime } from "../utils/enums";

const common = {
    container: () => $("[data-qa*=lux-container]")
}

const buttons = {
    help: () => $("[data-qa=supernova-help-feedback-link]")
}

export const elements = {
    ...buttons,
    ...common,
}

class BasePage {

    public async waitForDisplayed(): Promise<void> {
        await expect(elements.container()).toBeDisplayed({
            wait: WaitTime.TenSeconds,
            interval: WaitTime.HalfASecond,
        });
    };

    public async clickButton(button: string): Promise<void> {
        const buttonSelector: WebdriverIO.Element = await elements[button]();
        await buttonSelector.scrollIntoView();
        await buttonSelector.click();
    }

}

export default new BasePage();