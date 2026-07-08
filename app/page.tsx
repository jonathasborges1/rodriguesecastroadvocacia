import { faqs } from "@/lib/site";
import { AreasAtuacao } from "@/components/AreasAtuacao";
import { Contato } from "@/components/Contato";
import { CtaFinal } from "@/components/CtaFinal";
import { Equipe } from "@/components/Equipe";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { GoldStrip } from "@/components/GoldStrip";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { QuemSomos } from "@/components/QuemSomos";
import { QuoteBanner } from "@/components/QuoteBanner";
import { RevealAnimations } from "@/components/RevealAnimations";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo" className="rc">
        <Hero />
        <GoldStrip />
        <QuemSomos />
        <AreasAtuacao />
        <QuoteBanner />
        <Equipe />
        <Faq />
        <Contato />
        <CtaFinal />
        <Footer />
      </main>
      <WhatsAppFloat />
      <RevealAnimations />
    </>
  );
}
