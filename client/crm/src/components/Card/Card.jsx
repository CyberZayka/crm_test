import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    },
    media: {
      height: "360px",
      width: "30%",
      margin: "0 auto"
    },
  });

export function CardCompany({company, mail,  website, removeCard}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Website: {website}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Email: {mail}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={removeCard} >
            Delete
            </Button>
        </CardActions>
        </Card>
    );
}

export function CardEmployee({firstName, lastName, mail, company, phone, index, logo}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Employee №{index + 1}
            </Typography>
            <CardMedia
            className={classes.media}
            image={logo}
            title="logo"
            />
            <Typography variant="body2" color="textSecondary" component="p">
                First name: {firstName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Last name: {lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Company: {company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Email: {mail}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Phone: {phone}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Delete
            </Button>
        </CardActions>
        </Card>
    );
}



