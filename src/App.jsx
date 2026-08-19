import React, { useState } from 'react';
import {
  CheckCircle2,
  Flame,
  ShieldCheck,
  Clock,
  ArrowRight,
  DollarSign,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [sliderPos, setSliderPos] = useState(50);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">

      {/* Top Banner */}
      <div className="bg-red-600/10 border-b border-red-500/20 py-2.5 px-4 text-center text-xs md:text-sm font-medium text-red-400 flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-red-500 animate-pulse" />
        <span>Oferta de lançamento: Valor promocional liberado por tempo limitado</span>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          MÉTODO PRÁTICO GARAGEM ROUTE 66
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Aprenda a restaurar faróis com perfeição e lucre até <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">R$ 150 por par</span> em 40 minutos.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Sem precisar de equipamentos caros. O passo a passo técnico do lixamento ao acabamento vitrificado para você colocar dinheiro no bolso já na primeira semana.
        </p>

        {/* CTA Principal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://kiwify.com.br"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
          >
            QUERO APRENDER AGORA
            <ArrowRight className="w-5 h-5" />
          </a>
          <span className="text-xs text-zinc-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Acesso imediato • 7 dias de garantia
          </span>
        </div>

        {/* Comparativo Interativo Antes & Depois */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 select-none">
            <div
              className="absolute inset-0 bg-cover bg-center flex items-center justify-end pr-6"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80')` }}
            >
              <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                DEPOIS (VITRIFICADO)
              </span>
            </div>

            <div
              className="absolute inset-0 bg-cover bg-center flex items-center pl-6 filter grayscale contrast-125 brightness-75"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80')`,
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`
              }}
            >
              <span className="bg-zinc-900/90 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1 rounded-md shadow">
                ANTES (AMARELADO)
              </span>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 w-8 h-8 bg-white text-zinc-900 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                ↔
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
            />
          </div>
          <p className="text-xs text-zinc-500 mt-2">Arraste para ver a diferença do acabamento</p>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-16 bg-zinc-900/50 border-y border-zinc-900 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Por que restauração de farol?</h2>
            <p className="text-zinc-400 text-sm mt-2">Um dos serviços mais rápidos e com maior margem na estética automotiva.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-red-500">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-zinc-400 text-sm font-medium">Custo em Material</h3>
              <p className="text-3xl font-extrabold text-white mt-1">~ R$ 12,00</p>
              <p className="text-xs text-zinc-500 mt-2">Lixas, fita crepe e protetor/polidor por veículo.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-emerald-500">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-zinc-400 text-sm font-medium">Cobrança Média</h3>
              <p className="text-3xl font-extrabold text-emerald-400 mt-1">R$ 120 a R$ 180</p>
              <p className="text-xs text-zinc-500 mt-2">Preço praticado no mercado para o par de faróis.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-amber-500">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-zinc-400 text-sm font-medium">Tempo de Execução</h3>
              <p className="text-3xl font-extrabold text-white mt-1">40 min</p>
              <p className="text-xs text-zinc-500 mt-2">Execução rápida que viabiliza atender múltiplos carros no dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-white">O que você vai aprender na prática</h2>
          <p className="text-zinc-400 text-sm mt-2">Sem enrolação técnica inútil: direto ao ponto da bancada para o carro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "1. Diagnóstico do Policarbonato",
              desc: "Como identificar se a lente está apenas amarelada pelo sol ou se já possui microfissuras internas."
            },
            {
              title: "2. Mascaramento e Proteção",
              desc: "Isolamento correto da lataria para não danificar o verniz do capô e paralamas do cliente."
            },
            {
              title: "3. O Segredo da Sequência de Lixas",
              desc: "A granulação exata para remoção da camada queimada sem criar riscos profundos irreversíveis."
            },
            {
              title: "4. Polimento, Refino e Lustro",
              desc: "Técnica com boinas e compostos para restaurar a transparência 100% cristalina."
            },
            {
              title: "5. Proteção UV e Vitrificação",
              desc: "Aplicação do selante/vitrificador correto para o farol não voltar a amarelar em 3 meses."
            },
            {
              title: "6. Precificação e Fechamento",
              desc: "Como oferecer esse serviço para quem já veio lavar o carro e fechar na hora."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-sm flex items-center justify-center">
                0{idx + 1}
              </span>
              <div>
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Presencial */}
      <section className="px-4 max-w-5xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block bg-red-600/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-2">
              IMERSÃO PRESENCIAL
            </span>
            <h3 className="text-2xl font-bold text-white">Quer aprender na prática direto na oficina?</h3>
            <p className="text-zinc-400 text-sm mt-1 max-w-xl">
              Temos turmas presenciais VIP com vagas limitadas para quem quer operar as máquinas sob nossa supervisão.
            </p>
          </div>
          <a
            href="https://wa.me/5511984238565"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-bold rounded-xl text-sm transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Card Oferta */}
      <section className="py-16 px-4 bg-zinc-900/40 border-t border-zinc-900">
        <div className="max-w-md mx-auto bg-zinc-900 border-2 border-red-600 rounded-3xl p-8 text-center relative shadow-2xl">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider">
            Acesso Completo
          </div>

          <h3 className="text-xl font-bold text-white mt-2">Curso Restauração de Farol</h3>
          <p className="text-xs text-zinc-400 mt-1">Método Garagem Route 66</p>

          <div className="my-6 py-4 border-y border-zinc-800">
            <span className="text-xs text-zinc-500 line-through">De R$ 147,00</span>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="text-sm font-semibold text-zinc-400">Por apenas</span>
              <span className="text-4xl font-extrabold text-white">R$ 47,90</span>
            </div>
            <span className="text-xs text-emerald-400 font-medium">pagamento único • acesso vitalício</span>
          </div>

          <ul className="text-left space-y-3 text-sm text-zinc-300 mb-8">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Aulas práticas gravadas em oficina</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Lista de produtos de baixo custo</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Guia de precificação para clientes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
              <span>Certificado de conclusão</span>
            </li>
          </ul>

          <a
            href="https://kiwify.com.br"
            target="_blank"
            rel="noreferrer"
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl block shadow-lg shadow-red-600/30 transition text-base"
          >
            GARANTIR MINHA VAGA
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Perguntas Frequentes</h2>

        <div className="space-y-3">
          {[
            {
              q: "Preciso de politriz profissional para começar?",
              a: "Não. No curso mostramos como você pode executar a restauração 100% de forma manual ou com adaptadores simples de furadeira, reinvestindo o lucro depois."
            },
            {
              q: "Como recebo o acesso?",
              a: "Assim que o pagamento for aprovado pelo Pix ou cartão, os dados de acesso chegam instantaneamente no seu e-mail cadastrado."
            },
            {
              q: "E se eu não gostar do curso?",
              a: "Você tem 7 dias de garantia incondicional. Basta um clique para receber 100% do seu dinheiro de volta."
            }
          ].map((faq, i) => (
            <div key={i} className="border border-zinc-800 rounded-xl bg-zinc-900/70 overflow-hidden">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-4 text-left font-medium text-white flex justify-between items-center text-sm"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="p-4 pt-0 text-sm text-zinc-400 border-t border-zinc-800/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
        <p>© 2026 Garagem Route 66 • Todos os direitos reservados</p>
      </footer>
    </div>
  );
}