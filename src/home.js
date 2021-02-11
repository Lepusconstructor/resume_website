import React from 'react'
import "./home.css";
import { Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


function home() {
  const usestyles = makeStyles({
    bio: {
      backgroundColor: "black",
      margin: "20px 20px",
      color: "white",
    },

  });

  const classes = usestyles();
  return (
    <div className="root">
      <Card className={classes.bio}>
        <div className="image1"> <img src="IMG_1658.jpg" alt="Honey's photos" />
        </div>

        <div className="head">
          <h3>
            Bio
        </h3>
          <p>
            Recent graduate from Carleton University in Biomedical and Electrical Engineer with specialization in software development. Presently taking a 3-month intensive Full Stack Developer Bootcamp certification from Lighthouse Labs. Experience in image processing, front and back end development, unit testing and circuit design by working on multiple projects. As an engineering graduate real-world solving problem is my passion by getting full stack developer certification, I have the skills to solve problems by making software’s and web application. Seeking an opportunity to work with a company to apply my full stack and image processing skills.
        </p>
        </div>
      </Card>
      <div className="title">
        <h3>
          Skills
        </h3>
      </div>
      <div className="skills">


        <div className="image2">
          <img src="css.svg" />
        </div>
        <div className="image3">
          <img src="html.png" />
        </div>
        <div className="image4">
          <img src="logo192.png" />
        </div>
        <div className="image5">
          <img src="Postgresql.svg" />
        </div>
        <div className="image6">
          <img src="materialUi.svg" />
        </div>
        <div className="image7">
          <img src="nodejs.png" />
        </div>
        <div className="image8">
          <img src="bootstarp.png" />
        </div>
        <div className="image9">
          <img src="python.png" />
        </div>
      </div>
    </div >
  )
}

export default home
