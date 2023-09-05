import { SEOPropsType } from '@/types/components/common/SEOPropsType';
import Head from 'next/head';

export default function SEO ({ title }:SEOPropsType) {
    return(
        <Head>
            <title>{`VOZA ${title ?? ''}`}</title>
        </Head>
    )
}