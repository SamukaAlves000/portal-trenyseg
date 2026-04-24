import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Clock, CheckCircle2, ChevronLeft, ArrowRight, ShieldCheck, Mail, Calendar, FileText } from 'lucide-angular';
import siteData from '../../../assets/data/site-data.json';

@Component({
  selector: 'app-training-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <div class="pt-24 pb-24 min-h-screen bg-white" *ngIf="training(); else notFound">
      <!-- Top Navigation -->
      <div class="container mx-auto px-4 py-8">
        <a routerLink="/treinamentos" class="inline-flex items-center gap-3 text-[#008C44] font-bold text-sm hover:translate-x-1 transition-all group">
          <lucide-icon [name]="ChevronLeftIcon" size="18" class="group-hover:-translate-x-1 transition-transform"></lucide-icon>
          Voltar para Treinamentos
        </a>
      </div>

      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-20 items-start">
          <!-- Main Content -->
          <div class="animate-in slide-in-from-left duration-700">
            <div class="flex items-center gap-4 mb-8">
              <span class="bg-[#008C44] text-white px-5 py-2 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-trenyseg/20">
                Norma NR-{{ training().nr }}
              </span>
              <span class="text-[#111827]/40 font-black text-xs uppercase tracking-[0.2em]">
                {{ training().category }}
              </span>
            </div>

            <h1 class="text-5xl md:text-7xl font-display font-bold text-[#111827] mb-10 leading-tight tracking-[calc(-0.01em)]">
              {{ training().title }}
            </h1>

            <div class="flex flex-wrap items-center gap-8 mb-12 pb-10 border-b border-black/5">
              <div class="flex items-center gap-4 bg-[#F3F4F6] p-4 rounded-2xl">
                <div class="w-12 h-12 rounded-xl bg-[#008C44]/10 flex items-center justify-center text-[#008C44]">
                  <lucide-icon [name]="ClockIcon" size="24"></lucide-icon>
                </div>
                <div>
                  <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest leading-none mb-1">Carga Horária</div>
                  <div class="text-sm font-black text-[#111827]">{{ training().workload }}</div>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-[#F3F4F6] p-4 rounded-2xl">
                <div class="w-12 h-12 rounded-xl bg-[#008C44]/10 flex items-center justify-center text-[#008C44]">
                  <lucide-icon [name]="ShieldCheckIcon" size="24"></lucide-icon>
                </div>
                <div>
                  <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest leading-none mb-1">Certificação</div>
                  <div class="text-sm font-black text-[#111827]">Válida p/ eSocial</div>
                </div>
              </div>
            </div>

            <div class="prose prose-xl prose-slate mb-16">
              <h3 class="text-2xl font-display font-bold text-[#111827] mb-6 flex items-center gap-3">
                 <div class="w-8 h-1 bg-[#008C44]"></div>
                 Descrição Técnica
              </h3>
              <p class="text-xl text-[#111827]/70 leading-relaxed font-medium">
                {{ training().fullDescription }}
              </p>
            </div>

            <div class="mb-16">
              <h3 class="text-2xl font-display font-bold text-[#111827] mb-10 flex items-center gap-3">
                 <div class="w-8 h-1 bg-[#008C44]"></div>
                 Conteúdo Programático
              </h3>
              <div class="grid gap-4">
                @for (item of training().curriculum; track item; let i = $index) {
                  <div 
                    class="flex items-start gap-5 p-6 bg-[#F3F4F6] rounded-3xl border border-transparent hover:border-[#008C44]/30 transition-all hover:scale-[1.01] cursor-default group"
                  >
                    <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#008C44] font-black text-sm shrink-0 group-hover:bg-[#008C44] group-hover:text-white transition-colors">
                      {{ i + 1 }}
                    </div>
                    <span class="text-[#111827]/80 text-lg font-bold leading-tight pt-1">{{ item }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Sticky Sidebar -->
          <div class="lg:sticky lg:top-32 animate-in fade-in zoom-in duration-1000">
            <div class="rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl relative group">
              <div class="h-[400px] overflow-hidden relative">
                 <img 
                   [src]="training().image" 
                   [alt]="training().title" 
                   class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div class="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60"></div>
                 <div class="absolute bottom-8 left-8 right-8">
                    <div class="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Unidade Campos Belos</div>
                    <div class="text-white text-2xl font-display font-bold">Infraestrutura Profissional</div>
                 </div>
              </div>
              
              <div class="p-10 bg-white">
                <div class="bg-[#F3F4F6] p-8 rounded-[2.5rem] mb-10 border border-black/5">
                  <h4 class="font-display font-bold text-2xl text-[#111827] mb-4">Investimento Especial</h4>
                  <p class="text-[#111827]/60 mb-8 leading-relaxed font-medium text-sm">
                    Condições diferenciadas para treinamentos in-company ou turmas reduzidas. Garanta a agilidade da sua equipe.
                  </p>
                  <a routerLink="/contato" class="w-full px-8 py-5 bg-[#008C44] text-white font-bold rounded-2xl hover:bg-[#00C853] hover:scale-105 transition-all text-center flex items-center justify-center gap-3 shadow-xl shadow-trenyseg/20">
                    {{ training().ctaText }}
                    <lucide-icon [name]="ArrowRightIcon" size="20"></lucide-icon>
                  </a>
                </div>

                <div class="space-y-6">
                  <a href="tel:5562981778510" class="flex items-center gap-5 p-5 rounded-3xl hover:bg-[#F3F4F6] transition-all group">
                    <div class="w-14 h-14 bg-[#008C44]/10 rounded-2xl flex items-center justify-center text-[#008C44] group-hover:bg-[#008C44] group-hover:text-white transition-all shadow-sm">
                      <lucide-icon [name]="ShieldCheckIcon" size="24"></lucide-icon>
                    </div>
                    <div>
                      <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest leading-none mb-1">Consultoria Comercial</div>
                      <div class="text-lg font-bold text-[#111827]">(62) 9 8177-8510</div>
                    </div>
                  </a>
                  <div class="flex items-center gap-5 p-5 rounded-3xl">
                    <div class="w-14 h-14 bg-[#008C44]/10 rounded-2xl flex items-center justify-center text-[#008C44] shadow-sm">
                      <lucide-icon [name]="MailIcon" size="24"></lucide-icon>
                    </div>
                    <div>
                      <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest leading-none mb-1">E-mail para Cotações</div>
                      <div class="text-lg font-bold text-[#111827]">trenyseg&#64;gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-template #notFound>
       <div class="pt-40 pb-24 text-center">
          <lucide-icon [name]="FileTextIcon" size="64" class="text-[#111827]/10 mx-auto mb-6"></lucide-icon>
          <h2 class="text-3xl font-display font-bold text-[#111827] mb-8">Conteúdo não disponível.</h2>
          <a routerLink="/treinamentos" class="px-8 py-4 bg-[#008C44] text-white font-bold rounded-2xl">Voltar ao Catálogo</a>
       </div>
    </ng-template>
  `
})
export class TrainingDetailComponent implements OnInit {
  @Input() id!: string;
  training = signal<any>(null);

  ChevronLeftIcon = ChevronLeft;
  ClockIcon = Clock;
  ShieldCheckIcon = ShieldCheck;
  ArrowRightIcon = ArrowRight;
  MailIcon = Mail;
  FileTextIcon = FileText;

  ngOnInit() {
    const found = siteData.trainings.find((t: any) => t.id === this.id);
    this.training.set(found);
  }
}
