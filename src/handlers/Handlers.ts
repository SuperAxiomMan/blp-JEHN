import { Request, Response } from "express";
import { Services } from "../services/Services";

class Handler {
  //=|Root Page Response/=>
  static root = (req: Request, res: Response) => {
    res.render("home");
  };
  //=|Fetch API Data/=>
  static getAPIData = async (req: Request, res: Response) => {
    try {
      const results = await Services.fetchAPI();
      res.render("api", { results });
    } catch (e) {
      console.log(e);
    }
  };
  static getJSONData = (req: Request, res: Response) => {
    try {
      const results = Services.readLocalJson();
      res.render("json", { results });
    } catch (e) {
      console.log(e);
    }
  };
}

export { Handler };
