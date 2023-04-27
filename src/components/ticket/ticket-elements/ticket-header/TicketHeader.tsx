import { useMemo } from 'react';
import s from './TicketHeader.module.scss';

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
  const imageSource = `https://pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={s['ticket-header']} {...otherProperties}>
      <div className={s['ticket-header__price']}>{priceString} Р</div>
      <img src={imageSource} alt="Логотип авиакомпании" />
    </div>
  );
};
