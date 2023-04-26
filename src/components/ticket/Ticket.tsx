import { TicketType } from '../../types/tickets';
import { TicketHeader } from './ticket-elements/ticket-header/TicketHeader';
import { TicketContent } from './ticket-elements/ticket-content/TicketContent';
import { Card, Space } from 'antd';

type Props = TicketType;

const Ticket = (props: Props) => {
  const { price, carrier, segments } = props;
  const segmentsElements = segments.map((segment, i) => {
    return <TicketContent key={`${segment.destination}_${i}`} {...segment} />;
  });
  return (
    <Space direction="vertical" size={16}>
      <Card
        title="Default size card"
        extra={<TicketHeader price={price} carrier={carrier} />}
        style={{ width: 300 }}
      >
        {segmentsElements}
      </Card>
    </Space>
  );
};

export default Ticket;
