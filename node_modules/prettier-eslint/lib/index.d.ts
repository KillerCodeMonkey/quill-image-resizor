import type { Linter } from 'eslint';
import type { FormatOptions } from './types.ts';
export declare function format(options: FormatOptions): Promise<string>;
export declare function analyze(options: FormatOptions): Promise<{
    output: string;
    messages: Linter.LintMessage[];
}>;
export type * from './types.js';
export * from './utils.ts';
export default format;
