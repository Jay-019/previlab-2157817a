import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ExamCard } from "@/components/exams/ExamCard";
import { ExamModal } from "@/components/exams/ExamModal";
import { exams } from "@/data/exams";
import { MessageCircle } from "lucide-react";

const Exames = () => {
  const [selectedExam, setSelectedExam] = useState<typeof exams[0] | null>(null);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos Exames
            </h1>
            <p className="text-lg text-muted-foreground">
              Confira abaixo os exames mais realizados. 
              Clique em cada exame para ver as orientações de preparo.
            </p>
          </div>
        </div>
      </section>

      {/* Exams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {exams.map((exam, index) => (
              <ExamCard
                key={exam.id}
                icon={exam.icon}
                title={exam.title}
                description={exam.description}
                onClick={() => setSelectedExam(exam)}
                index={index}
              />
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 p-6 bg-accent rounded-2xl text-center">
            <div className="flex flex-col items-center gap-4">
              <MessageCircle className="w-10 h-10 text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Não encontrou o exame que procura?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Realizamos diversos outros tipos de exames. Entre em contato conosco pelo WhatsApp para mais informações.
                </p>
                <a
                  href="https://wa.me/551935814859?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20outros%20tipos%20de%20exames."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Perguntar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ExamModal
        isOpen={!!selectedExam}
        onClose={() => setSelectedExam(null)}
        exam={selectedExam}
      />
    </Layout>
  );
};

export default Exames;
