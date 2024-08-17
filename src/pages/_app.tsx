import '../styles/index.css'
import React from 'react'
import App from 'next/app'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import NProgressHandler from 'components/NProgressHandler'
import Head from 'next/head'
import { Toaster } from 'components/Toast'
import { BooksContextProvider } from 'context/book'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Brands Are Live</title>
          <meta content="Brands Are Live" property="og:title" />
          <meta content="@dwarvesf" name="twitter:site" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta
            content="Opinionated React template for building web applications at scale."
            name="description"
          />
          <meta
            content="Opinionated React template for building web applications at scale."
            property="og:description"
          />
          <meta content="/thumbnail.jpeg" property="og:image" />
          <meta content="/thumbnail.jpeg" name="twitter:image" />
        </Head>
        <AppRouterCacheProvider>
          <BooksContextProvider>
            <NProgressHandler />
            <Component {...pageProps} />
          </BooksContextProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </>
    )
  }
}
export default MyApp
