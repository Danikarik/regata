import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const text = `
Компания: ${req.body.company}
Телефон: ${req.body.phone_number}

${req.body.message}
`

  const info = await transporter.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: "partners@avs.media",
    subject: "📩 Новая заявка", // Subject line
    text: text,
  })

  console.log("message sent: %s", info.messageId)
  res.redirect(301, "/")
}
