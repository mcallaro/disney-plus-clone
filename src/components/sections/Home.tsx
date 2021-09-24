import { useEffect, useCallback } from 'react';
import { Container } from './styled';
import { movieTypes, setMovies, setTypes } from '../../features/movieSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import ImgSlider from '../featured-slider/ImgSlider';
import Categories from '../categories/Categories';
import Sections from './Sections';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const sectionTypes = useAppSelector(movieTypes);
  
  const fetchMovies = useCallback(async () => {
    fetch("http://localhost:3004/movies")
      .then(response => response.json())
      .then(data => {
        dispatch(setMovies(data));
    });
  }, [dispatch]);

  const fetchTypes = useCallback(async () => {
    fetch("http://localhost:3004/types")
      .then(response => response.json())
      .then(data => {
        dispatch(setTypes(data));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchMovies();
    fetchTypes();
  }, [fetchMovies, fetchTypes]);

  return (
    <>
      <Container>
        <ImgSlider />
        <Categories />
        {sectionTypes.length > 0 &&
          sectionTypes.map((sectionType, index) => (
            <Sections key={index} types={sectionType} />
          ))}
      </Container>
    </>
  );
};

export default Home;