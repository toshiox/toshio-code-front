import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Nav: {
            AboutMe: "About Me",
            TextEditor: "TextEditor"
          },
          Languages: {
            English: 'English',
            Portuguese: 'Portuguese'
          },
          Buttons: {
            Search: 'Search'
          },
          Inputs:{
            PlaceHolders:{
              KeyWord: "Keyword"
            }
          },
          Home:{
            ReadingTime: "Reading Time"
          },
          Loading:{
            Message: "Loading"
          },
          TextEditor:{
            ArticleDescription: "Article Description",
            Title: "Title",
            SubTitle: "SubTitle",
            ReadingTime: "ReadingTime",
            Resume: "Resume",
            Content: "Content",
            Tags: "Tags",
            Language: "Language",
            Information: "Information"
          },
          PageNotFound: {
            Message: "I'm sorry, page not found"
          },
          PageContent:{
            Obs: "This page uses automatic translation using Azure Translator.",
            LanguageDescription: "This article was written in:"
          }
        },
      },
      pt: {
        translation: {
          Nav: {
            AboutMe: "Sobre Mim",
            TextEditor: "Editor de Texto"
          },
          Languages: {
            English: 'Inglês',
            Portuguese: 'Português'
          },
          Buttons: {
            Search: 'Procurar'
          },
          Inputs:{
            PlaceHolders:{
              KeyWord: "Palavra chave"
            }
          },
          Home:{
            ReadingTime: "Tempo de Leitura"
          },
          Loading:{
            Message: "Carregando"
          },
          TextEditor:{
            ArticleDescription: "Descrição Artigo",
            Title: "Título ",
            SubTitle: "Subtítulo ",
            ReadingTime: "Tempo de Leitura",
            Resume: "Resumo",
            Content: "Conteúdo",
            Tags: "Tags",
            Language: "Linguagem",
            Information: "Informacoes"
          },
          PageNotFound: {
            Message: "Me desculpe, pagina nao existe."
          },
          PageContent:{
            Obs: "Essa página usa tradução automática utilizando o Azure tradutor.",
            LanguageDescription: "Este artigo foi escrito em:"
          }
        },
      },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;