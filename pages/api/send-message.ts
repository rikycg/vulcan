import { mailService } from '../../core/services/mail.service';

export default async function handler(req: any, res: any) {
  const { from, to, subject, message: text } = req.body;

  await mailService.send({
    from,
    to,
    subject,
    message: text,
  });

  res.status(200).json();
}