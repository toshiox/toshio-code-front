import DetailsModal from './modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { loadingActions } from '../../redux/loading';
import { Table, Form, Row, Col } from 'react-bootstrap';
import { articlesSevice } from '../../services/articles';
import { DateFunctions } from '../../services/utils/date';


const TextEditor = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState(undefined);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [articles, setArticles] = useState([]);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => {return state.Language.value});
  const [filteredArticles, setFilteredArticles] = useState([]);
  const columns = [
    'ID', 
    t('TextEditor.Title'),
    t('TextEditor.SubTitle') ,
    t('TextEditor.Resume'),
    t('TextEditor.Tags'),
    t('TextEditor.CreatedAt')
  ];
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRowData(null);
  };
  const handleUpdateResult = (success) => {
    if(success){
      setCount(count + 1);
    }
  };
  const handleRowClick = (index) => {
    setShowModal(true);
    var id = document.getElementById("tr_id_" + index).children[0].innerHTML;
    var value = filteredArticles.filter(item => item.id === id)[0]
    setSelectedRowData(value);
  };

  useEffect(() => {
    const fetchData = async () => {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const response = await articlesSevice.getAllArticles();
        setArticles(response.data); 
        dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  },[currentLanguage]);

  useEffect(() => {
    setFilteredArticles(
      articles.filter((article) =>{
        if(filter !== undefined)
          return Object.values(article).some((value) => typeof value === 'string' && value.toLowerCase().includes(filter.toLowerCase()))
        else
          return article;
      })
    );
  }, [filter, articles]);

  return (
    <div>
      <Form.Group controlId="formFilter">
        <Row>
          <Col md={5}>
            <Form.Control type="text"  placeholder={t('Inputs.PlaceHolders.KeyWord')} value={filter} onChange={(e) => setFilter(e.target.value)}/>
          </Col>
        </Row>
      </Form.Group>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((item, index)=> (
            <tr key={item._id.$oid } id={`tr_id_${index}`} onClick={() => handleRowClick(index)}>
              <td>{item._id.$oid}</td>
              <td>{item.title}</td>
              <td>{item.subtitle}</td>
              <td>{item.resume}</td>
              <td>{item.tags}</td>
              <td>{DateFunctions.FormatDate(new Date(item.createdAt), 'dd/MM/yyyy HH:mm')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DetailsModal show={showModal} handleClose={handleCloseModal} rowData={selectedRowData} modalSize="lg" onUpdate={handleUpdateResult} />
    </div>
  );
};
export default TextEditor;