import { Router } from 'express';
import { Handler } from './handlers/Handlers';

const appRouter = Router();

//=|Root Page/=>
appRouter.get('/', Handler.root);

//=|API Page/=>
appRouter.get('/api', Handler.getAPIData);

//=|JSON Page/=>
appRouter.get('/json', Handler.getJSONData);

//=|Search Function/=>
// appRouter.post('/search', Handler.search);


export { appRouter };
