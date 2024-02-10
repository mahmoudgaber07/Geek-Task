import React from 'react'
import { Box, Typography, Divider } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { MonetizationOn } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export const ContentFilter = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {[{ title: '$Tsla', icon: <MonetizationOn /> }, { title: '200 Contact', icon: <DescriptionIcon /> }, { title: '12.2', icon: <WaterfallChartIcon /> }, { title: 'Heigh Risk', icon: <CurrencyExchangeIcon /> }].map((item) => (
                    <React.Fragment key={item.title}>
                        <Typography variant='h5' align='center' sx={{ fontFamily: 'Inter' }}><span style={{ padding: '0 10px' }}>{item.icon}</span>{item.title}</Typography>
                        {item.title !== 'Heigh Risk' && <Divider orientation="vertical" color="#fff" flexItem />}
                    </React.Fragment>
                ))}
            </Box>
            <Box sx={{ paddingY: 3 }}>
                <Typography variant='p' sx={{ fontFamily: 'Poppins' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iste amet vel at, ipsum, voluptas sit magni molestiae omnis illum, corrupti officia autem a sunt. Officia voluptatibus quae nisi saepe!</Typography>
            </Box>
            <List>
                {['Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit1.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit2.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit3.'].map((item) => (
                    <ListItem key={item} sx={{ border: '1px solid #fff', margin: '10px 0', borderRadius: '15px' }}>
                        <ListItemText
                            sx={{ fontFamily: 'Poppins, Arial, sans-serif' }}
                            primary={item}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    )
}
