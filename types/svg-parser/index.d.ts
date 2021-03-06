// Type definitions for svg-parser 2.0
// Project: https://github.com/Rich-Harris/svg-parser
// Definitions by: mrmlnc <https://github.com/mrmlnc>
//                 Joel Shinness <https://github.com/JoelCodes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface TextNode {
    type: 'text';
    value?: string | boolean | number;
}

export interface ElementNode {
    type: 'element';
    tagName?: string;
    properties?: Record<string, string|number>;
    children: Array<Node | string>;
    value?: string;
    metadata?: string;
}

export type Node = TextNode | ElementNode;

export interface RootNode {
    type: 'root';
    children: Node;
}

export function parse(source: string): RootNode;
