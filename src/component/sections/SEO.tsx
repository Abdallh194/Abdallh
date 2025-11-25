import { Title, Meta, Link } from "react-head";
import { useEffect } from "react";

export default function SEO() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Abdallh Sabry",
      jobTitle: "Front-End Developer",
      url: "https://your-domain.com/",
      image: "https://your-domain.com/your-photo.png",
      description:
        "Front-End Developer specializing in React, TypeScript, and SEO-friendly interfaces.",
      sameAs: [
        "https://www.linkedin.com/in/YOUR-LINK",
        "https://github.com/YOUR-GITHUB",
      ],
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Title>Abdallh Sabry | Front-End Developer & React Specialist</Title>

      <Meta
        name="description"
        content="I'm Abdallh Sabry, a Front-End Developer specializing in React, TypeScript, and building fast, responsive, SEO-optimized websites."
      />

      <Meta
        name="keywords"
        content="Abdallh Sabry, Front-End Developer, React Developer, Freelancer, JavaScript Developer, TypeScript, Portfolio"
      />

      <Meta name="author" content="Abdallh Sabry" />
      <Meta name="robots" content="index, follow" />

      <Link rel="icon" href="/logo.png" />

      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="Abdallh Sabry Portfolio" />
      <Meta
        property="og:title"
        content="Abdallh Sabry | Front-End Developer Portfolio"
      />
      <Meta
        property="og:description"
        content="Front-End Developer building modern, fast, and SEO-friendly websites using React & TypeScript."
      />
      <Meta property="og:url" content="https://your-domain.com/" />
      <Meta property="og:image" content="https://your-domain.com/preview.png" />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta
        name="twitter:title"
        content="Abdallh Sabry | Front-End Developer"
      />
      <Meta
        name="twitter:description"
        content="React & TypeScript Developer creating fast, modern UI."
      />
      <Meta
        name="twitter:image"
        content="https://your-domain.com/preview.png"
      />
    </>
  );
}
