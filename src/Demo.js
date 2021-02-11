
/* eslint-disable max-len,no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const PostCard02 = (props) => (




  (<Card className={"MuiPostCard--02"}>
    <CardMedia
      className={"MuiCardMedia-root"}
      image={
        props.project.image
      }
    />
    <CardContent className={"MuiCardContent-root"}>
      <Typography className={"MuiTypography--date"} variant={"overline"}>
        October  2020
      </Typography>
      <Typography
        className={"MuiTypography--heading"}
        variant={"h6"}
        gutterBottom
      >
        {props.project.name}
      </Typography>
      <Typography className={"MuiTypography--subheading"}>
        {props.project.desc}
      </Typography>

      <Button className={"MuiButton--readMore"}
        onClick={event => window.location.href = props.project.address}
      >See Code</Button>
    </CardContent>
  </Card>)


);


PostCard02.getTheme = muiBaseTheme => ({
  MuiCard: {
    root: {
      "&.MuiPostCard--02": {
        borderRadius: muiBaseTheme.spacing.unit * 2, // 16px
        transition: "0.3s",
        boxShadow: "14px 14px 80px rgba(34, 35, 58, 0.2)",
        width: "95%",
        position: "relative",
        maxWidth: 800,
        margin: "60px auto",
        overflow: "initial",
        background: "#2a113bff",
        display: "flex",
        alignItems: "center",
        padding: `${muiBaseTheme.spacing.unit * 2}px`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
        },
        "& .MuiCardMedia-root": {
          flexShrink: 0,
          width: "50%",
          paddingTop: "40%",
          transform: "translateX(-10%)",
          boxShadow: "4px 4px 10px 1px rgba(252, 56, 56, 0.2)",
          borderRadius: muiBaseTheme.spacing.unit * 1, // 16
          backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          backgroundColor: muiBaseTheme.palette.common.white,
          overflow: "hidden",
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            //backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: muiBaseTheme.spacing.unit * 2, // 16
            opacity: 0.5
          }
        },
        "& .MuiCardContent-root": {
          textAlign: "left",
          //paddingLeft: 0,
          padding: muiBaseTheme.spacing.unit * 2,
          color: "white"
        },
        "& .MuiTypography--heading": {
          fontWeight: "bold",
          color: "white"
        },
        "& .MuiTypography--subheading": {
          marginBottom: muiBaseTheme.spacing.unit * 2
        },
        "& .MuiButton--readMore": {
          //backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
          background: "#0b032dff",
          boxShadow: "0px 4px 32px rgba(252, 56, 56, 0.4)",
          borderRadius: 100,
          paddingLeft: 24,
          paddingRight: 24,
          color: "#c4fff9ff"
        }
      }
    }
  }
});
PostCard02.metadata = {
  name: "Post Card II",
  description: "Personal Post",
  credit: "https://codemyui.com/gradient-card-ui-image-info-slider/"
};


export default PostCard02;
