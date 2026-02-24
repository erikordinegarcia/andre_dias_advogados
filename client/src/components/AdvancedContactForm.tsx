import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

type ServiceArea = "criminal" | "trabalhista" | "civel" | "familia" | "empresarial" | "";

interface FormData {
  name: string;
  email: string;
  phone: string;
  area: ServiceArea;
  urgency: string;
  description: string;
  // Criminal specific
  criminalType?: string;
  location?: string;
  // Trabalhista specific
  employmentStatus?: string;
  employmentType?: string;
  // Cível specific
  civilType?: string;
  contractValue?: string;
  // Família specific
  familyType?: string;
  childrenCount?: string;
  // Empresarial specific
  companySize?: string;
  operationType?: string;
}

export default function AdvancedContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    area: "",
    urgency: "normal",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.phone || !formData.area || !formData.description) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);
    
    try {
      // Simular envio do formulário
      // Em produção, isso seria enviado para um backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Formulário enviado:", formData);
      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
      
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          area: "",
          urgency: "normal",
          description: "",
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const renderAreaSpecificFields = () => {
    switch (formData.area) {
      case "criminal":
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Caso Criminal *
              </label>
              <select
                name="criminalType"
                value={formData.criminalType || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tipo de caso</option>
                <option value="prisao-flagrante">Prisão em Flagrante</option>
                <option value="habeas-corpus">Habeas Corpus</option>
                <option value="defesa-criminal">Defesa Criminal</option>
                <option value="recurso">Recurso em Tribunal</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Local do Ocorrido *
              </label>
              <input
                type="text"
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
                placeholder="Ex: Zona Leste, São Paulo"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        );

      case "trabalhista":
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Situação Atual do Emprego *
              </label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione a situação</option>
                <option value="empregado">Ainda Empregado</option>
                <option value="demitido">Demitido Recentemente</option>
                <option value="demitido-tempo">Demitido há Tempo</option>
                <option value="assedio">Sofrendo Assédio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Vínculo *
              </label>
              <select
                name="employmentType"
                value={formData.employmentType || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tipo</option>
                <option value="clt">CLT (Carteira Assinada)</option>
                <option value="pj">PJ (Pessoa Jurídica)</option>
                <option value="autonomo">Autônomo</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </>
        );

      case "civel":
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Questão Cível *
              </label>
              <select
                name="civilType"
                value={formData.civilType || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tipo</option>
                <option value="contrato">Contrato Descumprido</option>
                <option value="cobranca">Cobrança de Dívida</option>
                <option value="indenizacao">Indenização por Danos</option>
                <option value="propriedade">Questão Patrimonial</option>
                <option value="consumidor">Direito do Consumidor</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Valor Aproximado da Questão
              </label>
              <input
                type="text"
                name="contractValue"
                value={formData.contractValue || ""}
                onChange={handleChange}
                placeholder="Ex: R$ 10.000"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        );

      case "familia":
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Questão Familiar *
              </label>
              <select
                name="familyType"
                value={formData.familyType || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tipo</option>
                <option value="divorcio-consensual">Divórcio Consensual</option>
                <option value="divorcio-litigioso">Divórcio Litigioso</option>
                <option value="guarda">Guarda de Filhos</option>
                <option value="pensao">Pensão Alimentícia</option>
                <option value="separacao">Separação de Bens</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Número de Filhos
              </label>
              <input
                type="number"
                name="childrenCount"
                value={formData.childrenCount || ""}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        );

      case "empresarial":
        return (
          <>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tamanho da Empresa *
              </label>
              <select
                name="companySize"
                value={formData.companySize || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tamanho</option>
                <option value="mei">MEI (Microempreendedor)</option>
                <option value="pequena">Pequena Empresa</option>
                <option value="media">Média Empresa</option>
                <option value="grande">Grande Empresa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tipo de Operação *
              </label>
              <select
                name="operationType"
                value={formData.operationType || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione o tipo</option>
                <option value="constituicao">Constituição de Empresa</option>
                <option value="contratos">Contratos Comerciais</option>
                <option value="compliance">Compliance</option>
                <option value="fusao">Fusão/Aquisição</option>
                <option value="conflito-socios">Conflito entre Sócios</option>
              </select>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Card className="p-12 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2 display-font">
          Formulário Enviado com Sucesso!
        </h3>
        <p className="text-foreground/70 mb-6">
          Obrigado pelo seu contato. Entraremos em contato em breve para discutir seu caso.
        </p>
        <p className="text-sm text-foreground/60">
          Você pode também nos chamar no WhatsApp: <a href="https://wa.me/5511938059405" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">(11) 9 3805-9405</a>
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados Básicos */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground display-font">
            Informações Pessoais
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 98765-4321"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Área de Atuação */}
        <div className="space-y-4 border-t border-border pt-6">
          <h3 className="text-lg font-bold text-foreground display-font">
            Área de Atuação
          </h3>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Qual área você precisa de ajuda? *
            </label>
            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecione uma área</option>
              <option value="criminal">Direito Criminal</option>
              <option value="trabalhista">Direito Trabalhista</option>
              <option value="civel">Direito Cível</option>
              <option value="familia">Direito de Família</option>
              <option value="empresarial">Direito Empresarial</option>
            </select>
          </div>

          {/* Campos Específicos por Área */}
          {formData.area && (
            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
              {renderAreaSpecificFields()}
            </div>
          )}
        </div>

        {/* Urgência e Descrição */}
        <div className="space-y-4 border-t border-border pt-6">
          <h3 className="text-lg font-bold text-foreground display-font">
            Detalhes do Caso
          </h3>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Nível de Urgência
            </label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="baixa">Baixa (Posso esperar semanas)</option>
              <option value="normal">Normal (Posso esperar dias)</option>
              <option value="alta">Alta (Preciso de ajuda em breve)</option>
              <option value="emergencia">Emergência (Preciso agora!)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Descrição do Caso *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descreva brevemente seu caso, situação e o que você espera de nossa ajuda..."
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
        </div>

        {/* Botão de Envio */}
        <div className="flex gap-4 pt-6 border-t border-border">
          <Button
            type="submit"
            disabled={loading}
            className="flex-1 gap-2"
          >
            {loading ? "Enviando..." : "Enviar Formulário"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.open("https://wa.me/5511938059405?text=Olá, gostaria de uma consulta jurídica", "_blank")}
            className="gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>

        <p className="text-xs text-foreground/60 text-center">
          Seus dados serão tratados com confidencialidade. Entraremos em contato em breve.
        </p>
      </form>
    </Card>
  );
}
