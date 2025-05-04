import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Mister QR Generator</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1e1e2f, #2d2d44)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 5,
        }}
      >
        <Container maxWidth="md">
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              color: 'white',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Política de Privacidad
            </Typography>

            <Typography variant="body1" paragraph>
              En Mister QR Generator, valoramos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestro generador de códigos QR.
            </Typography>

            <Typography variant="h6" gutterBottom>
              1. Información que recopilamos
            </Typography>
            <Typography variant="body2" paragraph>
              No recopilamos datos personales como nombres, correos electrónicos ni direcciones IP. Solo procesamos el contenido que ingresas o subes para generar tu código QR, y no lo almacenamos permanentemente.
            </Typography>

            <Typography variant="h6" gutterBottom>
              2. Uso de cookies
            </Typography>
            <Typography variant="body2" paragraph>
              Podemos usar cookies de terceros (como Google AdSense) para mostrar anuncios personalizados. Puedes ajustar tus preferencias en la configuración de tu navegador.
            </Typography>

            <Typography variant="h6" gutterBottom>
              3. Enlaces externos
            </Typography>
            <Typography variant="body2" paragraph>
              Este sitio puede contener enlaces a otras páginas. No somos responsables del contenido o políticas de privacidad de esos sitios.
            </Typography>

            <Typography variant="h6" gutterBottom>
              4. Cambios a esta política
            </Typography>
            <Typography variant="body2" paragraph>
              Podemos actualizar esta política ocasionalmente. Cualquier cambio será publicado en esta página.
            </Typography>

            <Typography variant="body2" paragraph sx={{ mt: 4, fontStyle: 'italic' }}>
              Última actualización: 3 de mayo de 2025
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
