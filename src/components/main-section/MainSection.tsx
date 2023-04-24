import { Button, Radio, Space } from 'antd';

const MainSection = () => {
  return (
    <div>
      <Radio.Group>
        <Radio.Button value="cheap">Самый дешевый</Radio.Button>
        <Radio.Button value="fast">Самый быстрый</Radio.Button>
        <Radio.Button value="optimum">Оптимальный</Radio.Button>
      </Radio.Group>
      <div>TicketsElements</div>
      <Space wrap>
        <Button type="primary">Показать еще 5 билетов</Button>
      </Space>
    </div>
  );
};

export default MainSection;
