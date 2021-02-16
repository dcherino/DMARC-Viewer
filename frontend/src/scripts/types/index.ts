interface Emailer {
  email: string;
  name: string;
}

interface Headers {
  DKIM: 'pass' | null;
  SPF: 'pass' | null;
}
export interface Message {
  id: string;
  headerData: Headers;
  hasAttachment: boolean;
  isUnread: boolean;
  from: Emailer | null;
  to: Array<Emailer> | null;
  cc: Array<Emailer> | null;
  bcc: Array<Emailer> | null;
  subject: string;
  date: string;
  preview: string;
  body: string;
}

export interface Data {
  counts: {
    messageTotal: number;
    wordTotal: number;
    wpmTotal: number;
  };
  messages: Array<Message>;
}

export interface AppProps {
  data: Data;
}
