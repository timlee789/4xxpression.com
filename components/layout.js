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
          href="https://bijouxhair.com/tim/ad/thumb-contest.jpg"
        />
        <meta property="og:title" content="Realistic Hair Style Photo Contest" />
        <meta
          property="og:image"
          content="https://bijouxhair.com/tim/ad/thumb-contest.jpg"
        />
        <meta property="og:description" content="Realistic Hair Style Photo Contest" />
        <meta property="og:site_name" content="Beauty Elements" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} autoClose={2000} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header className='flex'>
          <nav className="flex h-12 items-center px-4 justify-between ">
            <Link href="/">
              <div className="text-2xl font-bold">Beauty Elements </div>
            </Link>
          </nav>
          {/* <div><Link href='/photoGallery'>Go to Gallery</Link></div> */}
            
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner lg: h-50">
          Copyright @2022 Beauty Elements
        </footer>
      </div>
    </div>
  );
}

export default Layout;
