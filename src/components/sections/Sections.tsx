import { Link } from "react-router-dom";
import { selectMovies } from "../../features/movieSlice";
import { useAppSelector } from "../../app/hooks";

import { SectionContainer, Content, Wrap } from './styled';

interface TypeProps {
  types: {
    title: string;
    type: string;
  };
}

interface MovieProps {
  id: string;
  title: string;
  cardImg: string;
}

const Sections: React.FC<TypeProps> = (props) => {
  const movies = useAppSelector(selectMovies);
  const filteredMovies = movies.filter(
    (movie: { type: string }) => movie.type === props.types.type
  );
  
  return (
    <SectionContainer>
      <h4>{props.types.title}</h4>
      <Content>
        {filteredMovies.length > 0 &&
          filteredMovies.map((movie: MovieProps) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </SectionContainer>
  );
};

export default Sections;