import Head from "next/head";
import Intro from "../components/intro";
import About from "../components/about";
import Blog from "../components/blog";
import Contact from "../components/contact";
import Footer from "../components/footer";
import dbConnect from "../utils/db-connect";
import BlogModel from "../models/blog";

export default function Home(props) {
  const blogs = JSON.parse(props.blogs);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <title>Mohammed Maher - Personl Website</title>
      </Head>
      <Intro />
      <About />
      <Blog blogs={blogs}/>
      <Contact />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  await dbConnect();
  const res = await BlogModel
  .find()
  .sort({_id: -1})
  .limit(3)
  .exec()
  const blogs = JSON.stringify(res);
  return {
    props: {
      blogs
    }
  }
}
