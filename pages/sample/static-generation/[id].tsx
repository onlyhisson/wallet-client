import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.scss";

import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string;
}

const tempData = [
  { id: 1, title: "title1", content: "content1" },
  { id: 2, title: "title2", content: "content2" },
  { id: 3, title: "title3", content: "content3" },
];

export default function StaticGenerationData2({ post }: any) {
  // 브라우저에서 출력됨
  // 개발 모드에서는 server에도 출력됨
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
    // fallback = true 시, 접속한 페이지를 생성할 때 보여주는 페이지
  }

  return (
    <>
      <Head>
        <title>SSG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div>Static Generation With Data depends on paths</div>
        </div>
        <div>{post?.title ? post.title : "none"}</div>
        <div>{post?.content ? post.content : "none"}</div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  console.log("getStaticPaths...");

  // prod 모드에서는 빌드 타임에만 코드 실행됨
  // By returning { props: { posts } }, the StaticGenerationData component
  // will receive `posts` as a prop at build time

  // path로 허용할 컨텐츠 목록 조회
  // const res= await fetch("");
  // const posts = await res.json();
  const posts = tempData;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  //return { paths, fallback: "blocking" };
  return { paths, fallback: true };
}

export async function getStaticProps(context: GetServerSidePropsContext) {
  console.log("getStaticProps...");

  // path로 입력받은 키를 파라미터로 하나의 컨텐츠 조회
  // const res= await fetch("");
  // const posts = await res.json();

  const { params, locales, locale, defaultLocale } = context;
  const { id } = params as IParams;

  const post = tempData.filter((el) => String(el.id) === id)[0];

  console.log("context : ", context);
  console.log("params : ", params);
  console.log("post : ", post);

  return {
    // Passed to the page component as props
    props: { post },
  };
}
