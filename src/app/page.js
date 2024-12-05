'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useRouter} from 'next/navigation';

export default function Home() {

  const router = useRouter();

  router.push('/login');

  const handleRedirect = () => {
    router.push('/dashboard'); // Replace '/about' with the route you want to navigate to
  };

  return (
  <div>
    


  </div>
  );
}
