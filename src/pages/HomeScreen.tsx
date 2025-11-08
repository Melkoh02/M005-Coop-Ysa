import * as React from 'react';
import {
  Box,
  Button,
  Container,
  Link as MLink,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import Hero from '../components/organisims/Hero.tsx';
import AboutUs from '../components/organisims/AboutUs.tsx';
import Services from '../components/organisims/Services.tsx';
import ContactInfo from '../components/organisims/ContactInfo.tsx';
import {
  CARD_BORDER,
  GREEN,
  GREEN_DARK,
  SOFT_SHADOW,
} from '../lib/constants/home.ts';
import { pub } from '../lib/helpers.ts';

export default function HomeScreen() {
  return (
    <Box sx={{ bgcolor: '#f6f7f8', minHeight: '100vh', minWidth: '100vw' }}>
      {/* Top bar */}
      <Paper
        elevation={0}
        square
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          borderBottom: '1px solid ' + CARD_BORDER,
          backdropFilter: 'saturate(180%) blur(8px)',
          backgroundColor: 'rgba(255,255,255,0.9)',
        }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 72 }}>
            <Box
              component="img"
              src={pub('assets/logo.png')}
              alt="Cooperativa Ysateños"
              sx={{
                height: 40,
                width: 40,
                objectFit: 'cover',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                paddingLeft: 2,
                fontWeight: 800,
                color: GREEN,
                letterSpacing: 0.2,
              }}>
              Ysateños
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <HeaderLink href="#">Inicio</HeaderLink>
              <HeaderLink href="#nosotros">Nosotros</HeaderLink>
              <HeaderLink href="#servicios">Servicios</HeaderLink>
            </Stack>

            <Button
              href="#contacto"
              size="small"
              variant="contained"
              sx={{
                ml: { xs: 1, sm: 3 },
                px: 2.5,
                borderRadius: 2,
                textTransform: 'none',
                bgcolor: GREEN,
                '&:hover': { bgcolor: GREEN_DARK },
              }}>
              Contáctanos
            </Button>
          </Toolbar>
        </Container>
      </Paper>

      {/* Page container with “card” look */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            boxShadow: SOFT_SHADOW,
            overflow: 'hidden',
            bgcolor: '#fff',
          }}>
          <Hero />
          <AboutUs />
          <Services />
          <ContactInfo />
        </Paper>
      </Container>
    </Box>
  );
}

function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <MLink
      href={href}
      underline="none"
      sx={{
        color: 'inherit',
        fontSize: 14,
        '&:hover': { color: GREEN },
      }}>
      {children}
    </MLink>
  );
}
