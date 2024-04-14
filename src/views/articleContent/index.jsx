
import './style.css';
import ArticleCard from './content';
import { functions } from './functions';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { loadingActions } from '../../redux/loading';
import { useSelector, useDispatch } from 'react-redux';
import { articlesSevice } from '../../services/articles';
import { DateFunctions } from '../../services/utils/date';
import { TextFunctions } from '../../services/utils/textEditor';
const ArticleContent = () => {
  const { id } = useParams();
  const [content, setContent] = useState(Object);
  const currentLanguage = useSelector((state) => state.Language.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadingActions.setLoading({ isLoading: true }));
      console.log(`${id}_${currentLanguage}`)
      const result = await articlesSevice.getById(`${id}_${currentLanguage}`);
      result.content = TextFunctions.HighlightCSharpCode(result.content);
      result.content = TextFunctions.HighlightRubyCode(result.content);
      result.createdAt = DateFunctions.FormatDate(new Date(result.createdAt), 'dd/MM/yyyy HH:mm');
      functions.SetContentClass();
      setContent(result);
      dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  }, [id, currentLanguage, dispatch]);

  return <>
    <ArticleCard content={content} />
  </>;
};

export default ArticleContent;
