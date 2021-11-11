import { type } from "os";

type Tokenaizertype = 'empty' | '"' | "'" | '[' | ']' | '{' | '}' | ',' | ':' | 'keyword';

interface Payload {
    type: Tokenaizertype;
    text?: string;
}

interface Root {
    payload: Payload;
    next: Root | null;
}

function loopTokenaizer (source: string): Root {
    let index = 0;
    let len = source.length;
    let currentRoot = null;
    let cache = "";
    let payload;
    let root = {
        payload: {
            type: "empty"
        },
        next: null
    }
    while ( index++ < len ) {
        const current = source[index]
        switch (current) {
            case "[":
            case "]":
            case "{":
            case "}":
            case ":":
            case ",":
                if(cache){
                    payload = { type: "keyword", text: cache }
                    root.next = {
                        payload,
                        next: null
                    }
                }
                payload = { type: current }
            case "\n":
            case "\t":
                payload = { type: current }
                break;
            default:
                if(current) {
                    cache += current
                }
                break;
        }



        if(root) {

        }else{

        }

    }
    return root
}

export default class Input {
    root: Root;
    constructor (source: string) {
        
    }

    nextTokenaizer(){
        return ""
    }
}