import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

export default function Testimonials() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511938059405";
  };

  const testimonials = [
    {
      name: "Carlos Roberto Silva",
      title: "Empresário",
      area: "Direito Empresarial",
      content: "André Dias foi essencial para a constituição da minha empresa. Orientou-me sobre a melhor estrutura tributária e elaborou todos os contratos comerciais. Seu profissionalismo e atenção aos detalhes foram impressionantes. Recomendo para qualquer empresário.",
      rating: 5
    },
    {
      name: "Marina Santos Costa",
      title: "Profissional Liberal",
      area: "Direito Trabalhista",
      content: "Fui demitida injustamente e não sabia meus direitos. André Dias calculou minhas verbas rescisórias corretamente e me ajudou a recuperar valores que não tinham sido pagos. Muito grato pela dedicação e competência.",
      rating: 5
    },
    {
      name: "João Pereira Oliveira",
      title: "Comerciante",
      area: "Direito Cível",
      content: "Tinha um cliente que não pagava há meses. André Dias acionou na Justiça e conseguiu recuperar o valor com juros e correção monetária. O processo foi rápido e eficiente. Muito satisfeito com o resultado.",
      rating: 5
    },
    {
      name: "Fernanda Martins Rocha",
      title: "Mãe de Família",
      area: "Direito de Família",
      content: "Passei por um divórcio difícil. André Dias foi muito humanizado e conseguiu um acordo justo sobre guarda e pensão alimentícia. Protegeu meus direitos e os dos meus filhos. Recomendo para qualquer pessoa nessa situação.",
      rating: 5
    },
    {
      name: "Ricardo Alves Gomes",
      title: "Advogado Criminalista",
      area: "Direito Criminal",
      content: "Meu cliente foi preso em flagrante. André Dias compareceu na delegacia em menos de uma hora e conseguiu sua liberdade provisória na audiência de custódia. Excelente defesa e conhecimento profundo do direito criminal.",
      rating: 5
    },
    {
      name: "Beatriz Souza Mendes",
      title: "Consultora de Negócios",
      area: "Direito Empresarial",
      content: "Precisava fazer uma fusão entre duas empresas. André Dias conduziu todo o processo de due diligence e negociação. Sua expertise em fusões e aquisições foi fundamental para o sucesso da operação.",
      rating: 5
    },
    {
      name: "Paulo Henrique Dias",
      title: "Funcionário",
      area: "Direito Trabalhista",
      content: "Sofria assédio moral no trabalho. André Dias ajudou-me a documentar tudo e acionou na Justiça. Recebi indenização por danos morais e meu emprego foi protegido. Profissional competente e atencioso.",
      rating: 5
    },
    {
      name: "Luciana Ferreira Costa",
      title: "Proprietária de Imóvel",
      area: "Direito Cível",
      content: "Tive um problema com meu vizinho sobre divisão de parede. André Dias resolveu a questão rapidamente através de mediação. Evitou um processo longo e custoso. Muito grato pela solução inteligente.",
      rating: 5
    },
    {
      name: "Gustavo Martins Silva",
      title: "Empresário",
      area: "Direito Criminal",
      content: "Minha empresa foi acusada de fraude. André Dias fez uma defesa brilhante e conseguiu arquivamento do processo. Sua expertise em direito criminal empresarial foi decisiva. Recomendo fortemente.",
      rating: 5
    },
    {
      name: "Alessandra Rocha Oliveira",
      title: "Professora",
      area: "Direito de Família",
      content: "Precisava resolver questão de guarda compartilhada com meu ex-marido. André Dias facilitou a mediação e chegamos a um acordo que protege os interesses dos nossos filhos. Muito profissional e humanizado.",
      rating: 5
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "André Dias Advogados",
    "url": "https://www.andrediasadvogados.com.br",
    "review": testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.content
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-primary display-font">
            André Dias Advogados
          </a>
          <nav className="hidden md:flex gap-8">
            <a
              href="/"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Home
            </a>
            <a
              href="/direito-criminal"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Criminal
            </a>
            <a
              href="/direito-trabalhista"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Trabalhista
            </a>
            <a
              href="/direito-civel"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Cível
            </a>
            <a
              href="/direito-de-familia"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Família
            </a>
            <a
              href="/direito-empresarial"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Empresarial
            </a>
            <a
              href="/depoimentos"
              className="text-sm text-primary font-semibold"
            >
              Depoimentos
            </a>
          </nav>
          <Button onClick={handleWhatsApp} size="sm" className="gap-2">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 display-font">
              O que nossos clientes dizem
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Conheça as histórias de sucesso de clientes que confiaram em nosso
              escritório. Depoimentos reais de pessoas que tiveram seus direitos
              protegidos e problemas jurídicos resolvidos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Fale no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handlePhone}
                className="gap-2"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4 display-font">
              Histórias de Sucesso
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Mais de 10 anos de experiência ajudando pessoas e empresas a
              resolver seus problemas jurídicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                area={testimonial.area}
                content={testimonial.content}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2 display-font">
                16+
              </p>
              <p className="text-foreground/70">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2 display-font">
                500+
              </p>
              <p className="text-foreground/70">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2 display-font">
                1000+
              </p>
              <p className="text-foreground/70">Casos Resolvidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2 display-font">
                5.0★
              </p>
              <p className="text-foreground/70">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 display-font">
            Você também pode ter sucesso
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Procure-nos para uma consulta especializada. Temos soluções para sua
            situação jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsApp} className="gap-2">
              <MessageCircle className="w-5 h-5" />
              Enviar Mensagem WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handlePhone}
              className="gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                André Dias Advogados
              </h4>
              <p className="text-sm text-foreground/70">
                Advocacia especializada com 16 anos de experiência na Zona Leste
                de São Paulo.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Áreas de Atuação
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="/direito-criminal"
                    className="hover:text-primary transition"
                  >
                    Direito Criminal
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-trabalhista"
                    className="hover:text-primary transition"
                  >
                    Direito Trabalhista
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-civel"
                    className="hover:text-primary transition"
                  >
                    Direito Cível
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-de-familia"
                    className="hover:text-primary transition"
                  >
                    Direito de Família
                  </a>
                </li>
                <li>
                  <a
                    href="/direito-empresarial"
                    className="hover:text-primary transition"
                  >
                    Direito Empresarial
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Contato
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="tel:+5511938059405"
                    className="hover:text-primary transition"
                  >
                    🚨 Criminal: (11) 9 3805-9405
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+551150506310"
                    className="hover:text-primary transition"
                  >
                    📞 Demais Áreas: (11) 5050-6310
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511938059405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition"
                  >
                    💬 WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4 display-font">
                Localização
              </h4>
              <a
                href="https://maps.google.com/?q=Rua+Aldeia+dos+Machac%C3%A1lis,+124,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-primary transition"
              >
                Rua Aldeia dos Machacális, 124
                <br />
                Zona Leste - São Paulo/SP
                <br />
                CEP: 08430-430
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>
              &copy; 2026 André Dias Advogados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </div>
  );
}
