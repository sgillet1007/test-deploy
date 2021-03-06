import React from "react";
import DividerHeading from "../components/divider_heading";
import nate from "../images/nate.jpg";
import cass from "../images/cass.jpg";
import rebecca from "../images/rebecca.jpg";
import sam from "../images/sam.jpg";

export default () => {
  return (
    <div>
      <DividerHeading headerText={"The Band"} />
      <img className="headshot" src={nate} alt="" />
      <p className="bio-text bio-title">
        <strong>Nate Sanchez</strong>
        <div>Guitar, Vocals, Songwriter, & Kazoo</div>
      </p>
      <p className="bio-text">
        Representing Washington State, he founded The Constant Tourists with
        Cassie Sanchez in Moses Lake, WA in 2005. He has been writing original
        music since Middle School. Nate taught himself how to play guitar.
        Currently he is considering an overseas trip to brush up on advanced
        kazoo techniques from world famous Kazoo Institution of Madrid.
      </p>

      <img className="headshot" src={cass} alt="" />
      <p className="bio-text bio-title">
        <strong>Cassie Sanchez</strong>
        <div>Accordion, Trumpet, Songwriter, & Vocals</div>
      </p>
      <p className="bio-text">
        Growing up in Colorado Springs, CO music has been a large part of her
        life. All through High School she played Trumpet and maintained first
        chair trumpet for years as well as being part of All State Choir. All
        the while she was playing in a ska band called The Ghetto Cherubs. After
        getting her first Accordion in 2006 she quickly incorporated it into the
        group.
      </p>

      <img className="headshot" src={rebecca} alt="" />
      <p className="bio-text bio-title">
        <strong>Rebecca Jonas</strong>
        <div>Cello</div>
      </p>
      <p className="bio-text">
        Rebecca joined the band back in 2010, after awkwardly introducing herself 
        to Nate and Cass after seeing them perform at the Mercury Cafe late New 
        Year's Eve. After taking some time off, she's excited to be back and 
        figuring out fun and original cello parts with the band.
      </p>

      <img className="headshot" src={sam} alt="" />
      <p className="bio-text bio-title">
        <strong>Sam Gillet</strong>
        <div>Drums, Cymbals, & Waffle Pan</div>
      </p>
      <p className="bio-text">
        Hailing from the mean streets of east Belgium, Sam learned early on how
        to scrap for his next waffle and knows first hand just how vital
        caramelized pearl sugar is to the taste of a true Liège-style gaufre. In
        the rare moments when he isn't contemplating waffle batter, Sam is
        practicing for his next drum solo with the tourists. His secret weapon
        of choice during live shows is a stainless steel food service pan he
        uses as a cowbell.
      </p>
    </div>
  );
};
