import { useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';

import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/store";
import {deepOrange} from "@mui/material/colors";

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);


function HeaderUserbox() {
  const user = useSelector((state: RootState) => state.user.user);

  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const avatarColor = deepOrange[500]
  return (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar sx={{ bgcolor: avatarColor }}>
          {user.name.charAt(0)}
        </Avatar>
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/*<MenuUserBox sx={{ minWidth: 210 }} display="flex">*/}
        {/*  <Avatar sx={{ bgcolor: avatarColor }}>*/}
        {/*    {user.name.charAt(0)}*/}
        {/*  </Avatar>*/}
        {/*  <UserBoxText>*/}
        {/*    <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>*/}
        {/*  </UserBoxText>*/}
        {/*</MenuUserBox>*/}
        {/*<Divider sx={{ mb: 0 }} />*/}
        {/*<List sx={{ p: 1 }} component="nav">*/}
        {/*  <ListItem button to="/management/profile/details" component={NavLink}>*/}
        {/*    <AccountBoxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="My Profile" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem*/}
        {/*    button*/}
        {/*    to="/dashboards/messenger"*/}
        {/*    component={NavLink}*/}
        {/*  >*/}
        {/*    <InboxTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Messenger" />*/}
        {/*  </ListItem>*/}
        {/*  <ListItem*/}
        {/*    button*/}
        {/*    to="/management/profile/settings"*/}
        {/*    component={NavLink}*/}
        {/*  >*/}
        {/*    <AccountTreeTwoToneIcon fontSize="small" />*/}
        {/*    <ListItemText primary="Account Settings" />*/}
        {/*  </ListItem>*/}
        {/*</List>*/}
        {/*<Divider />*/}
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Cerrar Sesión
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderUserbox;
