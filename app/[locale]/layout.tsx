import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { ThemeProvider } from '@/components/theme-provider';
import {NextIntlClientProvider} from 'next-intl'; 
import { Navbar } from '@/components/Navbar';
const locales = ['en', 'es'];

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Probando intl y tailwind',
  description: 'Generated by create next app',
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: any
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
 
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head />
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className='sticky top-0'>
              <Navbar />
            </header>
            <div className='container mx-auto pt-4'>
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
