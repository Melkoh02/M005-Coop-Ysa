import * as React from 'react';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import {
  CARD_BORDER,
  GREEN,
  SOFT_SHADOW,
  TEXT_MUTED,
} from '../../lib/constants/home.ts';

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Grid item xs={12} md={4}>
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          borderColor: CARD_BORDER,
          borderRadius: 2.5,
          boxShadow: 'none',
          transition: 'box-shadow .2s ease, transform .2s ease',
          '&:hover': { boxShadow: SOFT_SHADOW, transform: 'translateY(-2px)' },
        }}>
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={2} alignItems="flex-start">
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: '12px',
                border: '1px solid ' + CARD_BORDER,
                display: 'grid',
                placeItems: 'center',
                color: GREEN,
              }}>
              {icon}
            </Box>
            <Typography variant="h6" fontWeight={800}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: TEXT_MUTED }}>
              {text}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

const Services = () => {
  return (
    <Box
      id="servicios"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
        borderTop: '1px solid ' + CARD_BORDER,
        borderBottom: '1px solid ' + CARD_BORDER,
        bgcolor: '#fff',
      }}>
      <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>
        Nuestros servicios
      </Typography>

      <Grid container spacing={3}>
        <ServiceCard
          icon={<SavingsOutlinedIcon />}
          title="Ahorro"
          text="Opciones flexibles y seguras para tus metas."
        />
        <ServiceCard
          icon={<HomeOutlinedIcon />}
          title="Crédito"
          text="Financiamiento responsable para tu crecimiento."
        />
        <ServiceCard
          icon={<SchoolOutlinedIcon />}
          title="Educación"
          text="Programas y charlas de educación financiera."
        />
      </Grid>
    </Box>
  );
};

export default Services;
