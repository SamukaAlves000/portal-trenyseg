import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShieldCheck, Clock, Users, ArrowRight, BookOpen, HardHat, FileText, CheckCircle, Star, Quote, Activity, TreePine, MapPin as MapPinIcon } from 'lucide-angular';
import { TrainingCardComponent } from '../../components/training-card/training-card.component';
import siteData from '../../../assets/data/site-data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, TrainingCardComponent],
  template: `
    <div class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#111827]">
        <div class="absolute inset-0 z-0 overflow-hidden bg-[#111827]">
          <video
            autoplay
            loop
            muted
            playsinline
            poster="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
            class="w-full h-full object-cover opacity-30 scale-105 pointer-events-none"
          >
            <source src="https://cdn.coverr.co/videos/coverr-construction-workers-454/1080p.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/5453622/5453622-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div class="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/95 to-transparent"></div>
        </div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="animate-in slide-in-from-left duration-1000">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008C44]/10 border border-[#008C44]/20 text-[#00C853] text-sm font-bold mb-6 backdrop-blur-sm">
                <lucide-icon [name]="ShieldCheckIcon" size="18"></lucide-icon>
                <span>Referência em Segurança do Trabalho - GO / DF</span>
              </div>

              <h1 class="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Segurança no trabalho é a <span class="text-[#008C44]">arte de preservar a vida.</span>
              </h1>
              
              <p class="text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                Capacite sua equipe com treinamentos certificados (NRs), consultoria técnica e documentações legais com máxima autoridade e precisão.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/treinamentos" class="px-6 py-3 bg-[#008C44] hover:bg-[#00C853] text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-trenyseg/20 flex items-center justify-center gap-2 group text-lg">
                  Nossos Treinamentos
                  <lucide-icon [name]="ArrowRightIcon" size="20" class="group-hover:translate-x-1 transition-transform"></lucide-icon>
                </a>
                <a routerLink="/contato" class="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg flex items-center justify-center">
                  Falar com Consultor
                </a>
              </div>

              <div class="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
                <div>
                  <div class="text-3xl font-bold text-white font-display mb-1">+500</div>
                  <div class="text-xs text-white/50 uppercase tracking-widest font-black flex items-center gap-1">
                    <lucide-icon [name]="UsersIcon" size="14" class="text-[#008C44]"></lucide-icon> Alunos /Mês
                  </div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-white font-display mb-1">100%</div>
                  <div class="text-xs text-white/50 uppercase tracking-widest font-black flex items-center gap-1">
                    <lucide-icon [name]="ShieldCheckIcon" size="14" class="text-[#008C44]"></lucide-icon> Legislação
                  </div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-white font-display mb-1">24/7</div>
                  <div class="text-xs text-white/50 uppercase tracking-widest font-black flex items-center gap-1">
                    <lucide-icon [name]="ClockIcon" size="14" class="text-[#008C44]"></lucide-icon> Agilidade
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden lg:block relative animate-in zoom-in duration-1000">
              <div class="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Treinamento TrenySeg" 
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#111827]/40 to-transparent"></div>
              </div>
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#008C44]/20 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-[#006430]/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Grid -->
      <section class="py-24 bg-[#F3F4F6]">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            @for (stat of stats; track stat.label) {
              <div class="text-center group">
                <div class="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-[#008C44] group-hover:bg-[#008C44] group-hover:text-white transition-all transform group-hover:-translate-y-2">
                  <lucide-icon [name]="stat.icon" size="28"></lucide-icon>
                </div>
                <div class="text-4xl font-display font-bold text-[#111827] mb-2">{{ stat.value }}</div>
                <div class="text-xs text-[#111827]/40 uppercase tracking-widest font-black">{{ stat.label }}</div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Main Solutions -->
      <section class="py-32">
        <div class="container mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-end justify-between mb-20 gap-10">
            <div class="max-w-3xl">
              <div class="text-[#008C44] font-bold uppercase tracking-widest text-xs mb-4">O que fazemos</div>
              <h2 class="text-4xl md:text-6xl font-display font-bold text-[#111827] mb-6">
                Soluções Inteligentes para <span class="text-[#008C44]">Ambientes Seguros.</span>
              </h2>
              <p class="text-xl text-[#111827]/60 leading-relaxed">
                Nossa metodologia foca na prevenção real de acidentes, otimizando custos e garantindo que sua empresa atenda 100% dos requisitos de fiscalização.
              </p>
            </div>
            <a routerLink="/servicos" class="px-8 py-4 bg-[#F3F4F6] text-[#111827] font-bold rounded-2xl hover:bg-[#008C44] hover:text-white transition-all flex items-center gap-3">
              Explorar Serviços <lucide-icon [name]="ArrowRightIcon" size="20"></lucide-icon>
            </a>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            @for (sol of solutions; track sol.title) {
              <div class="p-10 bg-white rounded-[2.5rem] border border-black/5 hover:shadow-2xl hover:shadow-trenyseg/5 transition-all duration-500 group flex flex-col h-full">
                <div class="w-16 h-16 bg-[#008C44]/10 rounded-2xl flex items-center justify-center text-[#008C44] mb-8 group-hover:scale-110 transition-transform">
                  <lucide-icon [name]="sol.icon" size="32"></lucide-icon>
                </div>
                <h3 class="text-2xl font-display font-bold text-[#111827] mb-5">{{ sol.title }}</h3>
                <p class="text-[#111827]/60 mb-8 leading-relaxed flex-grow">{{ sol.desc }}</p>
                <div class="flex flex-wrap gap-2">
                  @for (tag of sol.tags; track tag) {
                    <span class="px-3 py-1 bg-[#F3F4F6] rounded-full text-[10px] font-black uppercase tracking-wider text-[#111827]/50">{{ tag }}</span>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Featured Trainings -->
      <section class="py-32 bg-[#111827] text-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-20">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
              Capacite sua equipe com <span class="text-[#00C853]">Especialistas.</span>
            </h2>
            <p class="text-lg text-white/50">
              Treinamentos intensivos com aula teórica e prática, utilizando materiais de última geração.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            @for (training of featuredTrainings(); track training.id) {
              <app-training-card 
                [id]="training.id"
                [nr]="training.nr"
                [title]="training.title"
                [shortDescription]="training.shortDescription"
                [workload]="training.workload"
                [image]="training.image"
                [category]="training.category"
              ></app-training-card>
            }
          </div>
          
          <div class="mt-16 text-center">
            <a routerLink="/treinamentos" class="inline-flex items-center gap-3 text-[#00C853] font-bold text-lg hover:gap-5 transition-all group">
              Explorar Catálogo Completo <lucide-icon [name]="ArrowRightIcon" size="24" class="group-hover:translate-x-2 transition-transform"></lucide-icon>
            </a>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="py-32 bg-white">
        <div class="container mx-auto px-4">
          <div class="flex items-center gap-10 overflow-hidden relative group">
             <div class="flex animate-marquee gap-8 py-4 whitespace-nowrap">
                @for (logo of clientLogos; track logo) {
                   <img [src]="logo" class="h-12 w-auto transition-all cursor-pointer" alt="Client Logo">
                }
                <!-- Duplicate for seamless loop -->
                @for (logo of clientLogos; track logo) {
                   <img [src]="logo" class="h-12 w-auto transition-all cursor-pointer" alt="Client Logo">
                }
             </div>
          </div>

          <div class="mt-32 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div class="w-16 h-16 bg-[#008C44] rounded-full flex items-center justify-center text-white mb-10 shadow-xl shadow-trenyseg/20">
                <lucide-icon [name]="QuoteIcon" size="32"></lucide-icon>
              </div>
              <h2 class="text-4xl font-display font-bold text-[#111827] mb-12">
                O que nossos parceiros <span class="text-[#008C44]">dizem.</span>
              </h2>
              
              <div class="space-y-12">
                 @for (tes of testimonials; track tes.name) {
                    <div class="relative pl-10 border-l-4 border-[#008C44]/20 py-2">
                       <p class="text-xl text-[#111827]/70 italic mb-6 leading-relaxed">"{{ tes.text }}"</p>
                       <div>
                          <div class="font-bold text-[#111827]">{{ tes.name }}</div>
                          <div class="text-sm text-[#111827]/40 uppercase font-black tracking-widest">{{ tes.role }}</div>
                       </div>
                    </div>
                 }
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
               <div class="space-y-4">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" class="rounded-3xl shadow-lg w-full h-80 object-cover" alt="Safety 1">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400" class="rounded-3xl shadow-lg w-full h-80 object-cover" alt="Safety 1">
               </div>
               <div class="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400" class="rounded-3xl shadow-lg w-full h-48 object-cover" alt="Safety 3">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400" class="rounded-3xl shadow-lg w-full h-80 object-cover" alt="Safety 4">
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-32 bg-[#F3F4F6]">
        <div class="container mx-auto px-4">
           <div class="bg-[#111827] rounded-[4rem] p-16 relative overflow-hidden text-center max-w-6xl mx-auto shadow-2xl">
              <div class="absolute inset-0 bg-[#008C44]/10"></div>
              <div class="relative z-10 flex flex-col items-center">
                 <lucide-icon [name]="ShieldCheckIcon" size="64" class="text-[#008C44] mb-10 animate-pulse"></lucide-icon>
                 <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                    Sua empresa protegida por <br> quem entende do assunto.
                 </h2>
                 <p class="text-white/60 text-xl max-w-2xl mb-12">
                    Não deixe para amanhã a segurança que pode salvar vidas hoje. Fale com um técnico especialista e receba um diagnóstico.
                 </p>
                 <div class="flex flex-wrap justify-center gap-6">
                    <a routerLink="/contato" class="px-10 py-5 bg-[#008C44] text-white font-bold rounded-2xl hover:bg-[#00C853] hover:scale-105 transition-all text-lg shadow-xl shadow-trenyseg/20">Solicitar Consultoria</a>
                    <a href="tel:5562981778510" class="px-10 py-5 bg-white text-[#111827] font-bold rounded-2xl hover:bg-[#F3F4F6] transition-all text-lg">Ligar agora</a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      width: fit-content;
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `]
})
export class HomeComponent {
  ShieldCheckIcon = ShieldCheck;
  ArrowRightIcon = ArrowRight;
  UsersIcon = Users;
  ClockIcon = Clock;
  QuoteIcon = Quote;

