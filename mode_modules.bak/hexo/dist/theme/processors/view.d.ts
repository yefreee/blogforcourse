import { Pattern } from 'hexo-util';
declare function process(file: any): any;
export declare const view: {
    pattern: Pattern;
    process: typeof process;
};
export {};