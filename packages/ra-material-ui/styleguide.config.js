const path = require("path");

// components: "src/**/*.{js,jsx,ts,tsx}",
module.exports = {
    components: "src/**/*.ts",
    moduleAliases: {
        "@utils": path.resolve(__dirname, "src/utils"),
    },
};
