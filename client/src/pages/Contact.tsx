import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import AdvancedContactForm from "@/components/AdvancedContactForm";
import { MapView } from "@/components/Map";
import { Link } from "wouter";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5511938059405?text=Olá%2C%20gostaria%20de%20uma%20consulta%20jurídica", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+5511938059405";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-white/95 backdrop-blur">
        <div className="container py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-primary display-font"
          >
            André Dias Advogados
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/direito-criminal"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Criminal
            </Link>
            <Link
              href="/direito-trabalhista"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Trabalhista
            </Link>
            <Link
              href="/direito-civel"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Cível
            </Link>
            <Link
              href="/direito-de-familia"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Família
            </Link>
            <Link
              href="/direito-empresarial"
              className="text-sm text-foreground hover:text-primary transition"
            >
              Empresarial
            </Link>
            <Link
              href="/contato"
              className="text-sm text-primary font-semibold"
            >
              Contato
            </Link>
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
              Entre em Contato Conosco
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Preencha o formulário abaixo com as informações do seu caso.
              Nossos especialistas entrarão em contato em breve para discutir
              como podemos ajudá-lo.
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

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 display-font">
                Telefone
              </h3>
              <p className="text-foreground/70 mb-2">Direito Criminal (24h):</p>
              <a
                href="tel:+5511938059405"
                className="text-primary font-semibold hover:underline block mb-4"
              >
                (11) 9 3805-9405
              </a>
              <p className="text-foreground/70 mb-2">Demais Áreas:</p>
              <a
                href="tel:+551150506310"
                className="text-primary font-semibold hover:underline"
              >
                (11) 5050-6310
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 display-font">
                Localização
              </h3>
              <a
                href="https://maps.google.com/?q=Rua+Aldeia+dos+Machacalis,+124,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition cursor-pointer block"
              >
                Rua Aldeia dos Machacalis, 124
                <br />
                Zona Leste - São Paulo/SP
                <br />
                CEP: 03000-000
              </a>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 display-font">
                Horário de Atendimento
              </h3>
              <p className="text-foreground/70">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 13h
                <br />
                Emergências: 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 display-font">
              Localização do Escritório
            </h2>
            <p className="text-lg text-foreground/70">
              Visite-nos na Zona Leste de São Paulo. Clique no mapa para mais
              informações e direções.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-border shadow-lg h-96">
            <MapView
              initialCenter={{ lat: -23.5505, lng: -46.6333 }}
              initialZoom={15}
              onMapReady={(map: any) => {
                // Add marker for the office location
                const marker = new (window as any).google.maps.Marker({
                  position: { lat: -23.5505, lng: -46.6333 },
                  map: map,
                  title: "André Dias Advogados",
                  icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                });

                // Add info window
                const infoWindow = new (window as any).google.maps.InfoWindow({
                  content: `
                    <div style="padding: 10px; font-family: Arial, sans-serif;">
                      <h3 style="margin: 0 0 5px 0; font-size: 16px; font-weight: bold;">André Dias Advogados</h3>
                      <p style="margin: 0 0 3px 0; font-size: 13px;">Rua Aldeia dos Machacális, 124</p>
                      <p style="margin: 0 0 3px 0; font-size: 13px;">Zona Leste - São Paulo/SP</p>
                      <p style="margin: 0 0 5px 0; font-size: 13px;">CEP: 03000-000</p>
                      <p style="margin: 0; font-size: 12px; color: #666;">
                        <strong>Criminal (24h):</strong> (11) 9 3805-9405<br/>
                        <strong>Demais Áreas:</strong> (11) 5050-6310
                      </p>
                    </div>
                  `,
                });

                marker.addListener("click", () => {
                  infoWindow.open(map, marker);
                });

                // Open info window by default
                infoWindow.open(map, marker);
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 display-font">
              Formulário de Contato
            </h2>
            <p className="text-lg text-foreground/70">
              Preencha o formulário abaixo com informações sobre seu caso.
              Quanto mais detalhes você fornecer, melhor poderemos ajudá-lo.
            </p>
          </div>

          <AdvancedContactForm />
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center display-font">
            Dúvidas Frequentes?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/direito-criminal"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-foreground mb-2 display-font">
                Direito Criminal
              </h3>
              <p className="text-foreground/70 text-sm">
                Veja perguntas frequentes sobre prisão em flagrante, habeas
                corpus e defesa criminal.
              </p>
            </a>
            <a
              href="/direito-trabalhista"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-foreground mb-2 display-font">
                Direito Trabalhista
              </h3>
              <p className="text-foreground/70 text-sm">
                Conheça seus direitos sobre demissão, verbas rescisórias e
                assédio moral.
              </p>
            </a>
            <a
              href="/direito-civel"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-foreground mb-2 display-font">
                Direito Cível
              </h3>
              <p className="text-foreground/70 text-sm">
                Esclareça dúvidas sobre contratos, indenizações e ações cíveis.
              </p>
            </a>
            <a
              href="/direito-de-familia"
              className="p-6 bg-white rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-foreground mb-2 display-font">
                Direito de Família
              </h3>
              <p className="text-foreground/70 text-sm">
                Saiba mais sobre divórcio, guarda de filhos e pensão
                alimentícia.
              </p>
            </a>
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
              <p className="text-sm text-foreground/70">
                Rua Aldeia dos Machacális, 124
                <br />
                Zona Leste - São Paulo/SP
                <br />
                CEP: 03000-000
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>
              &copy; 2026 André Dias Advogados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
