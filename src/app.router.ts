import { Router } from 'express';
import { Handler } from './handlers/Handlers';

const appRouter = Router();

//=|Root Page/=>
appRouter.get('/', Handler.root);

//=|Json Page/=>
appRouter.get('/json', Handler.getSampleData);

//=|Search Function/=>
// appRouter.post('/search', Handler.search);


export { appRouter };
