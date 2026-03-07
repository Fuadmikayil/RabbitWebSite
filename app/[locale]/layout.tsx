import { getDictionary } from '../../i18n/getDictionary'
import { TranslationProvider } from '../../i18n/TranslationProvider'
import { locales, type Locale } from '../../i18n/settings'
import { notFound } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SetHtmlLang from '../../components/SetHtmlLang'
import '../globals.css'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) notFound()

  const dictionary = await getDictionary(locale as Locale)

  return (
    <TranslationProvider dictionary={dictionary} locale={locale as Locale}>
      <SetHtmlLang locale={locale} />
      <Header />
      {children}
      <Footer />
    </TranslationProvider>
  )
}
