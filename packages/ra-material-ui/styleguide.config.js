const path = require("path");

module.exports = {
    components: "src/[A-Z]**/[A-Z]*.tsx",
    skipComponentsWithoutExample: true,
    moduleAliases: {
        "@utils": path.resolve(__dirname, "src/utils"),
    },
};
