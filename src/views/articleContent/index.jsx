
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
      await articlesSevice.getCounter(id);
      const result = await articlesSevice.getById(`${id}_${currentLanguage}`);
      let json = JSON.parse(result);
      json.content = TextFunctions.HighlightCSharpCode(json.content);
      json.content = TextFunctions.HighlightRubyCode(json.content);
      json.createdAt = DateFunctions.FormatDate(new Date(json.createdAt), 'dd/MM/yyyy HH:mm');
      functions.SetContentClass();
      setContent(json);
      dispatch(loadingActions.setLoading({ isLoading: false }));
    };
    fetchData();
  }, [id, currentLanguage, dispatch]);

  return <>
    <ArticleCard content={content} />
  </>;
};

export default ArticleContent;
