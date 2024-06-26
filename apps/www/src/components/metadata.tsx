import { siteConfig } from "@/config/site";
import { Link, Meta, Style, Title } from "@solidjs/meta";
import type { VoidComponent } from "solid-js";

type Props = {
  title?: string;
  description?: string;
  url?: string;
};

export const Metadata: VoidComponent<Props> = props => {
  return (
    <>
      <Title>{props.title || siteConfig.title}</Title>
      <Meta name="description" content={props.description || siteConfig.description} />
      <Meta
        name="keywords"
        content="Solidjs,SolidStart,TailwindCSS,Kobalte UI,shadcn,Solid Component,UnoCSS"
      />
      <Meta name="author" content="hngngn" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={props.title || siteConfig.title} />
      <Meta name="twitter:description" content={props.description || siteConfig.description} />
      <Meta name="twitter:image" content="https://shadcn-solid.com/og.png" />
      <Meta name="twitter:image:alt" content={props.title || siteConfig.title} />
      <Meta name="twitter:creator" content="@hnggngnn" />

      <Meta property="og:title" content={props.title || siteConfig.title} />
      <Meta property="og:description" content={props.title || siteConfig.description} />
      <Meta property="og:url" content={props.url || siteConfig.url} />
      <Meta property="og:site_name" content={props.title || siteConfig.title} />
      <Meta property="og:locale" content="en_US" />
      <Meta property="og:type" content="article" />
      <Meta property="og:image" content="https://shadcn-solid.com/og.png" />
      <Meta property="og:alt" content={props.title || siteConfig.title} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />

      <Meta property="canonical" content={props.url || siteConfig.url} />

      <Link rel="shortcut icon" href="/favicon-16x16.png" />
      <Link rel="icon" href="/favicon.ico" />
      <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link
        rel="preload"
        href="/fonts/GeistVariableVF.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <Style type="text/css">
        {
          '@font-face { font-family: "Geist Sans Variable"; src: url("/fonts/GeistVariableVF.woff2") format("woff2"); font-display: swap;}'
        }
      </Style>
    </>
  );
};
