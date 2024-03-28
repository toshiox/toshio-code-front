import './css/style.css';
import Alert from '../modal/alert';
import { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useTranslation } from 'react-i18next';
import { articlesSevice } from '../../services/articles';
import { Modal, Button, Tabs, Tab, Form, Row, Col} from 'react-bootstrap';
import { DateFunctions } from '../../services/utils/date';

const DetailsModal = ({ show, handleClose, rowData, modalSize = 'lg', onUpdate }) => {
  const { t } = useTranslation();
  const [id, setId] = useState('');
  const [contentId, setContentId] = useState('');
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [readingTime, setReadingTime] = useState('');
  const [tags, setTags] = useState('');
  const [language, setLanguage] = useState('en');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [content, setContent] = useState('');
  const [currentContent, setCurrentContent] = useState('');
  const [alertType, setAlertType] = useState('success');

  const handleEditorChange = (content) => {
    var codeTags = content.match(/<p>.*?<\/p>/g);
    if(codeTags){
      var codeContent = '';
      var linesNumber = [];

      for(var i = 0; i < codeTags.length; i++){
        if(codeTags[i].includes("<code>") && !codeTags[i].includes('<div className="code-container">')){
          linesNumber.push(i);
          codeContent += codeTags[i].replace(/<\/?code>/g, '').replace(/<\/?p>/g, '');
          console.log(codeTags[i]);
        }
      }

      console.log(codeContent);

      content = '';
      let addCodeContainer = false;
      for(i = 0; i < codeTags.length; i++){
        if(!codeTags[i].includes("<code>")){
          content += codeTags[i];
        }else if(!addCodeContainer){
          addCodeContainer = true;
          content += '<div className="code-container"><code>' + codeContent + '</code></div>';
        }
      }
      console.log(content);
      // var cleanContent = combinedCode.replace(/<\/?code>/g, '');
      // var xxx = '<div className="code-container"><code>' + cleanContent + '</code></div>';
    }
    setCurrentContent(content); 
  };
  const handleCloseAlert = () => { setShowModal(false); };
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      let result = await postArticle();
      if(result){
          result = await putArticleContent();
      }
    } catch (error) {
      setAlertType('error');
      onUpdate(false);
    }
    setShowModal(true);
  };
  const postArticle = async () => {
    let content = {
      title: title,
      resume: resume,
      subtitle: subtitle,
      timeRead: readingTime,
      tags: tags, 
      language: language,
      id: id
    };
    let result = await articlesSevice.putArticle(content);
    setMessage(result.message);
    setAlertType('success');
    onUpdate(result.success);
    return result.success;
  };
  const putArticleContent = async () => {
    let payload = {
      id: contentId,
      articleId: id,
      content: currentContent,
      language: language,
      createdAt: DateFunctions.FormatDate(new Date(), 'yyyy-MM-dd HH:mm:ss')
    };
    let result = await articlesSevice.putArticleContent(payload);
    setMessage(result.message);
    setAlertType('success');
    onUpdate(result.success);
    return result.success;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (show && rowData) {
        setId(rowData.id || '');
        setTags(rowData.tags || ''); 
        setTitle(rowData.title || '');
        setResume(rowData.resume || '');
        setLanguage(rowData.language || '');
        setSubtitle(rowData.subtitle || '');
        setReadingTime(rowData.timeRead || 0);
        setContent(rowData.content || '');
        setContentId(rowData.contentId || '');
      }
    }
    fetchData();
  }, [show, rowData]);

  return (
    <>
      <Modal show={show} onHide={handleClose} size={modalSize}>
        <Modal.Header closeButton>
          <Modal.Title>{t('TextEditor.Information')}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='custom-modal large'>
          <Tabs defaultActiveKey="resume" transition={true} id="noanim-tab-example" className="mb-3">
            <Tab eventKey="resume" title={t("TextEditor.Resume")}>
              <Form>
                <Row>
                  <Col md={5}>
                    <Form.Group>
                      <Form.Label>{t("TextEditor.Title")}:</Form.Label>
                      <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={7}>
                    <Form.Group>
                      <Form.Label>{t("TextEditor.SubTitle")}:</Form.Label>
                      <Form.Control type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <Form.Group>
                      <Form.Label>{t("TextEditor.Tags")}:</Form.Label>
                      <Form.Control type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group>
                      <Form.Label>{t("TextEditor.ReadingTime")}:</Form.Label>
                      <Form.Control type="number" value={readingTime} onChange={(e) => setReadingTime(e.target.value)} />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Label>{t("TextEditor.Language")}:</Form.Label>
                    <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)} >
                      <option value="en">en</option>
                      <option value="pt">pt</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row>
                  <Form.Group>
                    <Form.Label>{t("TextEditor.Resume")}:</Form.Label>
                    <Form.Control as="textarea" value={resume} onChange={(e) => setResume(e.target.value)} />
                  </Form.Group>
                </Row>
              </Form>      
            </Tab>  

            <Tab eventKey="editor" title={t("TextEditor.Content")}>
              <Editor
                initialValue={content}
                apiKey="4wzgc9flmneknoszija0x6ctj0ak5zct2z6c3v9181mln3t8"
                init={{
                  height: 600,
                  menubar: true,
                  plugin_version: '6.6.0',
                  plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
                  toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                }}
                onEditorChange={handleEditorChange}/>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" onClick={handleFormSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
      <Alert show={showModal} title={alertType === 'success' ? 'Sucesso' : 'Erro'} message={message} modalSize="lg" handleClose={handleCloseAlert} variant={alertType} />
    </>
  );
};

export default DetailsModal;