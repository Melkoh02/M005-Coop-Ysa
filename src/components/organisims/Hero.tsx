import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import {
  CARD_BORDER,
  GREEN,
  GREEN_DARK,
  TEXT_MUTED,
} from '../../lib/constants/home.ts';

const Hero = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        borderBottom: '1px solid ' + CARD_BORDER,
      }}>
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: { md: 520 },
              ml: { md: 'auto' },
              borderRadius: 2,
              overflow: 'hidden',
            }}>
            <Box
              component="img"
              alt="Personas de la cooperativa"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200&auto=format&fit=crop"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 220, md: 340 },
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontSize: { xs: 34, md: 44 },
              }}>
              Cooperativa
              <br />
              Ysateños
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: TEXT_MUTED, maxWidth: 420 }}>
              Nuestra misión es impulsar el bienestar de nuestros socios a
              través de soluciones financieras accesibles y el desarrollo de la
              comunidad.
            </Typography>

            <Button
              size="large"
              variant="contained"
              disableElevation
              sx={{
                width: 'fit-content',
                textTransform: 'none',
                bgcolor: GREEN,
                '&:hover': { bgcolor: GREEN_DARK },
                borderRadius: 1.5,
                px: 3,
                py: 1.25,
              }}>
              Más información
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
