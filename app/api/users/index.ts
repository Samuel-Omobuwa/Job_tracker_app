import { NextApiRequest, NextApiResponse} from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        //Handle GET request to fetch users
    res.status(200).json({ message: "Hello World!"})
    }

}