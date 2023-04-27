import { TicketType } from '../../types/tickets';
import { TicketHeader } from './ticket-elements/ticket-header/TicketHeader';
import { TicketContent } from './ticket-elements/ticket-content/TicketContent';
import { Card, Space } from 'antd';
import s from './Ticket.module.scss';

type Props = TicketType;

const Ticket = (props: Props) => {
  const { price, carrier, segments } = props;
  const segmentsElements = segments.map((segment, i) => {
    return <TicketContent key={`${segment.destination}_${i}`} {...segment} />;
  });
  return (
    <Space className={s.ticket} direction="vertical" size={16}>
      <Card title={<TicketHeader price={price} carrier={carrier} />} style={{ width: 502 }}>
        {segmentsElements}
      </Card>
    </Space>
  );
};

export default Ticket;
