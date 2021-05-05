import React from 'react';
import Icon4 from '../../images/trophy.jpeg';
import MMA from '../../images/mma.jpeg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesH3, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='classes'>
            <ServicesH1>Classes<ServicesH3>IBG offers a variety of classes for students needs.</ServicesH3></ServicesH1>
            
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={MMA}/>
                    <ServicesH2>Boxing</ServicesH2>
                    <ServicesP>This is a small services blurb or what we offer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={MMA}/>
                    <ServicesH2>Ju Jitsu</ServicesH2>
                    <ServicesP>This is a small services blurb or what we offer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={MMA}/>
                    <ServicesH2>Wrestling</ServicesH2>
                    <ServicesP>IBG offers mixed martial arts classes </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={MMA}/>
                    <ServicesH2>Cardio Kickboxing</ServicesH2>
                    <ServicesP>IBG offers mixed martial arts classes </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={MMA}/>
                    <ServicesH2>MMA</ServicesH2>
                    <ServicesP>IBG offers mixed martial arts classes </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
