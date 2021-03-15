
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Projects from './Components/ProjectsPage/Projects';
import About from './Components/About/About';
import PageBtn from './Components/Button/PageButton/PageButton';

import Icons from './Components/Icons/Icons';


const DisplayArea = styled.div`
  width: 100%;
  height: 100vh;
  color: #66FCF1;
  display: flex;
  justify-content: center;

  .hideIt {
    visibility: hidden;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 2rem;

  .landing {
    height: 50vh;
    padding-left: 8.5rem;
    opacity: 1;
    position: relative;
    top: 18%;
    animation: SlideIn 1.4s ease-out;
    animation-delay: .2s;
    animation-fill-mode: backwards;

    h1, h3 {
      position: relative;
      z-index: 10;

    }

    @media(max-width: 888px) {
      padding-left: 0;
      top: 0%;

      h1, h3 {
        font-size: 2.5rem;
      }
      }
      
    }

  }

  @keyframes SlideIn {
    0% {position: relative; top: -10%; opacity: 0; font-size: 3rem;
      z-index: 105;}
    
    50% {font-size: 2rem; position: relative; top:40%;
      left: 0%;
      z-index: 105;}
    100% {opacity: 1; position: relative;
      z-index: 10;}
  } 

  
  
`;



const FullWidthContainer = styled.div`
        height: 100vh;
        display: flex;
        justify-content: center;
        
      `;

      const NavCircleContainer = styled.div`
        width: 15vw;
        position: fixed;
        left: 40%;
        bottom: 8%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        div{
          width:0.7rem;
          height: 0.7rem;
          background: white;
          color: black;
          border-radius: 50%;
          text-align: center;
          padding: 4px;
        }

        .active{
          background: #66FCF1;
        }

        .opacity {
          opacity: 0.2;
          width: 0.3rem;
          height: 0.3rem;
          color: none;
        }

      
      `;

const App = () => {

  const [pageToRender, setPageToRender] = useState('landing');
  const [switchDirection, setSwitchDirection] = useState('');
  const [mobile, setMobile] = useState('');


  useEffect(() => {
    let currentPage = pageToRender;
    let direction = switchDirection;

    if(direction === 'next') {
      if(currentPage === 'landing') {
        setPageToRender('project')
      } else if(currentPage === 'about') {
        setPageToRender('landing')
      } else if(currentPage === 'project') {
        setPageToRender('about')
      }
    } else if(direction === 'back') {
      if(currentPage === 'landing') {
        setPageToRender('about')
      } else if(currentPage === 'about') {
        setPageToRender('project')
      } else if(currentPage === 'project') {
        setPageToRender('landing')
      }
    }
  })
  
  //callback that retrieves the childs state which is the current page to render
  const pageStateCallback = (props) => {
      const pageDirection = props;

      setSwitchDirection(pageDirection)
      console.log(pageDirection);
  
      
  }

    function FixedButtons() {
      return (
          <div>
            <PageBtn 
              title={'Back'} 
              sendStateBack={pageStateCallback}
              pageVal={'back'}
              // onClick={handleClick}
              css={
              {
                bottom: '40%',
                left: 0,
                paddingLeft: '2rem'
                }
              } />
            <PageBtn 
              title={'Next'} 
              sendStateBack={pageStateCallback}
              pageVal={'next'}
              css={
                {
                  bottom: '40%', 
                  right: 0,  
                  paddingRight: '2rem', 
                  animationDelay: '1.5s'
                  }
              } />
              
          </div>
      )
    }

    function PageNavCircles() {
      return (
        <>
            <FullWidthContainer>
              <NavCircleContainer >
                <div className={`${pageToRender === 'about' ? 'active' : 'opacity'}`}></div>
                <div className={`${pageToRender === 'landing' ? 'active' : 'opacity'}`} ></div>
                <div className={`${pageToRender === 'project' ? 'active' : 'opacity'}`}></div>
              </NavCircleContainer >
            </FullWidthContainer>
        </>
      )
    }

    const LandingPage = () => {
      return (
        <>
          <div className='landing'>
            <h1>Noel Williams</h1>
            <h3>Web Developer</h3>
          </div>
        </>
      )
    }

    //listens for resize event and sets the current state
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 888) {
        setMobile('mobile'); 
      }else {
        setMobile('notMobile');
      }
    })

    window.addEventListener('onLoad', () => {
      if(window.innerWidth <= 888) {
        setMobile('mobile'); 
      }else {
        setMobile('notMobile');
      }
    })

  return (
    <div className="App">
      <DisplayArea>
          {FixedButtons()}
          {PageNavCircles()}
        <MainContent>
          {pageToRender === 'about' && <About />}
                                                              {/*if in mobile render the coloured icons only else render the left and right icon components*/}
          {pageToRender === 'landing' && <><LandingPage /> 
          {mobile === 'mobile' ?
          <Icons className={'spinner'}  css={{right: '8%', }}></Icons> : 
          <><Icons className='left-icons' css={{
            transform: 'rotate(45deg) scaleX(-1)',
            left: '3%', 
            opacity: '0.5', 
            color: 'black', 
            'zIndex': '0',
            'backfaceVisibility': 'visible',
            }} color={{color: 'black'}}/> <Icons css={{right: '8%', }}/></>}</>}

          {pageToRender === 'project' && <Projects />}  
            
            {/* look at extracting the icon components
            and adding them to a separate function that checks screen size 
            and displays both on desktop and only 1 of the components below
            header. */}
          
        </MainContent>

      </DisplayArea>

    </div>
  );
}

export default App;
