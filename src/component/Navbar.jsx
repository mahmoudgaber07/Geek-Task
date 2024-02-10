import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';

const pages = ['Products','About','Contact', 'Pricing', 'Blog'];
export const Navbar = () => {
  return (
  <>
     <Container maxWidth="xl" sx={{fontFamily:'Inter'}}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1,flexDirection: { xs: "column", md: "row"}, display: { xs: 'flex', justifyContent: 'center',background:"#00000040",borderRadius:25,margin:'20px 0' } }}>
              {pages.map((page) => (
                <React.Fragment key={page}>
                  <Link href="#" sx={{mx: 1,paddingY: 2,paddingX: 5,color:'#fff',fontWeight:'bold'}}>{page}</Link>
                  { page !== "Blog" && (
                    <Divider orientation="vertical" flexItem color='#fff' sx={{my: 1}}/>
                  )}
                </React.Fragment>
              ))}
          </Box>
        </Toolbar>
      </Container>
  </>
  )
}
