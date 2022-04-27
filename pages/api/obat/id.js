import nc from "next-connect";
import { selectDrugs } from "../../../controllers/obat/id";

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
})

handler.post(selectDrugs)

export default handler