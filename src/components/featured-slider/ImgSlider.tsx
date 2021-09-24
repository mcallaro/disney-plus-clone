import { selectMovies } from '../../features/movieSlice';
import { useAppSelector } from '../../app/hooks';

import { Link } from 'react-router-dom';
import { Carousel, Wrap } from './styled';

interface MovieProps {
  featured: {
    sliderImg: string;
    sliderLogoImg: string;
    title: string;
  };
  id: string;
}

const ImgSlider: React.FC = () => {
  const movies = useAppSelector(selectMovies);
  const featMovies = movies.filter((movie: MovieProps) => movie.featured);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {featMovies.length > 0 &&
        featMovies.map((movie: MovieProps) => (
          <Wrap key={movie.id}>
            <Link to={`/detail/${movie.id}`}>
              <img src={movie.featured.sliderImg} alt="" />
              <img
                className="image-overlay"
                src={movie.featured.sliderLogoImg}
                alt={movie.featured.title}
              />
            </Link>
          </Wrap>
        ))}
    </Carousel>
  );
};

export default ImgSlider;