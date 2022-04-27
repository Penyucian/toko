import nc from "next-connect";
import { addDrugs, getAllDrugs } from "../../../controllers/obat";

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
})

handler.get(getAllDrugs)
handler.post(addDrugs)

export default handler