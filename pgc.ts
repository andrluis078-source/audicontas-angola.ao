export interface Account {
  code: string;
  name: string;
  description?: string;
  children?: Account[];
}

export const PGC_CLASSES: Account[] = [
  {
    code: "1",
    name: "Meios Fixos e Investimentos",
    children: [
      { code: "11", name: "Imobilizações corpóreas" },
      { code: "12", name: "Imobilizações incorpóreas" },
      { code: "13", name: "Investimentos financeiros" },
      { code: "14", name: "Imobilizações em curso" },
      { code: "18", name: "Amortizações acumuladas" },
      { code: "19", name: "Provisões para investimentos financeiros" },
    ],
  },
  {
    code: "2",
    name: "Existências",
    children: [
      { code: "21", name: "Compras" },
      { code: "22", name: "Matérias-primas, subsidiárias e de consumo" },
      { code: "23", name: "Produtos e trabalhos em curso" },
      { code: "24", name: "Produtos acabados e intermédios" },
      { code: "25", name: "Sub-produtos, desperdícios, resíduos e refugos" },
      { code: "26", name: "Mercadorias" },
      { code: "27", name: "Matérias-primas, mercadorias e outros materiais em trânsito" },
      { code: "28", name: "Adiantamentos por conta de compras" },
      { code: "29", name: "Provisão para depreciação de existências" },
    ],
  },
  {
    code: "3",
    name: "Terceiros",
    children: [
      { code: "31", name: "Clientes" },
      { code: "32", name: "Fornecedores" },
      { code: "33", name: "Empréstimos" },
      { code: "34", name: "Estado" },
      { code: "35", name: "Entidades participantes e participadas" },
      { code: "36", name: "Pessoal" },
      { code: "37", name: "Outros valores a receber e a pagar" },
      { code: "38", name: "Provisões para cobranças duvidosas" },
      { code: "39", name: "Provisões para outros riscos e encargos" },
    ],
  },
  {
    code: "4",
    name: "Meios Monetários",
    children: [
      { code: "41", name: "Títulos negociáveis" },
      { code: "42", name: "Depósitos a prazo" },
      { code: "43", name: "Depósitos à ordem" },
      { code: "44", name: "Outros depósitos" },
      { code: "45", name: "Caixa" },
      { code: "48", name: "Conta transitória" },
      { code: "49", name: "Provisões para aplicações de tesouraria" },
    ],
  },
  {
    code: "5",
    name: "Capital e Reservas",
    children: [
      { code: "51", name: "Capital" },
      { code: "52", name: "Acções/quotas próprias" },
      { code: "53", name: "Prémios de emissão" },
      { code: "54", name: "Prestações suplementares" },
      { code: "55", name: "Reservas legais" },
      { code: "56", name: "Reservas de reavaliação" },
      { code: "57", name: "Reservas com fins especiais" },
      { code: "58", name: "Reservas livres" },
    ],
  },
  {
    code: "6",
    name: "Proveitos por Natureza",
    children: [
      { code: "61", name: "Vendas" },
      { code: "62", name: "Prestações de serviços" },
      { code: "63", name: "Outros proveitos operacionais" },
      { code: "64", name: "Variação nos inventários de produtos acabados e de produção em curso" },
      { code: "65", name: "Trabalhos para a própria empresa" },
      { code: "66", name: "Proveitos e ganhos financeiros gerais" },
      { code: "67", name: "Proveitos e ganhos financeiros em filiais e associadas" },
      { code: "68", name: "Outros proveitos não operacionais" },
      { code: "69", name: "Proveitos e ganhos extraordinários" },
    ],
  },
  {
    code: "7",
    name: "Custos por Natureza",
    children: [
      { code: "71", name: "Custo das mercadorias vendidas e das matérias consumidas" },
      { code: "72", name: "Custos com o pessoal" },
      { code: "73", name: "Amortizações do exercício" },
      { code: "75", name: "Outros custos e perdas operacionais" },
      { code: "76", name: "Custos e perdas financeiros gerais" },
      { code: "77", name: "Custos e perdas financeiros em filiais e associadas" },
      { code: "78", name: "Outros custos e perdas não operacionais" },
      { code: "79", name: "Custos e perdas extraordinárias" },
    ],
  },
  {
    code: "8",
    name: "Resultados",
    children: [
      { code: "81", name: "Resultados transitados" },
      { code: "82", name: "Resultados operacionais" },
      { code: "83", name: "Resultados financeiros" },
      { code: "84", name: "Resultados em filiais e associadas" },
      { code: "85", name: "Resultados não operacionais" },
      { code: "86", name: "Resultados extraordinários" },
      { code: "87", name: "Imposto sobre os lucros" },
      { code: "88", name: "Resultado líquido do exercício" },
      { code: "89", name: "Dividendos antecipados" },
    ],
  },
];
