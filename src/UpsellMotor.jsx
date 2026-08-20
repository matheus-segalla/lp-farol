import React from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Lock, 
  Wrench, 
  Sparkles 
} from 'lucide-react';

export default function UpsellMotor() {
  // Substitua pelos links dinâmicos gerados no painel da Kiwify para este Upsell
  const KIWIFY_ACCEPT_URL = "https://kiwify.com.br/seu-link-de-upsell-aceitar";
  const KIWIFY_REJECT_URL = "https://kiwify.com.br/seu-link-de-upsell-recusar";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white py-10 px-4">
      
      {/* Alerta de Pedido em Andamento */}
      <div className="max-w-3xl mx-auto mb-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm uppercase tracking-wide">
          <ShieldAlert className="w-5 h-5 animate-pulse" />
          NÃO FECHE OU ATUALIZE ESSA PÁGINA
        </div>
        <p className="text-zinc-400 text-xs mt-1">
          Sua inscrição na Restauração de Farol está confirmada. Aproveite esta oportunidade única antes de ir para a área de membros.
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-3xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-xs font-semibold text-red-400 mb-4">
          <Flame className="w-3.5 h-3.5" />
          OFERTA EXCLUSIVA DESTA PÁGINA (50% OFF)
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
          Aprenda a fazer <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Lavagem Técnica de Motor</span> sem risco de queimar módulos ou sensores.
        </h1>

        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
          Multiplique seu faturamento oferecendo o serviço mais temido e mais lucrativo da estética automotiva direto na sua bancada.
        </p>

        {/* Demonstração Visual */}
        <div className="my-8 aspect-video max-w-2xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-950 flex items-center justify-center shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80" 
            alt="Lavagem Técnica de Motor" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent flex flex-col justify-end p-6 text-left">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" /> Módulo Prático
            </span>
            <p className="text-white font-bold text-lg sm:text-xl">Isolamento Seguro + Pincelamento + Verniz de Motor</p>
          </div>
        </div>

        {/* O que o aluno vai aprender */}
        <div className="text-left bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" /> O que está incluído no módulo de motor:
          </h2>
          <ul className="space-y-2.5 text-sm text-zinc-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span><strong>Mapeamento de riscos:</strong> partes elétricas, bobinas, ECU e alternador.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span><strong>Química correta:</strong> desengraxantes APC vs. flotadores para não manchar alumínio.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span><strong>Acabamento de concessionária:</strong> aplicação correta do verniz protetor de motor.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
              <span><strong>Precificação de combo:</strong> como vender Farol + Motor pelo dobro do ticket.</span>
            </li>
          </ul>
        </div>

        {/* Ancoragem de Preço */}
        <div className="mb-6">
          <span className="text-xs text-zinc-500 line-through">Valor normal: R$ 97,00</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="text-sm font-semibold text-zinc-400">Adicione por apenas:</span>
            <span className="text-4xl font-extrabold text-emerald-400">R$ 37,00</span>
          </div>
          <span className="text-xs text-zinc-500 mt-1 block">Débito automático no mesmo cartão ou novo Pix gerado</span>
        </div>

        {/* Botões de Decisão */}
        <div className="space-y-4">
          <a
            href={KIWIFY_ACCEPT_URL}
            className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5"
          >
            SIM! QUERO ADICIONAR AO MEU PEDIDO
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={KIWIFY_REJECT_URL}
            className="block text-xs text-zinc-500 hover:text-zinc-400 underline transition py-2"
          >
            Não quero essa oferta. Prefiro acessar apenas o curso de Restauração de Farol.
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-zinc-500 border-t border-zinc-800/60 pt-4">
          <Lock className="w-3.5 h-3.5 text-emerald-500" />
          <span>Compra 100% segura • Mesma garantia de 7 dias</span>
        </div>

      </div>
    </div>
  );
}