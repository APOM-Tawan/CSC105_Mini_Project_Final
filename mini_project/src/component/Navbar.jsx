// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   drawer: {
//     width: 250,
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();
//   const [isDrawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
//         <div
//           className={classes.drawer}
//           role="presentation"
//           onClick={toggleDrawer}
//           onKeyDown={toggleDrawer}
//         >
//           <List>
//             <ListItem button>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="About" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Services" />
//             </ListItem>
//             <ListItem button>
//               <ListItemText primary="Contact" />
//             </ListItem>
//           </List>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Navbar;
