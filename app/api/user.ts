import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  console.log("drek");
  
}
