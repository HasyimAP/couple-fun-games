import './SupportButton.css';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

function SupportButton() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <a 
      href="https://trakteer.id/HasyimAP" 
      target="_blank" 
      rel="noopener noreferrer"
      className="support-button"
      title={t.support.tooltip}
    >
      {t.support.buttonText}
    </a>
  );
}

export default SupportButton;
