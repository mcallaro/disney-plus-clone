import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100vw;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const BackgroundOverlay = styled.div`
  background-image: radial-gradient(
    farthest-side at 73% 21%,
    transparent,
    rgb(26, 29, 41)
  );
  position: absolute;
  inset: 0px;
`;

const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  -webkit-box-pack: start;
  margin: 0 auto;
  padding-bottom: 24px;
  height: 30vw;
  min-height: 170px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;
    img {
      width: 25px;
    }
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  &:hover {
    background-color: white;
    span {
      background-color: rgb(0, 0, 0);
    }
  }
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  cursor: pointer;
  border-radius: 50%;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    &:hover {
      background: white;
      img {
        filter: invert(1);
      }
    }
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  align-items: center;
  display: flex;
  min-height: 20px;
  color: rgb(249, 249, 249);
  letter-spacing: initial;
  line-height: normal;
  font-family: inherit;
  font-size: 15px;
  margin: 0px;
  max-width: inherit;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  padding: 16px 0px 0px;
  margin: 0px;
  cursor: inherit;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.4;
`;

export {
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
  Description
};