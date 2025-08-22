// components/seo/Head.jsx (Server Component — no 'use client')
import PageHead from "@/components/global/PageHead";
import { pageMetadata, schemaGenerators } from "@/data/metadata";

export default function HeadComponent() {
  const meta = pageMetadata["/"];
  const schema = schemaGenerators["/"]?.();

  return (
    <PageHead
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      ogimage={meta.ogimage}
      canonical="/"
      schema={schema}
    />
  );
}
