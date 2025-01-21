import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ea deleniti dolore! Modi quo vero hic ut. Perspiciatis maiores error exercitationem? Odit, molestiae repellendus architecto debitis provident officiis sint ducimus?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio reiciendis, voluptate blanditiis asperiores incidunt optio vel voluptatum maiores. Placeat aut accusantium fugit in, modi temporibus dolor unde adipisci beatae quasi?</p>
      <Link href="/ninjas">See Ninja Listing</Link>
      <Footer></Footer>
    </div>
  );
}
