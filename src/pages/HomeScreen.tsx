import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Link as MLink,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

// palette from the mock
const GREEN = '#2c6b5a';
const GREEN_DARK = '#1f5144';
const TEXT_MUTED = 'rgba(0,0,0,0.6)';
const CARD_BORDER = 'rgba(0,0,0,0.08)';
const SOFT_SHADOW =
  '0 1px 2px rgba(16,24,40,0.04), 0 8px 24px rgba(16,24,40,0.08)';

export default function HomeScreen() {
  return (
    <Box sx={{ bgcolor: '#f6f7f8', minHeight: '100vh' }}>
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
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, color: GREEN, letterSpacing: 0.2 }}>
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
          {/* HERO */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 8 },
              borderBottom: '1px solid ' + CARD_BORDER,
            }}>
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
              {/* Left: text */}
              <Grid item xs={12} md={6}>
                <Stack spacing={{ xs: 3, md: 4 }}>
                  <Typography
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      fontSize: { xs: 34, md: 44 },
                    }}>
                    Bienvenidos a
                    <br />
                    Cooperativa
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ color: TEXT_MUTED, maxWidth: 420 }}>
                    Nuestra misión es impulsar el bienestar de nuestros socios a
                    través de soluciones financieras accesibles y el desarrollo
                    de la comunidad.
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

              {/* Right: image */}
              <Grid item xs={12} md={6}>
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
            </Grid>
          </Box>

          {/* SOBRE NOSOTROS */}
          <Box
            id="nosotros"
            sx={{ px: { xs: 3, md: 6 }, py: { xs: 6, md: 8 } }}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>
              Sobre nosotros
            </Typography>

            <Grid container spacing={4} alignItems="flex-start">
              {/* Left: square image */}
              <Grid item xs={12} md="auto">
                <Box
                  sx={{
                    width: { xs: 260, md: 260 }, // fixed square like the mock
                    height: { xs: 200, md: 200 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: SOFT_SHADOW,
                    mx: { xs: 'auto', md: 0 }, // centered on mobile
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

              {/* Right: text + features */}
              <Grid item xs={12} md>
                <Typography
                  variant="body1"
                  sx={{ color: TEXT_MUTED, mb: 3, maxWidth: 640 }}>
                  Con más de XX años de historia, nuestra cooperativa se dedica
                  a brindar servicios de ahorro y crédito, educación financiera
                  y programas de apoyo social para fortalecer a nuestros socios.
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

          {/* SERVICIOS */}
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

          {/* CONTACTO */}
          <Box
            id="contacto"
            sx={{ px: { xs: 3, md: 6 }, py: { xs: 5, md: 6 } }}>
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
        </Paper>
      </Container>
    </Box>
  );
}

/* ---------- helpers ---------- */

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
