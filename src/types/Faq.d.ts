interface IFaqBase {
  id?: number;
  question: string;
  answer: string;
}

interface IFaqReceive extends IFaqBase {
  order_nr: number;
}
