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
    if (dark) {
      document.getElementsByTagName('html')[0].style.background = '#121212';
    } else {
      document.getElementsByTagName('html')[0].style.background = 'white';
    }
    setDark(!dark);
    localStorage.setItem(
      'darkmode',
      JSON.stringify({ dark: dark ? false : true }),
    );
  };

  React.useEffect(() => {
    const cachedToggle = localStorage.getItem('darkmode');
    if (cachedToggle) {
      const cachedToggleJSON = JSON.parse(cachedToggle);
      setDark(cachedToggleJSON.dark);
      if (!cachedToggleJSON.dark) {
        document.getElementsByTagName('html')[0].style.background = '#121212';
      }
    }
  }, [dark])

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
