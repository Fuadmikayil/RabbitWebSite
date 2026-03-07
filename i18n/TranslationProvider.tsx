'use client'

import { createContext, useContext, type ReactNode } from 'react'
import type { Locale } from './settings'

type Dictionary = Record<string, any>

type TranslationContextType = {
  t: (key: string) => string
  locale: Locale
}

const TranslationContext = createContext<TranslationContextType>({
  t: (key: string) => key,
  locale: 'az',
})

function getNestedValue(obj: any, path: string): string {
  const result = path.split('.').reduce((acc, key) => acc?.[key], obj)
  return typeof result === 'string' ? result : path
}

export function TranslationProvider({
  children,
  dictionary,
  locale,
}: {
  children: ReactNode
  dictionary: Dictionary
  locale: Locale
}) {
  const t = (key: string) => getNestedValue(dictionary, key)

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  return useContext(TranslationContext)
}
