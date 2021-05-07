import React from 'react';
import MMA from '../../images/mma.jpg';
import Boxing from '../../images/boxing.jpg';
import Jits from '../../images/jits_2.jpg';
import Kickboxing from '../../images/kickboxing.jpg';
import Wrestling from '../../images/wrestling.jpg';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesH3, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        
        <ServicesContainer id='classes'>
            <ServicesH1>Classes<ServicesH3>IBG offers a variety of classes for students needs.</ServicesH3></ServicesH1>
            
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Boxing}/>
                    <ServicesH2>Boxing</ServicesH2>
                    <ServicesP>This is a small services blurb or what we offer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Jits}/>
                    <ServicesH2>Ju Jitsu</ServicesH2>
                    <ServicesP>This is a small services blurb or what we offer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Wrestling}/>
                    <ServicesH2>Wrestling</ServicesH2>
                    <ServicesP>IBG offers mixed martial arts classes </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Kickboxing}/>
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
