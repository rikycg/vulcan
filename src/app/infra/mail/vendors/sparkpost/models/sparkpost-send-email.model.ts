import { ISparkPostSendEmailDto } from '../dtos/sparkpost-send-email.dto';

export interface ISparkPostMailContent {
  from: string;
  subject?: string;
  text: string;
}

export interface ISparkPostRecipient {
  address: string;
}

export class SpartPostSendEmail {
  recipients: ISparkPostRecipient[] = [];
  content: ISparkPostMailContent = {
    from: '',
    subject: '',
    text: '',
  };

  constructor(options: ISparkPostSendEmailDto) {
    const { from, to, subject, message } = options;

    this.content.from = from;
    this.content.subject = subject;
    this.content.text = message;

    this.recipients.push({ address: to });
  }
}