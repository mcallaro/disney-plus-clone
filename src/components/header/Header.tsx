import { useEffect, useMemo } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from '../../features/userSlice';

import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  DropDown,
  SignOut,
} from './styled';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const userPhoto = useAppSelector(selectUserPhoto);
  const history = useHistory();

  const userInfo = useMemo(() => {
    return {
      name: "mcallaro",
      photo: "/images/mcallaro.png",
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUserLogin(userInfo));
      return;
    }
    history.push("/");
  }, [dispatch, history, userInfo]);

  const signIn = () => {
    dispatch(setUserLogin(userInfo));
    localStorage.setItem("user", "mcallaro");
    history.push("/home");
  };

  const signOut = () => {
    dispatch(setSignOut());
    localStorage.removeItem("user");
    history.push("/");
  };

  const logoClickHandler = () => {
    if (userName) {
      history.push("/home");
      return;
    }
    history.push("/");
  };

  return (
    <Nav>
      <Logo onClick={logoClickHandler}>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src="/images/home-icon.svg" alt="Home" />
              <span>Home</span>
            </Link>
            <Link to="/home">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>Search</span>
            </Link>
            <Link to="/home">
              <img src="/images/watchlist-icon.svg" alt="Watchlist" />
              <span>Watchlist</span>
            </Link>
            <Link to="/home">
              <img src="/images/original-icon.svg" alt="Originals" />
              <span>Originals</span>
            </Link>
            <Link to="/home">
              <img src="/images/movie-icon.svg" alt="Movies" />
              <span>Movies</span>
            </Link>
            <Link to="/home">
              <img src="/images/series-icon.svg" alt="Series" />
              <span>Series</span>
            </Link>
          </NavMenu>
          <SignOut>
            <span style={{ marginRight: "1rem" }}>Profile</span>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <hr style={{ opacity: "0.25" }} />
              <p>
                <Link to="/home">Edit Profile</Link>
              </p>
              <p>
                <Link to="/home">App Settings</Link>
              </p>
              <p>
                <Link to="/home">Account</Link>
              </p>
              <p>
                <Link to="/home">Help</Link>
              </p>
              <p onClick={signOut}>Log out</p>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
