import { useMemo } from 'react';
import { TicketElementType } from '../../../../types/tickets';
import s from './TicketContent.module.scss';

type ColumnProps = {
  head: string;
  content: string;
};

const Column = ({ head, content }: ColumnProps) => {
  return (
    <div className={s['ticket - content__column']}>
      <div className={s['ticket-content__column--head']}>{head}</div>
      <div className={s['ticket-content__column--data']}>{content}</div>
    </div>
  );
};

const formatTimeToHoursAndMinutes = (minutes: number) => {
  const hours = `${Math.floor(minutes / 60)}`;
  const min = `${minutes - +hours * 60}`;

  return `${hours.padStart(2, '0')}:${min.padStart(2, '0')}`;
};

function getPluralForm(n: number, text_forms: string[]) {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return text_forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_forms[1];
  }
  if (n1 == 1) {
    return text_forms[0];
  }
  return text_forms[2];
}

const getCorrectTime = (date: Date) => {
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
};

const calculateFlightTime: (start: Date, duration: number) => [string, string] = (
  start,
  duration
) => {
  const durationInMilliseconds = duration * 60 * 1000;
  const end = new Date(durationInMilliseconds + start.getTime());

  return [getCorrectTime(start), getCorrectTime(end)];
};

type Props = TicketElementType;

export const TicketContent = (props: Props) => {
  const { origin, destination, date, stops, duration } = props;
  const times = useMemo<[string, string]>(
    () => calculateFlightTime(new Date(date), duration),
    [date, duration]
  );
  const stopsString = useMemo<string>(() => {
    return `${stops.length} ${getPluralForm(stops.length, [
      'пересадка',
      'пересадки',
      'пересадок',
    ])}`;
  }, stops);

  return (
    <div className={s['ticket-content']}>
      <Column head={origin + ' - ' + destination} content={times.join(' - ')} />
      <Column head={'В пути'} content={formatTimeToHoursAndMinutes(duration)} />
      <Column head={stopsString} content={stops.join(', ')} />
    </div>
  );
};
