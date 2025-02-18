declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}

declare module "*.svg" {
    const content:string;
    export default content;
}

declare const __IS_DEV__: boolean;
