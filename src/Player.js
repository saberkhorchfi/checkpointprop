import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({info}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://s.yimg.com/fz/api/res/1.2/IfHPji1C1Il0NM5LyT_UQg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE2NQ--/https://s.yimg.com/zb/imgv1/880eb131-c93c-3bb5-98e5-076c4f996c4f/t_500x300" />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
        {info.age}
        </Card.Text>
        <Card.Text>
        {info. nationality}
        </Card.Text>
        <Card.Text>
        {info.numero}
        </Card.Text>
        <Button variant="primary">{info.team}</Button>
      </Card.Body>
    </Card>
  );
}

export default Player;