import { Request, Response } from 'express';
import { Services } from '../services/Services';

class Handler {
    //=|Root Page Response/=>
    static root = (req: Request, res: Response) => {
        res.render('home');
    };
    //=|Fetch JSON Data/=>
    static getSampleData = async (req: Request, res: Response) => {
        try {
            const results = await Services.fetchStringField();

            res.render('home', { results });
        } catch (e) {
            console.log(e);
        }
    };
    
    //=|Search/=>
    static search = (req: Request, res: Response) => {
        const search = req.body.pokemonName;

        res.redirect(`/${search}`);
    };
    //=|Not Found Page/=>
    static notFound = (req: Request, res: Response) => {
        res.render('not-found');
    };
}

export { Handler };
