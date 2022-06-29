import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
    rest.get("http://127.0.0.1:5000"), (req, res, ctx) =>{
        return res(ctx.json(response));
    }
)