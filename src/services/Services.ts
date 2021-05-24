import fetch from 'node-fetch';
import { readFile } from 'fs';

class Services {
    static fetchStringField = async () => {
        try {
            const res = await fetch(readFile(process.cwd() + "/models/sample.json"));
            const json = await res.json();
            console.log(json.results);
            return json;
        } catch (e) {
            console.log(e);
        }
    };

}

export { Services };
