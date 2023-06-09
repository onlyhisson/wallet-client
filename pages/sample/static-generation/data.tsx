import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function StaticGenerationData1({ posts }: any) {
  // 브라우저에서 출력됨
  // 개발 모드에서는 server에도 출력됨
  // console.log(posts);
  return (
    <>
      <Head>
        <title>SSG - data</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Static Generation With Data</div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // prod 모드에서는 빌드 타임에만 코드 실행됨
  // By returning { props: { posts } }, the StaticGenerationData component
  // will receive `posts` as a prop at build time

  // const res= await fetch("");
  // const posts = await res.json();
  const now = new Date().getTime();
  const posts = [
    { id: 1, title: "title1", content: "content1" },
    { id: 2, title: "title2", content: "content2" },
    { id: 3, title: "title3", content: "content3" },
  ];

  console.log(`${now} getStaticProps : `, posts);

  return {
    props: {
      posts,
    },
  };
}
