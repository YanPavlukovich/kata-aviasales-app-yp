import { useMemo } from 'react';


type Props = {
  price: number;
  carrier: string;
};

const getCorrectPrice = (price: number) => {
  return String(price)
    .split('')
    .reverse()
    .map((a, b) => (!((b + 1) % 3) ? ` ${a}` : a))
    .reverse()
    .join('');
};

export const TicketHeader = (props: Props) => {
  const { price, carrier, ...otherProperties } = props;
  const priceString = useMemo<string>(() => getCorrectPrice(price), [price]);
  const imgSrc = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div {...otherProperties}>
      <div>{priceString} Р</div>
      <img src={imgSrc} alt="" />
    </div>
  );
};
