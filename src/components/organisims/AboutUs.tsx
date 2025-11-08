import { Box, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import {
  CARD_BORDER,
  GREEN,
  SOFT_SHADOW,
  TEXT_MUTED,
} from '../../lib/constants/home.ts';

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Grid item xs={12} sm={4}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '10px',
            border: '1px solid ' + CARD_BORDER,
            display: 'grid',
            placeItems: 'center',
            color: GREEN,
          }}>
          {icon}
        </Box>

        <Stack spacing={0.5}>
          <Typography variant="subtitle1" fontWeight={800}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: TEXT_MUTED }}>
            {text}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}

const AboutUs = () => {
  return (
    <Box id="nosotros" sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>
        Sobre nosotros
      </Typography>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        {/* Left (md+): image — mirrors hero but on the left */}
        <Grid item xs={12} md={4} order={{ xs: 1, md: 1 }}>
          <Box
            sx={{
              width: { xs: 300, md: 280 },
              height: { xs: 200, md: 220 },
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: SOFT_SHADOW,
              mx: { xs: 'auto', md: 0 },
            }}>
            <Box
              component="img"
              alt="Reunión de equipo"
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop"
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>

        {/* Right (md+): text + 3 features in one row */}
        <Grid item xs={12} md={8} order={{ xs: 2, md: 2 }}>
          <Typography
            variant="body1"
            sx={{ color: TEXT_MUTED, mb: 4, maxWidth: 640 }}>
            Con más de XX años de historia, nuestra cooperativa se dedica a
            brindar servicios de ahorro y crédito, educación financiera y
            programas de apoyo social para fortalecer a nuestros socios.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Feature
                icon={<Groups2OutlinedIcon fontSize="large" />}
                title="Solidaridad"
                text="Acciones concretas que fortalecen a la comunidad."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Feature
                icon={<HomeOutlinedIcon fontSize="large" />}
                title="Crédito"
                text="Productos responsables y tasas justas."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Feature
                icon={<SchoolOutlinedIcon fontSize="large" />}
                title="Educación"
                text="Talleres y contenidos para mejorar la salud financiera."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
