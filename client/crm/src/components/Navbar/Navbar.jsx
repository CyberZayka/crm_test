import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Avatar } from '@material-ui/core';

import Main from "../../pages/Main/Main";
import Employees from "../../pages/Employees/Employees"
import Companies from "../../pages/Companies/Companies"
import About from "../../pages/About/About"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100%",
    position: "fixed"
  },
  tabPanel: {
    backgroundColor: "lavender",
    padding: "65px",
    position:"relative",
    marginLeft: "335px"
  },
  logo: {
    width: "100%",
    height: "250px",
    marginBottom: "50px"
  }
}));

export default function VerticalTabs({isAuth, logo}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    isAuth &&
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
          <Avatar alt="crm_logo" src={logo} className={classes.logo} />
          <Tab component={Link} to="/api/main" label="Home" {...a11yProps(1)} />
          <Tab component={Link} to="/api/companies" label="Companies" {...a11yProps(2)} />
          <Tab component={Link} to="/api/employees" label="Employees" {...a11yProps(3)} />
          <Tab component={Link} to="/api/about" label="About" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <Main />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel} >
         <Companies />
      </TabPanel> 
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        <Employees />
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanel}>
        <About />
      </TabPanel>
    </div>
  );
}