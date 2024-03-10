import { useTranslation } from 'react-i18next';

function Switch() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSelectedIndexChange = (languag) => {
    changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleSelectedIndexChange('en')}>English</button>
      <button onClick={() => handleSelectedIndexChange('pt')}>Portugues</button>
    </div>
  );
}

export default Switch;