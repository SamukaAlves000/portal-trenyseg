import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileText, Activity, TreePine, Construction, ShieldAlert, ClipboardCheck, Microscope, HardHat, FileSearch } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="pt-24 min-h-screen bg-white font-sans">
      <!-- Hero -->
      <section class="py-32 bg-[#F3F4F6] relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl">
             <div class="text-[#008C44] font-bold uppercase tracking-widest text-xs mb-6">Expertise Técnica</div>
            <h1 class="text-5xl md:text-8xl font-display font-bold text-[#111827] mb-10 leading-tight tracking-tight">
               Engenharia aplicada à <span class="text-[#008C44]">Conformidade Legal.</span>
            </h1>
            <p class="text-2xl text-[#111827]/60 leading-relaxed font-medium">
               Atuamos na elaboração de documentação técnica, laudos de higiene e programas ambientais com rigor normativo e suporte jurídico.
            </p>
          </div>
        </div>
        <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-[#008C44]/5 rounded-full blur-3xl"></div>
      </section>

      <!-- Detailed Services Grid -->
      <section class="py-32">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-16">
            @for (service of detailedServices; track service.title) {
               <div class="p-12 bg-white rounded-[3.5rem] border border-black/5 hover:border-[#008C44]/20 hover:shadow-2xl hover:shadow-trenyseg/5 transition-all duration-500 group">
                  <div class="w-20 h-20 bg-[#F3F4F6] rounded-3xl flex items-center justify-center text-[#008C44] mb-10 group-hover:bg-[#008C44] group-hover:text-white transition-all shadow-sm">
                     <lucide-icon [name]="service.icon" size="40"></lucide-icon>
                  </div>
                  <h3 class="text-3xl font-display font-bold text-[#111827] mb-6">{{ service.title }}</h3>
                  <p class="text-xl text-[#111827]/60 mb-10 leading-relaxed font-medium">{{ service.desc }}</p>
                  
                  <div class="grid md:grid-cols-2 gap-4">
                     @for (item of service.items; track item) {
                        <div class="flex items-center gap-3 py-3 px-5 bg-[#F3F4F6] rounded-2xl text-sm font-bold text-[#111827]/80">
                           <div class="w-2 h-2 bg-[#008C44] rounded-full translate-y-[1px]"></div>
                           {{ item }}
                        </div>
                     }
                  </div>
               </div>
            }
          </div>
        </div>
      </section>

      <!-- Quality Methodology -->
      <section class="py-32 bg-[#111827] text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-20">Nossa Metodologia de Trabalho</h2>
            <div class="grid md:grid-cols-4 gap-8">
               @for (step of steps; track step.title; let i = $index) {
                  <div class="relative px-8">
                     <div class="text-8xl font-black text-white/5 absolute -top-12 left-1/2 -translate-x-1/2 select-none">0{{ i + 1 }}</div>
                     <div class="relative z-10">
                        <h4 class="text-2xl font-bold mb-4">{{ step.title }}</h4>
                        <p class="text-white/40 leading-relaxed font-medium">{{ step.desc }}</p>
                     </div>
                  </div>
               }
            </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesComponent {
  detailedServices = [
    {
       title: 'Documentações Legais',
       icon: ClipboardCheck,
       desc: 'Gestão completa da documentação necessária para o eSocial e fiscalização trabalhista.',
       items: ['PGR - Programa de Gerenc. de Riscos', 'PCMSO - Saúde Ocupacional', 'LTCAT - Laudo Previdenciário', 'PPP Digital']
    },
    {
       title: 'Higiene Ocupacional',
       icon: Activity,
       desc: 'Levantamentos quantitativos com tecnologia de ponta para agentes físicos e químicos.',
       items: ['Dosimetria de Ruído', 'Monitoramento Heat Stress (Calor)', 'Agentes Químicos (Vapores/Poeiras)', 'Vibração Ocupacional']
    },
    {
       title: 'Meio Ambiente',
       icon: TreePine,
       desc: 'Licenciamento e programas de sustentabilidade para adequação ambiental da sua operação.',
       items: ['PGRS - Resíduos Sólidos', 'Relatórios Ambientais', 'Licenciamento de Instalação (LI)', 'Educação Ambiental']
    },
    {
       title: 'Vistorias & Inspeções',
       icon: FileSearch,
       desc: 'Auditorias técnicas periódicas para manter o ambiente de trabalho sempre seguro.',
       items: ['Inspeções de Equipamentos', 'Vistoria de Canteiro de Obras', 'Auditoria de Conformidade', 'Relatório de Melhorias']
    }
  ];

  steps = [
    { title: 'Diagnóstico', desc: 'Levantamento inicial dos riscos e situação documental atual.' },
    { title: 'Monitoramento', desc: 'Visitas técnicas e medições quantitativas em campo.' },
    { title: 'Elaboração', desc: 'Confecção técnica dos laudos por engenheiros especializados.' },
    { title: 'Entrega', desc: 'Apresentação dos resultados e suporte para implementação.' }
  ];
}
