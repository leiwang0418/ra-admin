module.exports = {
	preset: "ts-jest",
	moduleNameMapper: {
		"^@utils/(.*)$": "<rootDir>/src/utils/$1",
	},
};
