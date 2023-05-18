import { useTranslation } from 'react-i18next'

const changeLanguage = (i18n, language) => {
  window.localStorage.setItem('MY_LANGUAGE', language)
  i18n.changeLanguage(language)
}

const languages = [
  { code: 'en_US', translateKey: 'english' },
  { code: 'guj_IN', translateKey: 'Gujrati' },
  { code: 'hindi_IN', translateKey: 'Hindi' },
  { code: 'marathi_IN', translateKey: 'Marathi' },
  { code: 'pun_IN', translateKey: 'Punjabi' },
  { code: 'telgu_IN', translateKey: 'Telgu' },
]

// const supportedLngs = ['en_US', 'guj_IN', 'hindi_IN', 'marathi_IN', 'pun_IN', 'telgu_IN']

export const Header = () => {
  const { t, i18n } = useTranslation()
  return (
    <header>
      <div>
        {languages.map((language) => (
          <button
            data-id={`${language.code}-button`}
            className={i18n.language === language.code ? 'active' : undefined}
            onClick={() => changeLanguage(i18n, language.code)}
            key={language.code}
          >
            {t(language.translateKey)}
          </button>
        ))}
      </div>
    </header>
  )
}
