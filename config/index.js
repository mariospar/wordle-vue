import { config as DotEnvConfig } from "dotenv";
DotEnvConfig();

const env = (process.env.NODE_ENV) || "development";

const getConfig = (env) => {
    const environments = {
		development: {
			port: process.env.PORT ? Number(process.env.PORT) : 3001,
			rapid_host: process.env.RAPID_HOST
				? String(process.env.RAPID_HOST)
				: "",
			rapid_key: process.env.RAPID_KEY
				? String(process.env.RAPID_KEY)
				: "",
		},
		production: {
			port: Number(process.env.PORT),
			rapid_host: process.env.RAPID_HOST
				? String(process.env.RAPID_HOST)
				: "",
			rapid_key: process.env.RAPID_KEY
				? String(process.env.RAPID_KEY)
				: "",
		},
		test: {
			port: process.env.PORT ? Number(process.env.PORT) : 3001,
			rapid_host: process.env.RAPID_HOST
				? String(process.env.RAPID_HOST)
				: "",
			rapid_key: process.env.RAPID_KEY
				? String(process.env.RAPID_KEY)
				: "",
		},
	};

    return environments[env];
};

// Throwing an Error if any field was undefined

const assertNonNullable = (config) => {
    Object.keys(config).forEach((key) => {
        if (!config[key]) {
            throw new Error(
                JSON.stringify({ msg: `Missing key ${key} in config` }),
            );
        }
    });
};

const config = getConfig(env);
assertNonNullable(config);

export default config;