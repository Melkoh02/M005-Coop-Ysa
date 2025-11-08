import * as React from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import {
  CARD_BORDER,
  GREEN,
  GREEN_DARK,
  TEXT_MUTED,
} from '../../lib/constants/home.ts';

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const clickable = Boolean(href);
  const content = (
    <Typography
      variant="body2"
      component={clickable ? Link : 'span'}
      href={href}
      target={clickable ? '_blank' : undefined}
      rel={clickable ? 'noopener noreferrer' : undefined}
      sx={{
        color: TEXT_MUTED,
        textDecoration: clickable ? 'none' : undefined,
        '&:hover': clickable ? { textDecoration: 'underline' } : undefined,
      }}>
      {text}
    </Typography>
  );

  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Box sx={{ color: GREEN }}>
        <IconButton size="small" disableRipple sx={{ color: GREEN }}>
          {icon}
        </IconButton>
      </Box>
      {content}
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
          sx={{ justifyContent: 'center', display: 'flex' }}>
          <ContactItem
            icon={<AlternateEmailOutlinedIcon />}
            text="coopysatenhos.captaciones@gmail.com"
            href="mailto:coopysatenhos.captaciones@gmail.com"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ justifyContent: 'center', display: 'flex' }}>
          <ContactItem
            icon={<RoomOutlinedIcon />}
            text="Avda. La Victoria c/ Avda. Fernando de la Mora, Barrio San Pablo, Asunción - Paraguay"
            href="https://maps.app.goo.gl/gLJJrTQiA2WprZ9F9"
          />
        </Grid>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}>
          <Button
            startIcon={<WhatsAppIcon />}
            variant="contained"
            component={Link}
            href="https://wa.me/595981114671"
            target="_blank"
            rel="noopener noreferrer"
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
        ©Copyright. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default ContactInfo;
