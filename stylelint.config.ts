/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
    plugins: ["stylelint-order"],
    rules: {
        "selector-class-pattern": null,
        "order/properties-order": [
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "display",
            "flex-direction",
            "justify-content",
            "align-items",
            "width",
            "height",
            "margin",
            "padding",
            "border",
            "background",
            "color",
            "font-size",
            "font-family",
        ],
    },
};