import { Pattern } from 'hexo-util';
declare function process(file: any): any;
export declare const config: {
    pattern: Pattern;
    process: typeof process;
};
export {};