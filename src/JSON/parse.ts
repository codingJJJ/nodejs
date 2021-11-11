import Input from "./Input"

const parse = (source: string) => {
    if( typeof source !== "string" ) {
        throw Error("the source is not a string")
    }

    const input = new Input(source)
    console.log(input);
    
}

export default parse