import style from './Landing.module.css';
import { Heading } from '@chakra-ui/react';
import { useProductsContext } from '../../contexts/ProductsContext';
import ItemListContainer from '../ItemListContainer';
import Loading from '../Loading';

const Landing = () => {

  const { loading } = useProductsContext();

  return (
    <>
      <div className={style.container}>
        <img
          src="https://cdn-food.tribune.com.pk/gallery/images/Brew%20Coffee%20at%20home/01.jpg"
          alt='img'
        />
      </div>
      <Heading size='lg' fontWeight='light' py='.5em' px='1em' variant='koffie'>
        Enjoy a koffie expience at the bliss of your home ...
      </Heading>
      {loading ?
        <Loading /> :
        <ItemListContainer />
      }
    </>
  );
};

export default Landing;
