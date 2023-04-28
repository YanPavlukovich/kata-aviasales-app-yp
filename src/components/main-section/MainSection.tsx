import { Button, Space } from 'antd';
import { ReactNode, useState, useEffect } from 'react';
import { useTickets } from '../../hooks/use-tickets';
import { useAppDispatch } from '../../hooks/hooks';
import Ticket from '../ticket/Ticket';
import { searchInitiated } from '../../API/search-initiate';
import { fetchTickets, setSearchId } from '../../store/slices/tickets-slice';
import s from './MainSection.module.scss';
import { SortTabs } from '../sort-tabs/SortTabs';

const MainSection = () => {
  const [loading, setLoading] = useState(true);
  const [maxVisible, setMaxVisible] = useState(5);
  const selectedTickets = useTickets();
  const dispatch = useAppDispatch();

  const visibleTickets = selectedTickets.slice(0, maxVisible);
  const ticketsElements: ReactNode = visibleTickets.map((el, i) => (
    <Ticket key={`${el.carrier}_${i}`} {...el} />
  ));

  useEffect(() => {
    searchInitiated().then(({ searchId }) => {
      dispatch(setSearchId(searchId));
      dispatch(fetchTickets(searchId));
    });
  }, []);

  useEffect(() => {
    if (selectedTickets.length) {
      setLoading(false);
      setMaxVisible(5);
    }
  }, [selectedTickets]);

  if (loading) {
    return <div>Загружаем билеты...</div>;
  }

  if (!selectedTickets.length) {
    return <div>Мы ничего не нашли</div>;
  }

  return (
    <div className={s['main-section']}>
      <Space direction="vertical" wrap>
        <SortTabs />
        {ticketsElements}
        <Button
          className={s['main-section__button']}
          onClick={() => setMaxVisible(maxVisible + 5)}
          type="primary"
        >
          Показать еще 5 билетов!
        </Button>
      </Space>
    </div>
  );
};

export default MainSection;
