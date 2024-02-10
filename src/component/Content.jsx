import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Filter } from './Content/Filter';
import { ContentFilter } from './Content/ContentFilter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#524F4F',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#fff',
}));
export const Content = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item>
            <Filter/>
          </Item>
        </Grid>

        <Grid item xs={12} md={8}>
          <Item>
            <ContentFilter/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
