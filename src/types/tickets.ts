export type TicketType = {
  price: number;
  carrier: string;
  segments: [TicketElementType, TicketElementType];
};

export type TicketElementType = {
	origin: string;
	destination: string;
	date: string;
	stops: string[];
	duration: number;
};
