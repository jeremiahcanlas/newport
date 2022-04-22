import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_KEY as string);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, body } = req.body;

  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "info@jeremiahcanlas.com", // Your email where you'll receive emails
      from: "info@jeremiahcanlas.com", // your website email address here
      subject: `You got a mail from ${name}`,
      html: `
        <div>
        <p><b>Email:</b> ${email}</p>
        <p>${body}</p>
        </div>
      
      `,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: "error" });
  }

  return res.status(200).json({ error: "" });
};
