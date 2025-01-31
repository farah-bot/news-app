export const metadata = {
  title: "Berita Kini",
  description: "Website untuk berita terbaru",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Head() {
  return (
    <>
      <meta name="description" content={metadata.description} />
      <meta name="title" content={metadata.title} />
      <link rel="icon" href={metadata.icons.icon} />
    </>
  );
}
