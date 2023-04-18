import Head from "next/head";

import styles from "@/styles/Home.module.scss";

import LayoutPublic from "@/components/layout-public";
import NestedLayout from "@/components/nested-layout";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.center}>
        <div>Profile</div>
      </div>
    </>
  );
}

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <LayoutPublic>
      <NestedLayout>{page}</NestedLayout>
    </LayoutPublic>
  );
};
