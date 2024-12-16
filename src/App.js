import React, { useState, useRef } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel, Button, Grid, Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AvatarEditor from 'react-avatar-editor';
import { GlobalStyles } from '@mui/material';

// Estilizando os componentes
const Container = styled('div')({
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  marginTop: '30px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

const Title = styled(Typography)({
  textAlign: 'center',
  backgroundColor: '#090082',
  color: '#fff',
  padding: '10px',
  borderRadius: '8px 8px 0 0',
  fontWeight: 'bold',
});

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
  height: '200px',
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
  [theme.breakpoints.down('md')]: {
    maxHeight: 'none',
    overflowY: 'visible',
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

  const resetFile =() => {
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
      <GlobalStyles styles={{
        html: {
          height: '100%',  // Garante que o HTML ocupe toda a altura da tela
        },
        body: {
          margin: 0,  // Remove margens padrão
          height: '20%',  // Garante que o body ocupe toda a altura da tela
          backgroundImage: 'url(./prototipo_fundo.png)',
          backgroundSize: 'cover', // Faz com que a imagem cubra toda a tela
          backgroundRepeat: 'no-repeat', // Evita a repetição da imagem
          backgroundPosition: 'center center', // Centraliza a imagem
        }
      }} />
      <Box style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <ToggleButtonGroup
          value={language}
          exclusive
          onChange={handleLanguageChange}
          aria-label="language"
        >
          <ToggleButton
            value="pt"
            aria-label="portuguese"
            style={{ backgroundColor: 'white', fontWeight: 'bold' }}
          >
            Português
          </ToggleButton>
          <ToggleButton
            value="en"
            aria-label="english"
            style={{ backgroundColor: 'white', fontWeight: 'bold' }}
          >
            English
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Container>
        <Title variant="h5">{language === 'pt' ? 'Registro de Anomalia' : 'Anomaly Registration'}</Title>
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
                  <MenuItem value={language === 'pt' ? "Conjunto motobomba 022 do Tratamento de Água" : "Pump Set 022 of Water Treatment"}>
                    {language === 'pt' ? 'Conjunto motobomba 022 do Tratamento de Água' : 'Pump Set 022 of Water Treatment'}
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
                    <MenuItem value={10}>10 dias</MenuItem>
                    <MenuItem value={20}>20 dias</MenuItem>
                    <MenuItem value={30}>30 dias</MenuItem>
                    <MenuItem value={90}>90 dias</MenuItem>
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


        {/* Modal para exibir o relatório */}
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          fullWidth
          sx={{
            '& .MuiDialogContent-root': {
              padding: '20px', // Ajuste o padding conforme necessário
              overflowY: 'auto', // Isso permitirá que o conteúdo role
            },
            '& .MuiDialog-paper': {
              width: '55%', // Aumente a largura do modal
              maxWidth: 'none', // Para remover a largura máxima padrão
            }
          }}
        >
          <DialogContent>
            <DialogTitle>
              <Grid container alignItems="center">
                <Grid item>
                  <img
                    src="./Logomarca_Pred.png"
                    alt="Logo"
                    style={{
                      height: '44px',
                      width: 'auto',
                      marginRight: '20px',
                      marginBottom: '25px', // Aumenta a margem inferior da logo
                      marginTop: '10px'
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', overflowY: 'auto' }}>
                    <thead>
                      <tr>
                        <th
                          rowSpan="2"
                          style={{
                            fontSize: '20px',
                            marginLeft: '200px',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black'
                          }}
                        >
                          {language === 'pt' ? 'Relatórios de Anomalia' : 'Anomaly Reports'}
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            textAlign: 'left',
                            verticalAlign: 'top',
                            fontSize: '14px',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            borderLeft: '2px solid black'
                          }}
                        >
                          {language === 'pt' ? 'Técnica:' : 'Technique:'}<br />
                          <span style={{ fontSize: '20px', marginLeft: '10px' }}>{tecnica}</span>
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            textAlign: 'left',
                            verticalAlign: 'top',
                            fontSize: '14px',
                            borderTop: '2px solid black',
                            borderBottom: '2px solid black',
                            borderLeft: '2px solid black'
                          }}
                        >
                          {language === 'pt' ? 'Status:' : 'Status:'}<br />
                          <span style={{ fontSize: '20px', marginLeft: '10px' }}>{status}</span>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </Grid>
              </Grid>
            </DialogTitle>

            {/* Conteúdo rolável */}
            <Box
              sx={{
                backgroundColor: '#f2f2f2',
                padding: '1px',
                marginBottom: '5px',
                width: 'auto',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px' }}>
                <strong>{language === 'pt' ? 'Local da anomalia' : 'Location of the anomaly'}</strong>
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '-6px', fontSize: '14px', marginLeft: '30px' }}>
              {local}
            </Typography>

            <Box
              sx={{
                backgroundColor: '#f2f2f2',
                padding: '1px',
                marginBottom: '5px',
                width: 'auto',
                marginTop: '15px',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px' }}>
                <strong>{language === 'pt' ? 'Descrição da anomalia' : 'Description of the anomaly'}</strong>
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '-6px', fontSize: '14px', marginLeft: '30px' }}>
              {language === 'pt'
                ? `Anomalia registrada em ${new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })} Inspetor Pred`
                : `Anomaly registered on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })} Pred Inspector`}
              <br />
              {language === 'pt' ? `${ponto} com ${sintoma}` : `${ponto} with ${sintoma}`}
            </Typography>

            {/* Continue com o conteúdo do modal */}
            <Box
              sx={{
                backgroundColor: '#f2f2f2',
                padding: '1px',
                marginBottom: '5px',
                width: 'auto',
                marginTop: '15px',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px' }}>
                <strong>{language === 'pt' ? 'Avaliação da anomalia' : 'Anomaly assessment'}</strong>
              </Typography>
            </Box>
            <Grid container alignItems="center" justifyContent="flex-end" sx={{ marginTop: '5px' }}>
              <Grid item xs={4}>
                <img
                  src={language === 'pt' ? "./imagem1_pt.png" : "./imagem1_en.png"}
                  alt="Anomalia"
                  style={{
                    height: '220px',
                    width: 'auto',
                    display: 'block',
                    marginLeft: '-150px'
                  }}
                />
              </Grid>
            </Grid>

            <Box
              sx={{
                backgroundColor: '#f2f2f2',
                padding: '1px',
                marginBottom: '5px',
                width: 'auto',
                marginTop: '15px',
              }}
            >
              <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px' }}>
                <strong>{language === 'pt' ? 'Intervenção recomendada' : 'Recommended intervention'}</strong>
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ marginTop: '-6px', fontSize: '14px', marginLeft: '30px' }}>
              {language === 'pt'
                ? `${recomendacao} até ${new Date(Date.now() + prazo * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}. ${detalhes}`
                : `${recomendacao} until ${new Date(Date.now() + prazo * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}. ${detalhes}`}
            </Typography>


            <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px', marginTop: '40px' }}>
              <strong>{language === 'pt' ? 'Fotografia do equipamento' : 'Equipment Photograph'}</strong>
            </Typography>
            <Box
              sx={{
                width: '380px',
                height: '251px',
                border: '1px solid black',
                marginTop: '2px',
                boxSizing: 'border-box',
                marginLeft: '18px'
              }}
            >
              {files.length > 0 && files[0].type.startsWith('image') ? (
                <img
                  src={URL.createObjectURL(files[0])}
                  alt={files[0].name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <Typography variant="body1" style={{ textAlign: 'center', lineHeight: '251px' }}></Typography>
              )}
            </Box>

            <Typography variant="body2" sx={{ fontSize: '13px', marginLeft: '20px', marginTop: '2px' }}>
              <strong>{language === 'pt' ? 'Fotografia pós reparo' : 'Post-repair Photograph'}</strong>
            </Typography>

            <Box
              sx={{
                width: '380px',
                height: '250px',
                border: '1px solid black',
                marginTop: '2px',
                boxSizing: 'border-box',
                marginLeft: '18px'
              }}
            ></Box>

            <Box
              sx={{
                width: '97%',
                height: '60px',
                border: '1px solid black',
                marginTop: '-1px',
                boxSizing: 'border-box',
                marginLeft: '18px',
                fontSize: '13px'
              }}
            >
              {language === 'pt' ? 'Comentários pós manutenção:' : 'Post-maintenance Comments:'}
            </Box>
          </DialogContent>


          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">Fechar</Button>
          </DialogActions>
        </Dialog>


      </Container>
    </>
  );
}

export default RegistroAnomalia;
