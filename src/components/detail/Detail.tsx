import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Background,
  BackgroundOverlay,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from './styled';

interface DetailProps {
  backgroundImg: string;
  title: string;
  titleImg: string;
  subTitle: string;
  description: string;
}

const Detail: React.FC = () => {
  const [movie, setMovie] = useState<DetailProps>();
  const { id } = useParams<{id: string}>();

  const fetchMovieById = useCallback( async () => {
    fetch(`http://localhost:3004/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      setMovie(data);
    });
  }, [id]);

  useEffect(() => {
    fetchMovieById();
  }, [fetchMovieById]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="" />
            <BackgroundOverlay />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt={movie.title} />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
              </Player>
              <AddList>
                <span></span>
                <span></span>
              </AddList>
              <GroupWatch>
                <div>
                  <img src="/images/group-icon.png" alt="" />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>
              <p>{movie.subTitle}</p>
            </SubTitle>
            <Description>
              <p>{movie.description}</p>
            </Description>
          </ContentMeta>
        </>
      )}
    </Container>
  );
};

export default Detail;
