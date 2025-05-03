import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  TextField,
  CircularProgress,
  IconButton,
  Paper,
  Fade,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet-async';

const QrGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [qrUrl, setQrUrl] = useState(null);
  const [qrId, setQrId] = useState(null); // Nuevo estado
  const [loading, setLoading] = useState(false);

  const handleGenerateQr = async () => {
    setLoading(true);
    try {
      let response;
      if (pdfFile) {
        const formData = new FormData();
        formData.append('file', pdfFile);
        response = await fetch('https://qrback-2.onrender.com/api/qr/generate/pdf', {
          method: 'POST',
          body: formData,
        });
      } else {
        response = await fetch('https://qrback-2.onrender.com/api/qr/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: inputValue }),
        });
      }

      if (!response.ok) throw new Error('Error al generar el QR');
      const data = await response.json();
      setQrUrl(data.imageUrl);
      setQrId(data.id); // Guardar el ID para descarga
    } catch (error) {
      alert('Ocurrió un error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClearPdf = () => {
    setPdfFile(null);
    setInputValue('');
    setQrUrl(null);
    setQrId(null);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Generador de Códigos QR</title>
        <meta
          name="description"
          content="Genera códigos QR a partir de texto, URLs o archivos PDF. ¡Crea y comparte tus códigos QR de manera fácil!"
        />
        <meta
          name="keywords"
          content="QR, generador de QR, código QR, texto, URL, PDF, código QR generador,gratis,free, qr generator,"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Generador de Códigos QR" />
        <meta
          property="og:description"
          content="Genera códigos QR a partir de texto, URLs o archivos PDF. ¡Crea y comparte tus códigos QR de manera fácil!"
        />
        <meta property="og:image" content="https://www.misterqrgenerator.com/" />
        <meta property="og:url" content="https://www.misterqrgenerator.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1e1e2f, #2d2d44)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 5,
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              p: 4,
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
            }}
          >
            <Box textAlign="center" mb={4}>
              <img src={logo} alt="Logo" width="80" style={{ borderRadius: 12 }} />
              <Typography variant="h4" fontWeight="bold" mt={2} color="white">
                Generador de Códigos QR
              </Typography>
              <Typography variant="body2" color="gray">
                Genera códigos QR a partir de texto, URLs o archivos PDF.
              </Typography>
            </Box>

            <Stack spacing={3}>
              <TextField
                variant="filled"
                label=""
                fullWidth
                value={inputValue}
                onChange={handleInputChange}
                disabled={Boolean(pdfFile)}
                sx={{
                  '& .MuiFilledInput-root': {
                    background: 'rgba(255,255,255,0.1)',
                    color: 'dark',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'lightgray',
                  },
                }}
              />

              <Button
                variant="outlined"
                component="label"
                color="info"
                startIcon={<UploadFileIcon />}
                sx={{
                  borderRadius: 3,
                  color: 'white',
                  borderColor: 'lightgray',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {pdfFile ? `PDF: ${pdfFile.name}` : 'Subir PDF'}
                <input
                  type="file"
                  hidden
                  accept="application/pdf"
                  onChange={(e) => setPdfFile(e.target.files[0])}
                />
              </Button>

              {pdfFile && (
                <IconButton
                  onClick={handleClearPdf}
                  sx={{ color: 'red', alignSelf: 'flex-end' }}
                >
                  <DeleteIcon />
                </IconButton>
              )}

              <Button
                onClick={handleGenerateQr}
                variant="contained"
                size="large"
                startIcon={<QrCode2Icon />}
                disabled={loading || (!inputValue && !pdfFile)}
                sx={{
                  borderRadius: 3,
                  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                  color: 'white',
                  fontWeight: 'bold',
                  py: 1.5,
                  '&:hover': {
                    background: 'linear-gradient(to right, #0072ff, #00c6ff)',
                  },
                }}
              >
                {loading ? <CircularProgress size={26} sx={{ color: 'white' }} /> : 'Generar QR'}
              </Button>
            </Stack>

            {qrUrl && (
              <Fade in={Boolean(qrUrl)}>
                <Box mt={5} textAlign="center">
                  <Typography variant="h6" color="lightgray" gutterBottom>
                    Tu código QR:
                  </Typography>
                  <img
                    src={qrUrl}
                    alt="QR"
                    style={{
                      maxWidth: '100%',
                      borderRadius: 12,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    }}
                  />

                  {qrId && (
                    <a
                      href={`https://qrback-2.onrender.com/api/qr/download/${qrId}`}
                      download
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          mt: 2,
                          borderRadius: 3,
                          color: 'white',
                          borderColor: 'lightgray',
                          '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.1)',
                          },
                        }}
                      >
                        Descargar QR en PNG
                      </Button>
                    </a>
                  )}
                </Box>
              </Fade>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default QrGenerator;
















