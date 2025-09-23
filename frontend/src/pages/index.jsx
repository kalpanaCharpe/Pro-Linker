import Head from "next/head";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import UserLayout from "@/layout/userLayout";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });



export default function Home() {

  const router = useRouter();
  return (
    <UserLayout>
    <>
    <div className= {styles.container}>


<div className={styles.mainContainer}>

<div className={styles.mainContainer_left}>


  <p>Connect with Friends without Exaggeration</p>
  <p>A True Social Media Experience — With Stories, Without Bugs!</p>

 <div className={styles.buttonJoin}>
  <p onClick={() =>{
router.push("/login")
  }}  >Join  Now</p>
 </div>

</div>

<div className={styles.mainContainer_right}>
  <img src="images/10886321.jpg" alt="" width={500} height={500} />
</div>

</div>

    </div>
    </>
    </UserLayout>
  );
}
