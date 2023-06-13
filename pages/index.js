import Head from 'next/head';
import Link from 'next/link';
import Layout, {siteTitle} from "../components/layout";
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>I'm a Fullstack Web Developer from Norway, and coding is not just my profession, it's my passion! In
                    my free time, you'll find me fully immersed in code, exploring new techniques, and staying
                    up-to-date with the latest advancements in technology.</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
