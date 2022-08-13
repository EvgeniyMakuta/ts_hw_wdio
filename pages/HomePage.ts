const search = {
    searchInput: () => $("[data-qa=search-input]"),
    searchButton: () => $("[data-qa=search-button]"),
    advancedSearch: () => $("[data-qa=advanced-search]"),
    searchResult: () => $("[data-qa=vacancies-search-header]")
}

export const elements = {
    ...search
}

class HomePage {

    public async search(text: string): Promise<void> {
        await elements.searchInput().setValue(text);
        await elements.searchButton().click();
    }
}

export default new HomePage();