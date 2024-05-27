import './style.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ArticleCard = ({content}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card id ="card-content" className="text-center">
        <Card.Header>
          <h2>{content.title}</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="content"> 
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {content.createdAt}
          <br />
          {t('Home.ReadingTime')} ~ {content.timeRead}min
        </Card.Footer>
      </Card>
      <h6>{t('PageContent.LanguageDescription')} {content.writtenLanguage}</h6>
      <h6>{t('PageContent.Obs')}</h6>
    </>
  );
};

export default ArticleCard;
