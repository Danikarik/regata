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

export default (req: NextApiRequest, res: NextApiResponse) => {
  const text = `
Компания: ${req.body.company}
Телефон: ${req.body.phone_number}

${req.body.message}
`

  console.log("sending mail ...")
  transporter.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: "partners@avs.media",
    subject: "📩 Новая заявка", // Subject line
    text: text,
  })

  console.log("redirecting back ...")
  res.redirect("/")
}
