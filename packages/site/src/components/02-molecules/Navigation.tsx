import { Drawer, Grid, Hidden, IconButton, List, ListItem, makeStyles, Menu, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { NavigationLink } from '../01-atoms/NavigationLink';
import { NavigationListItem } from '../01-atoms/NavigationListItem';
import { NavigationText } from '../01-atoms/NavigationText';
import { ParentProps } from '../01-atoms/ParentProps';
import { RouterMenuItem } from '../01-atoms/RouterMenuItem';

const useStyles = makeStyles((theme: Theme) => ({
  horizontalNav: {
    maxWidth: '490px',
    minWidth: '390px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

export const Navigation: React.FC<ParentProps> = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState<boolean>(false);

  const openServicesMenu = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const ServicesMenuItems = [
    <RouterMenuItem key='managed-services' to='/managed-services' onClick={handleClose}>Managed IT Services</RouterMenuItem>,
    <RouterMenuItem key='remote-staffing' to='/remote-staffing' onClick={handleClose}>Remote IT Staffing</RouterMenuItem>,
    <RouterMenuItem key='it-projects' to='/it-projects' onClick={handleClose}>IT Projects & Deployments</RouterMenuItem>,
  ]

  return (
    <>
      <Hidden xsDown>
        <Grid container item justify='space-between' className={classes.horizontalNav}>
          <NavigationLink to='/home'>Home</NavigationLink>
          <NavigationLink onClick={openServicesMenu} onMouseOver={openServicesMenu}>Services</NavigationLink>
          <NavigationLink to='/about-us'>About Us</NavigationLink>
          <NavigationLink to='/testimonials'>Testimonials</NavigationLink>
          <NavigationLink to='/contact-us'>Contact Us</NavigationLink>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <IconButton edge="start" onClick={() => setMobileMenuVisible(true)}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div>
          {ServicesMenuItems}
        </div>
      </Menu>
      <Drawer anchor='right' open={mobileMenuVisible} onClose={() => setMobileMenuVisible(false)}>
        <List>
          <NavigationListItem to='/home' onClick={() => setMobileMenuVisible(false)}>Home</NavigationListItem>
          <ListItem><NavigationText>Services</NavigationText></ListItem>
          <List className={classes.nested}>
            <NavigationListItem to='/managed-services' onClick={() => setMobileMenuVisible(false)}>Managed IT Services</NavigationListItem>
            <NavigationListItem to='/remote-staffing' onClick={() => setMobileMenuVisible(false)}>Remote IT Staffing</NavigationListItem>
            <NavigationListItem to='/it-projects' onClick={() => setMobileMenuVisible(false)}>IT Projects & Deployments</NavigationListItem>
          </List>
          <NavigationListItem to='/about-us' onClick={() => setMobileMenuVisible(false)}>About Us</NavigationListItem>
          <NavigationListItem to='/testimonials' onClick={() => setMobileMenuVisible(false)}>Testimonials</NavigationListItem>
          <NavigationListItem to='/contact-us' onClick={() => setMobileMenuVisible(false)}>Contact Us</NavigationListItem>
        </List>
      </Drawer>
    </>
  );
}