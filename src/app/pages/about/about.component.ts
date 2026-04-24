import { Component } from '@angular/core';
import { LucideAngularModule, Target, Eye, Heart, ShieldCheck, Users, Briefcase, History, Award, CheckCircle } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="pt-24 min-h-screen font-sans">
      <!-- Intro Hero -->
      <section class="py-32 bg-[#111827] text-white overflow-hidden relative">
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl">
            <div class="inline-flex items-center gap-2 mb-6 text-[#00C853] font-bold text-sm uppercase tracking-widest">
               <lucide-icon [name]="HistoryIcon" size="18"></lucide-icon>
               Nossa Trajetória
            </div>
            <h1 class="text-5xl md:text-8xl font-display font-bold mb-10 leading-tight tracking-[calc(-0.02em)]">
              Transformando Riscos em <span class="text-[#008C44]">Proteção Real.</span>
            </h1>
            <p class="text-2xl text-white/60 leading-relaxed max-w-3xl font-light">
              Desde 2017, a TrenySeg atua como parceira estratégica de empresas que buscam excelência em Segurança do Trabalho e Saúde Ocupacional.
            </p>
          </div>
        </div>
        <!-- Decorative bg -->
        <div class="absolute top-0 right-0 w-1/3 h-full bg-[#008C44]/5 skew-x-12 translate-x-20"></div>
      </section>

      <!-- MVV Cards -->
      <section class="py-32 bg-[#F3F4F6]">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-10">
            @for (value of values; track value.title) {
              <div class="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 border border-black/5 group hover:-translate-y-4 transition-all duration-500">
                <div class="w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg" [ngClass]="value.color">
                  <lucide-icon [name]="value.icon" size="32"></lucide-icon>
                </div>
                <h3 class="text-3xl font-display font-bold text-[#111827] mb-6">{{ value.title }}</h3>
                <p class="text-[#111827]/60 text-lg leading-relaxed font-medium">{{ value.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="py-32 bg-white">
        <div class="container mx-auto px-4">
           <div class="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000" class="rounded-[4rem] shadow-2xl object-cover h-[600px] w-full" alt="Team Work">
              </div>
              <div class="space-y-10">
                 <h2 class="text-4xl md:text-5xl font-display font-bold text-[#111827] leading-tight">
                    Por que escolher a <span class="text-[#008C44]">TrenySeg?</span>
                 </h2>
                 <p class="text-xl text-[#111827]/60 leading-relaxed">
                    Não somos apenas consultores; somos parceiros de negócio. Entendemos que a segurança impacta diretamente na produtividade e na reputação da sua marca.
                 </p>
                 
                 <div class="space-y-6">
                    @for (item of benefits; track item) {
                       <div class="flex items-center gap-4 bg-[#F3F4F6] p-6 rounded-2xl border border-transparent hover:border-[#008C44]/20 transition-all cursor-default group">
                          <div class="w-10 h-10 bg-[#008C44] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                             <lucide-icon [name]="CheckCircleIcon" size="20"></lucide-icon>
                          </div>
                          <span class="text-lg font-bold text-[#111827]">{{ item }}</span>
                       </div>
                    }
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Specialists Grid -->
      <section class="py-32 bg-[#111827] text-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mb-24">
             <div class="text-[#00C853] font-bold uppercase tracking-widest text-xs mb-6">Equipe Multidisciplinar</div>
            <h2 class="text-5xl font-display font-bold mb-8">Nossos Especialistas</h2>
            <p class="text-xl text-white/50 leading-relaxed">
              Profissionais capacitados para oferecer suporte técnico diferenciado nas mais diversas áreas da proteção laboral.
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (expert of experts; track expert.role) {
              <div class="p-10 bg-white/5 rounded-[3rem] text-center flex flex-col items-center group hover:bg-[#008C44]/10 transition-all border border-white/10">
                <div class="w-20 h-20 bg-[#008C44]/20 rounded-full flex items-center justify-center text-[#00C853] mb-8 group-hover:bg-[#008C44] group-hover:text-white transition-all shadow-xl">
                  <lucide-icon [name]="expert.icon" size="36"></lucide-icon>
                </div>
                <h4 class="font-display font-bold text-xl mb-2">{{ expert.role }}</h4>
                <p class="text-white/40 text-sm font-medium uppercase tracking-[0.2em]">{{ expert.tag }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Certification Badge -->
      <section class="py-32 bg-white">
        <div class="container mx-auto px-4">
           <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-[#F3F4F6] rounded-[4rem] p-16 border border-black/5">
              <div class="w-48 h-48 bg-white rounded-full flex items-center justify-center text-[#008C44] shadow-2xl shrink-0">
                 <lucide-icon [name]="AwardIcon" size="80"></lucide-icon>
              </div>
              <div class="text-center md:text-left">
                 <h3 class="text-3xl font-display font-bold text-[#111827] mb-6">Qualidade Garantida e Reconhecida</h3>
                 <p class="text-lg text-[#111827]/60 font-medium">
                    Atuamos em conformidade com as normas internacionais de segurança e somos aprovados pelas maiores empresas do setor agroindustrial do Brasil. Nosso selo TrenySeg de excelência é sinônimo de tranquilidade para sua gestão.
                 </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {
  HistoryIcon = History;
  CheckCircleIcon = CheckCircle;
  AwardIcon = Award;

  values = [
    {
      title: 'Missão',
      desc: 'Oferecer serviços com segurança e contribuir para qualificação e crescimento profissional buscando sempre a melhoria contínua.',
      icon: Target,
      color: 'bg-[#008C44]'
    },
    {
      title: 'Visão',
      desc: 'Estar entre as melhores empresas em treinamentos e consultoria visando o crescimento sustentável e a excelência no atendimento.',
      icon: Eye,
      color: 'bg-[#111827]'
    },
    {
      title: 'Valores',
      desc: 'Respeito aos clientes e parceiros, fornecendo treinamentos de qualidade absoluta nos padrões dos requisitos legais.',
      icon: Heart,
      color: 'bg-[#00C853]'
    }
  ];

  benefits = [
    'Equipamentos de medição de última geração',
    'Material didático exclusivo e atualizado',
    'Suporte técnico pós-treinamento',
    'Sistema online de validação de certificados',
    'Atendimento personalizado in-company'
  ];

  experts = [
    { role: 'Engenharia de Segurança', icon: ShieldCheck, tag: 'SST' },
    { role: 'Medicina do Trabalho', icon: Heart, tag: 'Saúde' },
    { role: 'Higiene Ocupacional', icon: Briefcase, tag: 'Técnico' },
    { role: 'Meio Ambiente', icon: Users, tag: 'M.A' },
  ];
}
