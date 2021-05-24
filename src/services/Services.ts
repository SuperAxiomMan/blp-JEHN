import fetch from 'node-fetch';
import { readFileSync } from 'fs';

class Services {
    static fetchAPI = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            const json = await res.json();
            console.log(json.results);
            return json;
        } catch (e) {
            console.log(e);
        }
    };

    static readLocalJson =  () => {
        try {
            const res = readFileSync(process.cwd()+"/src/models/sample.json","utf-8")
            const json = JSON.parse(res);
            return json;
        } catch (e) {
            console.log(e);
        }
    };


}

export { Services };
