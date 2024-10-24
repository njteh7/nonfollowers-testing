export default function robots() {
  return {
    rules: {
      userAgent: "*",
      //allow: "/",
      disallow: "/",
    },
    sitemap: "https://www.nonfollowers.com/sitemap.xml",
  };
}
