import {
  Droplets,
  Activity,
  TestTube,
  Heart,
  Microscope,
} from "lucide-react";

export const exams = [
  {
    id: "hemograma",
    icon: Droplets,
    title: "Hemograma Completo",
    description: "Análise completa das células do sangue para avaliar sua saúde geral.",
    preparation: [
      "Jejum de 4 horas (água é permitida)",
      "Evitar exercícios físicos intensos 24h antes",
      "Informar medicamentos em uso",
    ],
    duration: "24 horas",
    notes: "Em caso de uso de anticoagulantes, informar no momento da coleta.",
  },
  {
    id: "glicemia",
    icon: Activity,
    title: "Glicemia em Jejum",
    description: "Mede os níveis de açúcar no sangue para diagnóstico de diabetes.",
    preparation: [
      "Jejum obrigatório de 8 a 12 horas",
      "Pode beber água",
      "Não fumar antes do exame",
    ],
    duration: "24 horas",
    notes: "Pacientes diabéticos devem manter medicação conforme orientação médica.",
  },
  {
    id: "colesterol",
    icon: Heart,
    title: "Perfil Lipídico",
    description: "Avalia colesterol total, HDL, LDL e triglicerídeos.",
    preparation: [
      "Jejum de 12 horas",
      "Evitar bebidas alcoólicas 72h antes",
      "Manter dieta habitual nos 5 dias anteriores",
    ],
    duration: "24 horas",
  },
  {
    id: "urina",
    icon: TestTube,
    title: "Exame de Urina",
    description: "Análise física, química e microscópica da urina.",
    preparation: [
      "Coletar a primeira urina da manhã",
      "Higiene íntima antes da coleta",
      "Desprezar o primeiro jato",
    ],
    duration: "24 horas",
    notes: "Mulheres devem evitar período menstrual para coleta.",
  },
  {
    id: "fezes",
    icon: Microscope,
    title: "Exame de Fezes",
    description: "Análise parasitológica e pesquisa de sangue oculto.",
    preparation: [
      "Coletar em frasco apropriado fornecido pelo laboratório",
      "Evitar contato com água do vaso",
      "Entregar no mesmo dia da coleta",
    ],
    duration: "48 horas",
  },
];
