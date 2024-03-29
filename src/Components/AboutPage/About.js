import React from 'react';
import styled from 'styled-components';

import img from '../../Images/cvNew';

const ProjectContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: .5rem;
    margin-top: 0rem;
    background: linear-gradient(to right, #0B0C10, #1F2833);
    color: #66FCF1;


    h2 {
        animation: growIn 2s;
        margin-top: 2%;
        @media (max-width: 888px) {
            width: 100vw;
            text-align: center;
            position: relative;
            top: 3%;
            
        }
    }

    @keyframes growIn {
        0% {
            color: linear-gradient(to right, #0B0C10, #1F2833);
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const FullWidthContainer = styled.div`
        width: 100vw;
        height: 40%;
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        @media (max-width: 888px) {
            width: 100%;
            height: 50%;
            padding-top: 1rem;
            
        }
    `;

    const ImgContainer = styled.div`
        width: 180px;
        height: 180px;
        background-image: url('${img}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        // transform: scale(1);
        border-radius: 50%;
        border: #45A29E 3px solid;
        box-shadow: 7px 2px 10px;

        // position: absolute;
        // left:28%;
        // top: 24%;

        // for tablet
        @media (max-width: 1100px) {
            // position: absolute;
            // top 27%;
            width: 160px;
            height: 160px;
        }

        //mobile
        @media (max-width: 888px) {
            // left: 57%;
            // top: 22%;
            width: 130px;
            height: 130px;
        }

    `;

    /* Holds all of the text elements bar the header */
    const CenteredContainer = styled.div`
        width: 50%;
        height: auto;
        font-size: 1rem;
        padding-top: 2rem;
        margin-left: 80px;
        display: flex;
        flex-direction: column;

        @media (max-width: 888px) {
            width: 80%;
            margin: 0;
            padding-top: 1rem;
        }

        p {
            color: white;
        }

        span {
            color: #66FCF1;
        }

        .pLeft {
            text-align: left;
            width: 48%;

            //mobile
            @media (max-width: 888px) {
                padding-left: 0rem;
                margin-top: 0rem;
                font-size: .8rem;
            }
        }

        .row {
            display: flex;
            flex-direction: row;

        }

        //main about holds the bio paragraph
        .mainAbout {
            width: 100%;
            height: auto;
            word-wrap: break-word;
            text-align: left;
            font-size: 1.2rem;
            // padding-top: 1rem;
            color: white;
            margin-top: 4rem;

            //tablet
            @media (max-width: 888px) {
                width: 80%;
                font-size: 1.2rem;
                padding-right: 2rem;
                margin-top: 3rem;
            }

            @media (max-width: 600px) {
                font-size: .9rem;
            }
        }
    `;

const About = () => {
    return (
        <ProjectContainer>
            <h2> About</h2>
            <FullWidthContainer>
            
                <CenteredContainer>
                    <div class='row'>
                    <div class='column'>
                    <p className='pLeft'><span>Born</span>: 19th April 1995.</p>
                    <p className='pLeft'><span>Living in</span>: Nelson, NZ.</p>
                    <p className='pLeft'><span>Birth Place</span>: Port Moresby, Papua New Guinea.</p>
                    </div>
                <ImgContainer></ImgContainer>
                    </div>
                    <p className='mainAbout'>
                        A 26 year old with a thirst for knowledge, 
                        a bubbly personality and a never give-up attitude. 
                        I pride myself on my work, progessing daily to continue 
                        to be proud of the work I do and how far I have come, 
                        currently within the hospitality industry I am slowly 
                        progressing toward finding a job within the I.T industry, 
                        by building my skills and finding enjoyment in fixing bugs 
                        both within my code and life.</p>
                </CenteredContainer>
            </FullWidthContainer>
        </ProjectContainer>
    )
}

export default About;