import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url }) => {
    // Silicon Valley Standard SEO: JSON-LD for LocalBusiness
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MathTutoringSchool",
        "name": "해냄수학",
        "image": "https://haenam-math.com/images/hero.png", // Placeholder
        "description": "부산 명장동 수학학원, 해냄수학. 수학 문해력을 키워 성적을 올립니다. 1:1 과외식 밀착 관리.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "명장로127번길 10",
            "addressLocality": "부산광역시",
            "addressRegion": "동래구",
            "postalCode": "47812",
            "addressCountry": "KR"
        },
        "telephone": "+82-10-7376-6040",
        "url": "https://haenam-math.com", // Placeholder
        "priceRange": "$$"
    };

    return (
        <Helmet>
            <title>{title ? `${title} | 해냄수학` : "해냄수학 - 부산 명장동 수학 문해력 전문"}</title>
            <meta name="description" content={description || "내 아이를 위한 확실한 선택. 부산 동래구 명장동, 안락동 수학학원 해냄수학. 독한 관리와 1:1 맞춤 수업으로 성적으로 증명합니다."} />
            <meta name="keywords" content={keywords || "부산수학학원, 동래구수학학원, 명장동수학학원, 안락동수학학원, 충렬고내신, 안락중내신, 혜화여고수학, 수학문해력, 1:1과외식"} />

            {/* FaceBook / Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || "해냄수학 - 부산 명장동 수학의 정답"} />
            <meta property="og:description" content={description || "수학 문해력으로 50점에서 100점까지. 해냄수학이 함께합니다."} />
            <meta property="og:locale" content="ko_KR" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
