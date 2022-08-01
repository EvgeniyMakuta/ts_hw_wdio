import { FormFieldsKey, RadioFormValuesKey, SendButtonsKey } from "../utils/types";
import * as pages from "./index";
import { userData } from "../utils/enums";

export const elements = {
    formField: (field: FormFieldsKey) => $(`[data-qa=feedback__${field}]`),
    radioFormButton: (value: RadioFormValuesKey) => $(`/ /*[@data-qa="feedback__send-to"][@value="${value}"]//parent::*`),
    feedback: () => $("[data-qa=feedback__success-message]"),
    sendButton: (button: SendButtonsKey) => $(`[data-qa=feedback__${button}]`),
    messageError: (field: FormFieldsKey) => $(`[data-message-name=${field}`),
}

class HelpPage {

    public async fillOutForm(): Promise<void> {
        await pages.help.elements.radioFormButton("QUALITY").click();
        await pages.help.elements.formField("subject").setValue(userData.subject);
        await pages.help.elements.formField("content").setValue(userData.content);
        await pages.help.elements.formField("name").setValue(userData.name);
        await pages.help.elements.formField("email").setValue(userData.email);
        await pages.help.elements.sendButton("submit").click();
    }

    public async getErrorMessage(field: FormFieldsKey): Promise<string> {
        return await elements.messageError(field).getText();
    }
}

export default new HelpPage();