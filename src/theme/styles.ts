import { styled } from '@mui/material/styles';
import { Box, List, ListItem, Link } from '@mui/material';
import type { Theme } from '@mui/material';

export const HeaderContainer = styled(Box)(() => ({
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
}));

export const NavigationList = styled(List)(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.breakpoints.down('sm') ? '10px' : '75px',
    paddingLeft: theme.breakpoints.down('sm') ? '10px' : '45px',
    paddingRight: theme.breakpoints.down('sm') ? '10px' : '40px',
}));

import type { LinkProps } from '@mui/material/Link';
export const NavigationLink = styled(Link)<LinkProps>(({ theme }: { theme: Theme }) => ({
    fontWeight: 200,
    fontSize: '1rem',
    position: 'relative',
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.text.primary,
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#7a8c89',
        borderRadius: '5px',
        transform: 'scaleX(0)',
        transformOrigin: '100% 50%',
        transition: 'transform 0.5s cubic-bezier(0.52, 1.64, 0.37, 0.66)',
    },
    '&:hover:before': {
        transform: 'scaleX(1)',
    },
}));

import type { ListItemProps } from '@mui/material/ListItem';
export const NavigationItem = styled(ListItem)<ListItemProps>(({ theme }: { theme: Theme }) => ({
    paddingLeft: '30px',
    paddingRight: '30px',
    fontWeight: 600,
    color: 'rgba(220, 220, 220, 0.726)',
    cursor: 'pointer',
    position: 'relative',
    transition: 'color 0.5s',
    '&:hover': {
        color: theme.palette.common.white,
    },
}));