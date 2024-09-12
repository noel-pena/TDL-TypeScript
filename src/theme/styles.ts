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
        backgroundColor: '#717f7c',
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

export const ItemContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '10px',
    background: '#7a8c89',
    boxShadow: '20px 20px 60px #687774, -20px -20px 60px #8ca19e',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
    },
}));

export const ItemBox = styled(Box)(() => ({
    height: '75px',
    width: '100%',
    textAlign: 'left',
    borderBottom: '1px solid rgba(90, 90, 90, 0.48)',
    color: '#dadada',
    display: 'flex',
    alignItems: 'center',
    transition: 'max-height ease 0.3s',
}));

export const ItemRow = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
}));

export const CheckboxLabel = styled('label')(() => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
}));

export const ItemText = styled(Box)(() => ({
    fontWeight: 300,
    fontSize: '1rem',
    cursor: 'pointer',
    flexGrow: 1,
    paddingLeft: '10px',
    transition: 'ease-in-out 0.2s',
    '&:hover': {
        textShadow: '10px 10px 20px rgba(255, 255, 255, 0.71)',
    },
    '@media (min-width: 530px)': {
        fontSize: '1.25rem !important',
    },
}));