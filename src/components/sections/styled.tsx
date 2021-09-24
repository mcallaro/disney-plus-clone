import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    transition: opacity 500ms ease 0s;
    z-index: -1;
  }
`;

const SectionContainer = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 13px 15px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 20px 29px -16px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const AppBackground = styled.div`
  background-color: rgb(26, 29, 41);
  position: fixed;
  height: 100vh;
  top: 0px;
  transition: opacity 200ms ease 0s;
  width: 100%;
  z-index: -3;
  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 0;
    transition: opacity 500ms ease 0s;
  }
`;

export {
  Container,
  SectionContainer,
  Content,
  Wrap,
  AppBackground
};