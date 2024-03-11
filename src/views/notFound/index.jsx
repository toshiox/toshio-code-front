import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('PageNotFound.Message')}</h2>
    </div>
  );
};

export default NotFound;
