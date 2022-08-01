export enum Pages {
    Home = "home",
    Help = "help",
}
export type PagesKey = keyof typeof Pages;

export enum Buttons {
    Help = "help",
}
export type ButtonsKey = keyof typeof Buttons;

export enum WaitTime {
    TwoHundredMilliSeconds = 200,
    HalfASecond = 500,
    Second = 1000,
    TwoSeconds = 2000,
    ThreeSeconds = 3000,
    FiveSeconds = 5000,
    TenSeconds = 10000,
    TwentySeconds = 20000,
    ThirtySeconds = 30000,
    SixtySeconds = 60000,
    TwoMinutes = 120000,
    ThreeMinutes = 180000,
}

export enum userData {
    name = "Evgeniy",
    email = "test@test.by",
    subject = "Typescript",
    content = "WebdriverIO test",
}

export const errorMessage = "Обязательное поле";