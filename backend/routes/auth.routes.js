import { Router } from "express";

const authRouter = Router();


authRouter.get('/sign-up', (req, res) => {
    return res.send("kontolodon")
});