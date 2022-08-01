@e2e @init
Feature: E2E: rabota.by

Background:
  * framework opens "Home" page

  @scenarioHelpOpen
  Scenario: Help Page Open
    When player clicks on "Help" button
    Then help page should be opened

  @scenarioHelpFormSend
  Scenario: Help Form Send
    * framework opens "Help" page
    When player sends help form
    Then help form should be sent

  @scenarioHelpFormSendAgain
  Scenario: Help Form Send Again
    * framework opens "Help" page
    When player sends help form
    * player opens the help form again
    * player sends help form
    Then help form should be sent

  @scenarioHelpEmptyForm
  Scenario: Help Empty Form
      * framework opens "Help" page
      When player sends help form with empty fields
      Then error messages should be displayed

  @scenarioSearch
  Scenario: Search
      When player searches the "Typescript" text
      Then search result should have "Typescript" text