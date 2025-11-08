import * as React from 'react';
import {
  AppBar,
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
import MenuIcon from '@mui/icons-material/Menu';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Navbar />

      {/* Hero */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          borderBottom: t => `1px solid ${t.palette.divider}`,
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography variant="h3" fontWeight={800} lineHeight={1.2}>
                  Bienvenidos a{' '}
                  <span style={{ whiteSpace: 'nowrap' }}>
                    Cooperativa Ysateños
                  </span>
                </Typography>
                <Typography variant="body1">
                  Nuestra misión es impulsar el bienestar de nuestros socios
                  mediante soluciones financieras accesibles y el desarrollo de
                  la comunidad.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" size="large">
                    Más información
                  </Button>
                  <Button variant="outlined" size="large">
                    Hazte socio
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ overflow: 'hidden', borderRadius: 3 }}>
                <Box
                  component="img"
                  alt="Comunidad cooperativa"
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 260, md: 360 },
                    objectFit: 'cover',
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About + Values */}
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          borderBottom: t => `1px solid ${t.palette.divider}`,
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ overflow: 'hidden', borderRadius: 3 }}>
                <Box
                  component="img"
                  alt="Reunión de trabajo"
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 220, md: 320 },
                    objectFit: 'cover',
                  }}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                <Typography variant="h5" fontWeight={800}>
                  Sobre nosotros
                </Typography>
                <Typography variant="body1">
                  Con más de XX años de historia, nuestra cooperativa se dedica
                  a brindar servicios de ahorro y crédito, educación financiera
                  y programas de apoyo social para fortalecer a nuestros socios.
                </Typography>

                <Grid container spacing={3}>
                  <Value icon={<SavingsOutlinedIcon />} title="Solidaridad">
                    Acciones concretas que fortalecen a la comunidad.
                  </Value>
                  <Value icon={<AccountBalanceOutlinedIcon />} title="Crédito">
                    Productos responsables y tasas justas para proyectos reales.
                  </Value>
                  <Value icon={<SchoolOutlinedIcon />} title="Educación">
                    Talleres y contenidos para mejorar la salud financiera.
                  </Value>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={800} sx={{ mb: 4 }}>
            Nuestros servicios
          </Typography>

          <Grid container spacing={3}>
            <ServiceCard
              icon={<SavingsOutlinedIcon fontSize="large" />}
              title="Ahorro"
              text="Opciones flexibles y seguras para tus metas."
            />
            <ServiceCard
              icon={<AccountBalanceOutlinedIcon fontSize="large" />}
              title="Crédito"
              text="Financiamiento responsable para tu crecimiento."
            />
            <ServiceCard
              icon={<SchoolOutlinedIcon fontSize="large" />}
              title="Educación"
              text="Programas y charlas de educación financiera."
            />
          </Grid>
        </Container>
      </Box>

      {/* Contact strip */}
      <Box
        component="section"
        sx={{
          py: { xs: 4, md: 6 },
          borderTop: t => `1px solid ${t.palette.divider}`,
          borderBottom: t => `1px solid ${t.palette.divider}`,
          bgcolor: 'background.paper',
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PlaceOutlinedIcon />
                <Typography variant="body1">
                  Dirección de la cooperativa
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailOutlinedIcon />
                <Typography variant="body1">contacto@cooperativa.py</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <Button
                  variant="contained"
                  startIcon={<PhoneEnabledOutlinedIcon />}>
                  +595 000 000 000
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">
                © {new Date().getFullYear()} Cooperativa Ysateños
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <MLink href="#" underline="hover" color="inherit">
                  Política de privacidad
                </MLink>
                <MLink href="#" underline="hover" color="inherit">
                  Términos
                </MLink>
                <MLink href="#" underline="hover" color="inherit">
                  Redes sociales
                </MLink>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: t => `1px solid ${t.palette.divider}` }}>
      <Toolbar sx={{ minHeight: 72 }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={800} sx={{ flexGrow: 1 }}>
            Ysateños
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              mr: 2,
            }}>
            <MLink href="#" underline="none" color="inherit">
              Asociación
            </MLink>
            <MLink href="#" underline="none" color="inherit">
              Nosotros
            </MLink>
            <MLink href="#" underline="none" color="inherit">
              Proyectos
            </MLink>
          </Stack>

          <Button
            variant="contained"
            sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
            Contáctanos
          </Button>

          <IconButton
            sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 1 }}>
            <MenuIcon />
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

function Value({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Grid item xs={12} md={4}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box sx={{ mt: 0.3 }}>{icon}</Box>
        <Box>
          <Typography fontWeight={700}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {children}
          </Typography>
        </Box>
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
      <Card variant="outlined" sx={{ height: '100%', borderRadius: 3 }}>
        <CardContent>
          <Stack spacing={2} alignItems="flex-start">
            <Box>{icon}</Box>
            <Typography variant="h6" fontWeight={800}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
