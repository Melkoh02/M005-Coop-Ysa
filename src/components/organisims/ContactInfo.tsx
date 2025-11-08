import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'; // palette from the mock
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
    <Box id="contacto" sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 6 } }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{
          p: { xs: 2, md: 3 },
          borderRadius: 2,
          border: '1px solid ' + CARD_BORDER,
          boxShadow: '0 1px 2px rgba(16,24,40,0.03)',
        }}>
        <Grid item xs={12} md>
          <ContactItem
            icon={<RoomOutlinedIcon />}
            text="Dirección de la cooperativa"
          />
        </Grid>
        <Grid item xs={12} md>
          <ContactItem
            icon={<AlternateEmailOutlinedIcon />}
            text="correo@cooperativa.py"
          />
        </Grid>
        <Grid item xs={12} md="auto">
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
            +595 000 000 000
          </Button>
        </Grid>
      </Grid>

      <Typography
        variant="caption"
        sx={{ display: 'block', mt: 3, color: TEXT_MUTED }}>
        © 2025 Cooperativa. Términos · Política de privacidad
      </Typography>
    </Box>
  );
};

export default ContactInfo;
