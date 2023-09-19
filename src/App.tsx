import React from 'react';
// import ReactGA from 'react-ga';
import './App.css';
import Image from './assets/spencercorwin.jpeg';
import Links from './Links';
import AboutMe from './AboutMe';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  align-items: flex-start;
  padding-left: 15px;
  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
  }
`;

const App = () =>  {
  const [dark, setDark] = React.useState(true);
  const toggleDarkMode = () => {
    const newDark = !dark;
    newDark ? setToDark() : setToLight();
  };
  const setToDark = () => {
    document.getElementsByTagName('html')[0].style.background = 'white';
    setDark(true);
    localStorage.setItem(
      'darkmode',
      JSON.stringify({ dark: true }),
    );
  };
  const setToLight = () => {
    document.getElementsByTagName('html')[0].style.background = '#121212';
    setDark(false);
    localStorage.setItem(
      'darkmode',
      JSON.stringify({ dark: false }),
    );
  };

  React.useEffect(() => {
    const cachedToggle = localStorage.getItem('darkmode');
    if (cachedToggle != null) {
      const cachedToggleJSON = JSON.parse(cachedToggle);
      cachedToggleJSON.dark ? setToDark() : setToLight();
    } else {
      setToLight();
    }
  }, []);

    return (
      <div
        className={
          dark
            ? 'body-container light-body'
            : 'body-container dark-body'
        }
      >
        <div className='body'>
          <h1 id='h1-title'>Spencer Corwin</h1>
          <div className='tagline-container'>
            <div id='toggle-placeholder' />
            <p className='tagline'>
              Software Engineer
            </p>
            <button
              className={
                dark
                  ? 'toggle-button toggle-button-dark'
                  : 'toggle-button toggle-button-light'
              }
              onClick={toggleDarkMode}
            >
              Toggle {dark ? 'Dark' : 'Light'} Mode
            </button>
          </div>
          <div id='top'>
            <img id='image' src={Image} alt='Spencer Corwin headshot' />
            <Content>
              <Links />
              <AboutMe />
            </Content>
          </div>
        </div>
      </div>
    );
}

export default App;
