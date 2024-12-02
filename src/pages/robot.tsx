// pages/robots.tsx

import { GetServerSideProps } from "next";

const Robots = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  const robotsTxt = `
    User-agent: *
    Disallow: /admin
    Allow: /

    Sitemap: https://www.bubblewaffleharrachov.cz/sitemap.xml
  `;
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default Robots;
