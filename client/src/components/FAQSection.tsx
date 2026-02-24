import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
  schemaData?: any;
}

export default function FAQSection({ 
  title = "Perguntas Frequentes", 
  description,
  items,
  schemaData
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-3xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 display-font">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-foreground/70">
              {description}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-primary/5"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-semibold text-foreground text-lg">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* FAQ Schema Markup for SEO */}
      {schemaData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}} />
      )}
    </section>
  );
}
