import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import {
  CARD_BORDER,
  GREEN,
  GREEN_DARK,
  TEXT_MUTED,
} from '../../lib/constants/home.ts';

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Box sx={{ color: GREEN }}>
        <IconButton size="small" disableRipple sx={{ color: GREEN }}>
          {icon}
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ color: TEXT_MUTED }}>
        {text}
      </Typography>
    </Stack>
  );
}

const ContactInfo = () => {
  return (
    <Box
      id="contacto"
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 5, md: 6 },
      }}>
      <Grid
        container
        spacing={6}
        sx={{
          padding: 3,
          borderRadius: 2,
          border: '1px solid ' + CARD_BORDER,
          boxShadow: '0 1px 2px rgba(16,24,40,0.03)',
        }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}>
          <ContactItem
            icon={<AlternateEmailOutlinedIcon />}
            text="coopysatenhos.captaciones@gmail.com"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}>
          <ContactItem
            icon={<RoomOutlinedIcon />}
            text="Avda. La Victoria c/ Avda. Fernando de la Mora, Barrio San Pablo, Asuncion - Paraguay"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}>
          <Button
            startIcon={<LocalPhoneOutlinedIcon />}
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              px: 3,
              bgcolor: GREEN,
              '&:hover': { bgcolor: GREEN_DARK },
              width: { xs: '100%', md: 'auto' },
            }}>
            +595 981 114 671
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant="caption"
        sx={{
          display: 'flex',
          mt: 3,
          color: TEXT_MUTED,
          justifyContent: 'center',
        }}>
        © 2025 Cooperativa. Términos · Política de privacidad
      </Typography>
    </Box>
  );
};

export default ContactInfo;