  featuredTrainings = signal(siteData.trainings.slice(0, 3));

  stats = [
    { label: 'Treinamentos', value: '30+', icon: BookOpen },
    { label: 'Projetos Realizados', value: '1.2k', icon: HardHat },
    { label: 'Cidades Atendidas', value: '15+', icon: MapPinIcon },
    { label: 'Anos de Estrada', value: '7+', icon: ShieldCheck },
  ];

  solutions = [
    {
      title: 'Documentações Legais',
      desc: 'Elaboração técnica de PGR, PCMSO, LTCAT e programas de conservação com validade jurídica nacional.',
      icon: FileText,
      tags: ['SST', 'eSocial', 'Legal']
    },
    {
      title: 'Higiene Ocupacional',
      desc: 'Monitoramento de ruído, agentes químicos, calor e vibrações com equipamentos calibrados de alta precisão.',
      icon: Activity,
      tags: ['Quantitativo', 'Laboratório']
    },
    {
      title: 'Meio Ambiente',
      desc: 'Assessoria em licenciamentos, gestão de resíduos e programas de educação ambiental corporativa.',
      icon: TreePine,
      tags: ['Sustentabilidade', 'ISO 14001']
    }
  ];

  testimonials = [
    {
      name: 'Ricardo Almeida',
      role: 'Gerente de Planta - AgroCereais',
      text: 'A TrenySeg transformou nossa cultura de segurança. Os treinamentos são práticos e os técnicos entendem a realidade do campo.'
    },
    {
      name: 'Fabiana Santos',
      role: 'RH - Indústria Metalúrgica',
      text: 'Finalmente uma empresa que integra SST com o eSocial de forma simples. A agilidade na entrega dos laudos é impressionante.'
    }
  ];

  clientLogos = [
    'https://cbfos.org/wp-content/uploads/2023/02/logo-site-rjmg.png',
    'https://cbfos.org/wp-content/uploads/2023/02/logo-site-gaustec-1024x249.png',
    'https://cbfos.org/wp-content/uploads/2023/02/Itafos-Logo-Vetor-1024x288.png',
    'https://cbfos.org/wp-content/uploads/2023/02/CMOC-01-1024x209.png',
    'https://i.ibb.co/j9vF1yZj/download.png',
    'https://npegroup.com.br/wp-content/uploads/2022/08/logo-cor-1.png',
    'https://www.mining-technology.com/wp-content/uploads/sites/19/2024/08/Aclara-Logo-1024x411.png',
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/dWxMbZnpg1h0aBPV/whatsapp-image-2023-06-06-at-12.03.41-1-mk3LzOkX4pfvEg80.jpeg'
  ];
}
