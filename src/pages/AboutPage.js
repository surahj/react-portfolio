import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

const AboutPage=(props)=>{
    return(
        <>
        <Hero title={props.title} />
        
        <Content><p>Hello, my name is Garrett. I'm a full stack engineer with experience in Angular, AngularJS, Express JS, Node JS, Oracle SQL, MongoDB, and React.</p>

<p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p> </Content>
        </>
       
            
       
        
            
    )

};

export default AboutPage;