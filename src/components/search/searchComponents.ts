import { styled, alpha, InputBase } from "@mui/material";

export const SearchUpperComponent = styled('div')(({ theme }) =>({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.5),
    },
    height:'100%',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}))

export const SearchWrapper = styled('div')(({ theme }) =>({
    padding: theme.spacing(0,4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

export const SearchInputBase = styled(InputBase)(({ theme }) =>({
    color: 'gray',
    backgroundColor: alpha(theme.palette.grey[500],0.5),
    '& .MuiInputBase-input':{
        padding: theme.spacing(1,1,1,1),
        paddingLeft: `calc(1em + ${theme.spacing(8)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
          },
    }
}))