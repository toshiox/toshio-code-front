import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { loadingActions } from '../../redux/loading';
import ArticleCard from '../articleContent/content';
import { useSelector, useDispatch } from 'react-redux';
import { articlesSevice } from '../../services/articles';
import { DateFunctions } from '../../services/utils/date';

const ArticleContent = () => {
  const { id } = useParams();
  const [content, setContent] = useState(Object);
  const currentLanguage = useSelector((state) => state.Language.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadingActions.setLoading({ isLoading: true }));
        const result = await articlesSevice.getById(`654a44012bd6ebb1202d3c77_${currentLanguage}`);
        result.createdAt = DateFunctions.FormatDate(new Date(result.createdAt), 'dd/MM/yyyy HH:mm');
        setContent(result);
        dispatch(loadingActions.setLoading({ isLoading: false }));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, [id, currentLanguage, dispatch]);

  return <><ArticleCard content={content} /></>
};

export default ArticleContent;
