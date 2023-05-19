import { Header } from '../components/header'
import { useTranslation } from 'react-i18next'
import { ni18nConfig } from '../ni18n.config'
import {
  loadTranslations
} from 'ni18n'

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <>
      <main>
        <Header />
        <h1>{t('commonproperties.text1')}</h1>
        <h1>{t('toastmessages.toast2')}</h1>
      </main>
    </>
  )
}

export default HomePage

export const getStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, props.locale, [
        'translation',
      ])),
    },
  }
}

// export const getServerSideProps = async (props) => {
//   return {
//     props: {
//       ...(await loadTranslations(ni18nConfig, props.locale, [
//         'translation',
//       ])),
//     },
//   }
// }