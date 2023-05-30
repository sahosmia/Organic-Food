import React from 'react'
import PageBanner from "../component/tools/PageBanner";
import AboutSection from "../component/About";
import WhyChoose from '../component/WhyChoose';
import Teams from '../component/Teams';
import AboutOffer from '../component/AboutOffer';

function About() {
  const teams = [
    {
      src: "/img/team/two.jpg",
      name: "Giovani Bacardo",
      title: "Farmar",
      facebook: "",
      instragram: "",
    },
    {
      src: "/img/team/three.jpg",
      name: "Giovani Bacardo",
      title: "Detective",
      facebook: "",
      instragram: "",
    },
    {
      src: "/img/team/five.jpg",
      name: "Giovani Bacardo",
      title: "Designer",
      facebook: "",
      instragram: "",
    },
  ];
  return (
    <div>
      <PageBanner bg="bg-banner-about" title="About Us" />
      <AboutSection />
      <WhyChoose />
      <Teams teams={teams} />
      <AboutOffer />
    </div>
  );
}

export default About