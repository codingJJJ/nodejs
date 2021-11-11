
import { stringify, parse } from './JSON';

const test = `{
    name: "psj",
    age: 18,
    1: 2,
    "aihao": ["ganme", "paly", {
        "test": 1,
        tearr: [1, 2, "3"]
    }]
}`;

parse(test)