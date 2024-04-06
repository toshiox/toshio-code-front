import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Nav: {
            AboutMe: "About Me",
            TextEditor: "TextEditor",
            ToolTip: "Enter a topic to quickly search the articles. The filter is activated with Enter or FocusOut"
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
            Information: "Information",
            TimeRead: "Time Read",
            CreatedAt: "Created At"
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
            TextEditor: "Editor de Texto",
            ToolTip: "Insira um tópico para pesquisar rapidamente os artigos. O filtro é ativado com Enter ou FocusOut"
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
            Information: "Informacoes",
            TimmeRead: "Tempo de Leitura",
            CreatedAt: "Criado em"
          },
          PageNotFound: {
            Message: "Me desculpe, pagina nao existe."
          },
          PageContent:{
            Obs: "Essa página usa tradução automática utilizando o Azure tradutor.",
            LanguageDescription: "Este artigo foi escrito em:"
          }
        },
      }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
  });
export default i18n;