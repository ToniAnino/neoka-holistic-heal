import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
            {title.replace(" – Centro Neoka", "")}
          </h1>
          <div className="prose prose-lg max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:font-serif [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
