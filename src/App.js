import React, { useState, useRef } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { GlobalStyles } from '@mui/material';
import Flag from 'react-flagkit';

// Estilizando os componentes
const Container = styled('div')(({ theme }) => ({
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',

  // Media query para telas com largura menor que o breakpoint sm
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '20px', // Ajustar o padding se necessário
    margin: '0 auto', // Remover a margem para ocupar toda a tela
    borderRadius: '0', // Optional: remover borda arredondada, se necessário
    boxShadow: 'none', // Optional: remover sombra, se necessário
    minHeight: '100%',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: '#090082',
  color: '#fff',
  padding: '10px',
  borderRadius: '8px 8px 0 0',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left', // Alinha o título à esquerda
    fontSize: '22px',
  },
}));


const Form = styled('form')({
  padding: '10px',
});

const FileUploadBox = styled(Box)({
  border: '2px dashed gray',
  color: 'gray',
  padding: '15px',
  marginTop: '15px',
  textAlign: 'center',
  cursor: 'pointer',
  marginBottom: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const CustomButton = styled(Button)({
  marginTop: '10px',
  width: '90px',
  fontWeight: 'bold',
});

const inputStyle = { height: '50px', marginBottom: '12px' };
const selectStyle = { marginBottom: '12px' };

const ScrollableFields = styled(Box)(({ theme }) => ({
  maxHeight: '192px',
  overflowY: 'auto',
  paddingRight: '10px',
  paddingTop: '5px', // Ajusta o padding superior especificamente
  maxHeight: '30vh',
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  fontWeight: 'bold',
  padding: 0,
  marginRight: '10px',
  width: '50px',
  height: '50px',
  transition: 'opacity 0.1s ease-in-out',
  border: 'transparent',
  backgroundColor: 'none',
  '&.Mui-selected': {
    backgroundColor: 'transparent', // Adiciona um fundo diferente quando selecionado
  },
  [theme.breakpoints.down('sm')]: {
    width: '39px',  // Diminuir o tamanho do botão
    height: '39px', // Diminuir o tamanho do botão
  },
}));

const StyledFlag = styled(Flag)(({ theme }) => ({
  borderRadius: '50%',
  objectFit: 'cover',
  opacity: 0.7,
  transition: 'opacity 0.1s ease-in-out',
  '&.Mui-selected': {
    opacity: 1, // Aumenta a opacidade quando selecionado
  },
  [theme.breakpoints.down('sm')]: {
    width: '39px',  // Diminuir o tamanho da bandeira
    height: '39px', // Diminuir o tamanho da bandeira
  },
}));





function RegistroAnomalia() {
  const [local, setLocal] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [tecnica, setTecnica] = useState('');
  const [status, setStatus] = useState('');
  const [ponto, setPonto] = useState('');
  const [sintoma, setSintoma] = useState('');
  const [causa, setCausa] = useState('');
  const [recomendacao, setRecomendacao] = useState('');
  const [prazo, setPrazo] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [files, setFiles] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const [language, setLanguage] = useState('pt'); // 'pt' para Português, 'en' para Inglês

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true); // Abre o modal com as informações preenchidas
  };

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Fecha o modal
  };

  const resetFile = () => {
    setFiles([]);
  };

  const resetForm = () => {
    setLocal('');
    setModalidade('');
    setTecnica('');
    setStatus('');
    setPonto('');
    setSintoma('');
    setCausa('');
    setRecomendacao('');
    setPrazo('');
    setDetalhes('');
    setFiles([]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles); // Atualiza o estado com os arquivos restantes
  };

  const handleLanguageChange = (event, newLanguage) => {
    if (newLanguage) {
      setLanguage(newLanguage);
      resetForm(); // Reseta o formulário ao mudar o idioma
    }
  };

  const handleCancel = () => {
    resetForm(); // Reseta o formulário
  };

  const isFormValid = () => {
    return local && tecnica && status && ponto && sintoma && causa && recomendacao && prazo;
  };


  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            height: '100%',  // Garante que o HTML ocupe toda a altura da tela
          },
          body: {
            margin: 0,  // Remove margens padrão
            height: '100%',  // Garante que o body ocupe toda a altura da tela
            backgroundImage: 'url(./prototipo_fundo.png)',
            backgroundSize: 'cover', // Faz com que a imagem cubra toda a tela
            backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
            backgroundPosition: 'center', // Centraliza a imagem
            overflowY: 'hidden',
            display: 'flex',
            justifyContent: 'center', // Centraliza horizontalmente
            alignItems: 'center', // Centraliza verticalmente
          },
          '@media (max-width: 920px)': {
            body: {
              backgroundImage: 'none', // Remove a imagem de fundo
              backgroundColor: '#f2f2f2',
            },
          },
          '@media (max-width: 599px)': {
            body: {
              overflowY: 'auto',
              display: 'block', // Modifica o display para 'block' quando a largura for menor que 599px
            },
          },
        }}
      />

      <Box style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            aria-label="language"
            sx={{ display: { xs: 'none', sm: 'block' }}}
          >
            <StyledToggleButton
              value="pt"
              aria-label="portuguese"
              selected={language === 'pt'}
            >
              <StyledFlag
                country="BR"
                size={48}
                className={language === 'pt' ? 'Mui-selected' : ''}
              />
            </StyledToggleButton>
            <StyledToggleButton
              value="en"
              aria-label="english"
              selected={language === 'en'}
            >
              <StyledFlag
                country="US"
                size={48}
                className={language === 'en' ? 'Mui-selected' : ''}
              />
            </StyledToggleButton>
          </ToggleButtonGroup>
      </Box>


      <Container>
        <Title variant="h5" sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center' }}>
          {language === 'pt' ? 'Registro de Anomalia' : 'Anomaly Registration'}
          <ToggleButtonGroup
            value={language}
            exclusive
            onChange={handleLanguageChange}
            aria-label="language"
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <StyledToggleButton
              value="pt"
              aria-label="portuguese"
              selected={language === 'pt'}
            >
              <StyledFlag
                country="BR"
                size={48}
                className={language === 'pt' ? 'Mui-selected' : ''}
              />
            </StyledToggleButton>
            <StyledToggleButton
              value="en"
              aria-label="english"
              selected={language === 'en'}
            >
              <StyledFlag
                country="US"
                size={48}
                className={language === 'en' ? 'Mui-selected' : ''}
              />
            </StyledToggleButton>
          </ToggleButtonGroup>

        </Title>


        <Title variant="h5"
          sx={{ display: { xs: 'none', sm: 'block' } }}>
          {language === 'pt' ? 'Registro de Anomalia' : 'Anomaly Registration'}
        </Title>
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" style={selectStyle}>
                <InputLabel>{language === 'pt' ? 'Local' : 'Location'}</InputLabel>
                <Select
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  label={language === 'pt' ? 'Local' : 'Location'}
                  style={{ height: '50px' }}
                >
                  <MenuItem value={language === 'pt' ? "Conjunto motobomba 022 do Tratamento de Água" : "Pump Motor Set 022 of Water Treatment"}>
                    {language === 'pt' ? 'Conjunto motobomba 022 do Tratamento de Água' : 'Pump Motor Set 022 of Water Treatment'}
                  </MenuItem>

                </Select>
              </FormControl>
              <ScrollableFields>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Técnica' : 'Technique'}</InputLabel>
                  <Select
                    value={tecnica}
                    onChange={(e) => setTecnica(e.target.value)}
                    label={language === 'pt' ? 'Técnica' : 'Technique'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Sensitiva' : 'Sensitive'}>{language === 'pt' ? 'Sensitiva' : 'Sensitive'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Status' : 'Status'}</InputLabel>
                  <Select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    label={language === 'pt' ? 'Status' : 'Status'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Pendente' : 'Pending'}>{language === 'pt' ? 'Pendente' : 'Pending'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Ponto' : 'Point'}</InputLabel>
                  <Select
                    value={ponto}
                    onChange={(e) => setPonto(e.target.value)}
                    label={language === 'pt' ? 'Ponto' : 'Point'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Carcaça' : 'Housing'}>{language === 'pt' ? 'Carcaça' : 'Housing'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Sintoma' : 'Symptom'}</InputLabel>
                  <Select
                    value={sintoma}
                    onChange={(e) => setSintoma(e.target.value)}
                    label={language === 'pt' ? 'Sintoma' : 'Symptom'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Corrosão avançada' : 'Advanced Corrosion'}>{language === 'pt' ? 'Corrosão avançada' : 'Advanced Corrosion'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Causa' : 'Cause'}</InputLabel>
                  <Select
                    value={causa}
                    onChange={(e) => setCausa(e.target.value)}
                    label={language === 'pt' ? 'Causa' : 'Cause'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Contaminação' : 'Contamination'}>{language === 'pt' ? 'Contaminação' : 'Contamination'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Recomendação' : 'Recommendation'}</InputLabel>
                  <Select
                    value={recomendacao}
                    onChange={(e) => setRecomendacao(e.target.value)}
                    label={language === 'pt' ? 'Recomendação' : 'Recommendation'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={language === 'pt' ? 'Substituir motobomba' : 'Replace Pump'}>{language === 'pt' ? 'Substituir motobomba' : 'Replace Pump'}</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined" style={selectStyle}>
                  <InputLabel>{language === 'pt' ? 'Prazo (dias)' : 'Deadline (days)'}</InputLabel>
                  <Select
                    value={prazo}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setPrazo(value);
                    }}
                    label={language === 'pt' ? 'Prazo (dias)' : 'Deadline (days)'}
                    style={{ height: '50px' }}
                  >
                    <MenuItem value={10}>{language === 'pt' ? '10 dias' : '10 days'}</MenuItem>
                    <MenuItem value={20}>{language === 'pt' ? '20 dias' : '20 days'}</MenuItem>
                    <MenuItem value={30}>{language === 'pt' ? '30 dias' : '30 days'}</MenuItem>
                    <MenuItem value={90}>{language === 'pt' ? '90 dias' : '90 days'}</MenuItem>
                  </Select>
                </FormControl>
              </ScrollableFields>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" style={selectStyle}>
                <InputLabel>{language === 'pt' ? 'Modalidade' : 'Type'}</InputLabel>
                <Select
                  value={modalidade}
                  onChange={(e) => setModalidade(e.target.value)}
                  label={language === 'pt' ? 'Modalidade' : 'Type'}
                  style={{ height: '50px' }}
                >
                  <MenuItem value={language === 'pt' ? 'Mecânica' : 'Mechanical'}>{language === 'pt' ? 'Mecânica' : 'Mechanical'}</MenuItem>
                </Select>
              </FormControl>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                multiple
                onChange={handleFileChange}
              />
              <FileUploadBox
                onClick={!files.length ? handleFileUploadClick : null}
                style={{
                  width: '200px',
                  height: '132px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: files.length === 0 ? '2px dashed gray' : 'none',
                  cursor: files.length === 0 ? 'pointer' : 'default'
                }}
              >
                {files.length === 0 ? (
                  <>
                    <AttachFileIcon style={{ fontSize: '18px' }} />
                    <Typography variant="body1">{language === 'pt' ? 'Anexar Imagens Aqui' : 'Attach Images Here'}</Typography>
                  </>
                ) : (
                  files.map((file, index) =>
                    file.type.startsWith('image') ? (
                      <div key={index} style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0
                          }}
                        />
                        <button
                          onClick={() => handleRemoveFile(index)}
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            background: 'transparent',
                            color: 'black',
                            border: '1px solid black',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          X
                        </button>
                      </div>
                    ) : (
                      <Typography variant="body2" key={index}>{file.name}</Typography>
                    )
                  )
                )}
              </FileUploadBox>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={language === 'pt' ? 'Detalhes Adicionais' : 'Additional Details'}
                variant="outlined"
                multiline
                rows={3}
                value={detalhes}
                onChange={(e) => setDetalhes(e.target.value)}
                style={{ marginBottom: '10px' }}
              />
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="flex-end" marginTop="10px">
            <CustomButton variant="contained" color="error" onClick={handleCancel}>
              {language === 'pt' ? 'Cancelar' : 'Cancel'}
            </CustomButton>
            <CustomButton
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginLeft: '10px' }}
              disabled={!isFormValid()}
            >
              {language === 'pt' ? 'Salvar' : 'Save'}
            </CustomButton>
          </Box>
        </Form>




      </Container>
    </>
  );
}

export default RegistroAnomalia;