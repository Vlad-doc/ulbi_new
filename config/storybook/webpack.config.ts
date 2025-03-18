import path from "path";

import { Configuration, RuleSetRule } from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        entry: "",
        build: "",
        html: "",
        src: path.resolve(__dirname, "../", "../", "src"),
    };

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(svgLoader);

    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.modules.push(paths.src);

    return config;
};