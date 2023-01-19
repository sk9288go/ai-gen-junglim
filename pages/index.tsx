import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { NewForm1 } from '@/src/ui-components';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <NewForm1 width="20%" />
    </div>
  );
};