import nc from "next-connect";
import { selectDrugs } from "../../../../controllers/obat";

const handler = nc({
    onError: (err, req, res, next) => {
      console.error(err.stack);
      res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res) => {
      res.status(404).end("Page is not found");
    },
})

handler.get(selectDrugs)

export default handler