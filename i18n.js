/** @type {import('next-translate').I18nConfig} */

module.exports = {
    locales: ["en", "cs", "ru", "uk"],
    defaultLocale: "en",
    pages: {
        "*": ["common"],
        "/reviews": ["reviews"],
    }
}