import logo from './assets/icon/logo.svg';
import sliderImg1 from './assets/slider/slider1.png';
import sliderImg2 from './assets/slider/slider2.png';
import sliderImg3 from './assets/slider/slider3.png';
import './App.css';
import { Carousel, Modal, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';
import {Item} from './components/Item';
import foto from './assets/foto/tesla.png';
import speed from './assets/foto/speed.png';
import advantage from './assets/foto/advantag.png';
import salon from './assets/foto/salon.png';
import {Card} from './components/Card';
import {useState} from 'react';


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 filter"
              src={sliderImg1}
              alt="First slide"
            />
            <Carousel.Caption>
              <img
              src={logo}
              />
              <h1 className="mt-3 mb-3 hideBlock title_h1">Roadster</h1>
              <p className="mb-1 hideBlock">Самый быстрый  </p>
              <p className="mb-1 hideBlock">автомобиль в мире, c</p>
              <p className="mb-1 hideBlock">рекордным ускорением, </p>
              <p className="mb-1 hideBlock"> дальностью и</p>
              <p className="mb-5 hideBlock">производительностью.</p>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 filter"
              src={sliderImg2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <img
              src={logo}
              />
              <h1 className="mt-3 mb-3 hideBlock title_h1">Roadster</h1>
              <p className="mb-1 hideBlock">Самый быстрый  </p>
              <p className="mb-1 hideBlock">автомобиль в мире, c</p>
              <p className="mb-1 hideBlock">рекордным ускорением, </p>
              <p className="mb-1 hideBlock"> дальностью и</p>
              <p className="mb-5 hideBlock">производительностью.</p>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100 filter"
              src={sliderImg3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <img
              src={logo}/>
              <h1 className="mt-3 mb-3 hideBlock title_h1">Roadster</h1>
              <p className="mb-1 hideBlock">Самый быстрый  </p>
              <p className="mb-1 hideBlock">автомобиль в мире, c</p>
              <p className="mb-1 hideBlock">рекордным ускорением, </p>
              <p className="mb-1 hideBlock"> дальностью и</p>
              <p className="mb-5 hideBlock">производительностью.</p>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </header>
      <section className="p_bt">
        <div className="container ">
          <div className="flex">
            <div>
              <Item 
                title="Двигатель"
                num="2,1 "
                desr="разгон до 100 км"
                notation="сек"
              />
            </div>
            <div> 
              <Item 
                title="Батарея"
                num="1000"
                desr="запас хода"
                notation="км"
              />
            </div>
            <div>
              <Item 
                title="Скорость"
                num="400 "
                desr="макс скорость"
                notation="км/ч"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <img 
        src={foto}
        className="filter img"
        />
      </section>
      <section className="container ">
        <div className="flexSB p_bt">
          <div className="col1">
            <h2 className="title_h2 Red m_tit">Скорость</h2>
            <p className="mb-1 ">Самый </p>
            <p className="mb-1">быстроразгоняющийся</p>
            <p className="mb-1">серийный автомобиль</p> 
            <p className="mb-4">из когда-либо созданных</p>
          </div>
          <div className="col2">
            <img 
              src={speed}
              className="filter img "
            />
          </div>
        </div>
      </section>
      <section className="container ">
        <div className="flexSB">
        <div className="col1">
            <img 
              src={advantage}
              className="filter img "
            />
          </div>
          <div className="col2 mt-2">
            
            <p className="mb-1 ">Датчик дождя</p>
            <p className="mb-1">Датчик света</p>
            <p className="mb-1">Автопилот</p> 
            <p className="mb-1">Навигационная система</p>
            <p className="mb-1">Обогрев зеркал</p>
            <p className="mb-1">Усилитель руля</p>
            <p className="mb-1">Панорамная крыша</p>
            <p className="mb-4">Ксеноновые фары</p>
            <h2 className="title_h2 Red" >Преимущества</h2>
          </div>
          
        </div>
      </section>
      <section className="container p_bt">
        <img 
        src={salon}
        className="filter img"
        />
      </section>
      <section className="container p_b">
        <div className="flexSB">
          <div className="col1 ">
          <Card 
              number="01"
              text="Новый родстер был разработан бывшим дизайнером Mazda Францем фон Хольцхаузеном. Имеет съёмную стеклянную крышу и кузов с двумя передними сиденьями плюс два небольших сиденья сзади."
            />
          </div>
          <div className="col2">
          <Card 
              number="02"
              text="Родстер имеет три электродвигателя, один спереди и два сзади, Они обеспечивают полный привод, а также систему адресного распределения крутящего момента для лучшего прохождения поворотов."
            />
          </div>
        </div>
      </section>
        
      <footer className="bg-red pt-5 pb-5">
        <div className="container">
          <Button
            onClick={handleShow}
            name="Хочу тест драйв"
            className="button" 
          >
            Хочу тест драйв
          </Button>
        </div>
      </footer>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h4 className="Red" >Форма для заказа</h4>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control type="email" placeholder="Ваш email" className="mb-3"/>
              <Form.Control type="tel" placeholder="+7(910)-000-000-00" />  
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="outline-danger" className="" onClick={handleClose}>
              Заказать звонок
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

export default App;
