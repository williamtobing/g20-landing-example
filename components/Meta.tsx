import Head from "next/head";

type metaProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({ title, keywords, description }: metaProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "G20 INDONESIA 2022",
  keywords: "G20, Indonesia, 2022",
  description: "G20 INDONESIA 2022 Official Website",
};

export default Meta;
