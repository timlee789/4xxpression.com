import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Layout({ title, children }) {
  


  return (
    <div>
      <Head>
        <title>{title ? title + '-Bijoux' : '4X Xpression'}</title>
        <meta name="description" content=" Realistic Xpression Hair Style Photo Contest" />
        <link
          rel="image_src"
          href="/images/pavicon.jpg"
        />
        <meta property="og:title" content="Realistic Hair Style Photo Contest" />
        <meta
          property="og:image"
          content="/images/pavicon.jpg"
        />
        <meta property="og:description" content="Realistic Hair Style Photo Contest" />
        <meta property="og:site_name" content="Beauty Elements" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} autoClose={2000} />

      <div className="flex min-h-screen flex-col justify-between ">
      <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md ">
            <Link href="/">
              <div className="text-lg font-bold">Home</div>
            </Link>
           <div className='flex justify-between font-bold'>
              <Link href="/gallery" className="px-4 flex">
                Contestant Gallery
              </Link>
            </div>
            </nav>
        </header>
            
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner lg: h-50">
          Copyright @2023 Beauty Elements
        </footer>
      </div>
    </div>
  );
}

export default Layout;
