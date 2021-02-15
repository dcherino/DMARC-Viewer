interface From {
  email: string;
  name: string;
}

interface Message {
  body: string;
  date: string;
  from: From;
  subject: string;
}

interface Data {
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
