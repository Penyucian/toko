import nc from "next-connect";
import { loginUser } from "../../../controllers/autentikasi";

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
})

handler.post(loginUser)

export default handler