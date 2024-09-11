import { Contato } from "./contato";

export function Servicos() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Conheça nossos serviços
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
            Gestão Financeira Completa: Da Monitorização à Maximização de
            Recursos
          </p>
        </div>

        <div className="grid grid-cols-1 mt-8 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Monitorizar receitas e despesas
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Acompanhar e registrar todas as entradas e saídas de dinheiro da
              empresa ou pessoa, analisando regularmente para garantir que os
              gastos não superem as receitas e ajustando o orçamento conforme
              necessário.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
              <path d="M14 8H8" />
              <path d="M16 12H8" />
              <path d="M13 16H8" />
            </svg>

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Gerir contas a pagar e receber
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Administrar os pagamentos de contas devidas (contas a pagar) e o
              recebimento de valores devidos (contas a receber), assegurando que
              as obrigações financeiras sejam cumpridas a tempo e que os
              créditos sejam recebidos conforme o esperado.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M17 12h-2l-2 5-2-10-2 5H7" />
            </svg>

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Acompanhar fluxo de caixa
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Observar e analisar a movimentação diária de dinheiro, verificando
              a quantidade disponível para garantir que há liquidez suficiente
              para cobrir despesas e identificar padrões de entrada e saída.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <line x1="3" x2="21" y1="22" y2="22" />
              <line x1="6" x2="6" y1="18" y2="11" />
              <line x1="10" x2="10" y1="18" y2="11" />
              <line x1="14" x2="14" y1="18" y2="11" />
              <line x1="18" x2="18" y1="18" y2="11" />
              <polygon points="12 2 20 7 4 7" />
            </svg>

            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Cuidar do controle bancário e de contas
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Gerenciar as contas bancárias, incluindo a reconciliação de
              extratos, monitoramento de saldos e transações, e assegurar que
              todas as operações bancárias estejam corretas e de acordo com os
              registros contábeis.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M16 2v4" />
              <path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
              <path d="m22 22-1.875-1.875" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <circle cx="18" cy="18" r="3" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Supervisionar datas de vencimento de contratos
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Controlar e acompanhar as datas de vencimento de contratos e
              compromissos financeiros, garantindo que todas as obrigações sejam
              renovadas ou cumpridas pontualmente para evitar multas ou
              penalidades.
            </p>
          </div>

          <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#474747"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 16 6 6" />
              <circle cx="16" cy="9" r="2.9" />
              <circle cx="6" cy="5" r="3" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Fazer cobranças e investimentos
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Realizar a cobrança de valores devidos por clientes ou parceiros,
              e avaliar e realizar investimentos para melhorar a rentabilidade e
              o crescimento financeiro, levando em consideração os riscos e
              oportunidades de mercado.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <Contato />
      </div>
    </section>
  );
}
