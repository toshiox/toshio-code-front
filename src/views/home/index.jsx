import './home.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { loadingActions } from '../../redux/loading';
import { useDispatch, useSelector } from 'react-redux';
import { articlesSevice } from '../../services/articles';
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';

function Home(){
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [articles, setArticles] = useState([]);
  const currentKeyWord = useSelector((state) => {return state.KeyWord.keyWord});
  const currentLanguage = useSelector((state) => {return state.Language.value});

  useEffect(() => {
    const fetchData = async () => {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const response = await articlesSevice.getHome(currentLanguage);
        setArticles(response.filter((article) => {
          if (currentKeyWord !== undefined) {
            return Object.entries(article).some(([key, value]) => {
              if (key !== 'content' && typeof value === 'string') {
                return value.toLowerCase().includes(currentKeyWord.toLowerCase());
              }
              return false;
            });
          }
        }));
        
        dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  },[currentLanguage, currentKeyWord, dispatch]);

  return (
    <Row xs={1} md={2} className="g-4">
      {articles.map((article, index) => (
        <Link key={index} to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
          <Col key={index}>
            <Card className='card'>
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.subtitle}</Card.Subtitle>
                <Card.Text>
                  {article.resume}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>{article.tags}</div>
                <div>{t('Home.ReadingTime')} ~ {article.timeRead}min | {article.views} <FaEye/> </div>
              </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
       </Link>
      ))}
    </Row>
  );
}
export default Home;