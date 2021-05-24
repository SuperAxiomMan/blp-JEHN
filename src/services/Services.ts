import fetch from 'node-fetch';
import { readFileSync } from 'fs';
import { resolve } from 'path';

class Services {
    static fetchStringField = async () => {
        try {
            const res = await fetch("");
            const json = await res.json();
            console.log(json.results);
            return json;
        } catch (e) {
            console.log(e);
        }
    };

    static fetchJsonFile = async () => {
        try {
            const res = await readFileSync(process.cwd()+"src/models/sample.json","utf-8");
            console.log("coucou")
        } catch (e) {
            console.log(e);
        }
    };
    static test = () => {
      console.log('Hello')
    }

}

export { Services };
