import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule, QrCode, Search, CheckCircle, XCircle, ShieldCheck, Download, Calendar, User, BookOpen, Clock } from 'lucide-angular';
import siteData from '../../../assets/data/site-data.json';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-[#F3F4F6] overflow-hidden font-sans">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="text-center mb-16 relative">
          <div class="w-24 h-24 bg-[#008C44] rounded-[2rem] flex items-center justify-center text-white mx-auto mb-10 shadow-2xl shadow-trenyseg/30 transform hover:rotate-6 transition-transform">
            <lucide-icon [name]="QrCodeIcon" size="48"></lucide-icon>
          </div>
          <h1 class="text-4xl md:text-5xl font-display font-bold text-[#111827] mb-6">Validação de Autenticidade</h1>
          <p class="text-xl text-[#111827]/60 max-w-2xl mx-auto font-medium">Garanta a integridade do seu certificado. Insira o código impresso para verificar os dados em nossa base oficial.</p>
        </div>

        <div class="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-black/5 border border-black/5 mb-12">
          <div class="flex flex-col md:flex-row gap-6 mb-12">
            <div class="relative flex-grow">
              <lucide-icon [name]="SearchIcon" size="24" class="absolute left-6 top-1/2 -translate-y-1/2 text-[#111827]/20"></lucide-icon>
              <input
                type="text"
                placeholder="Ex: VAL-2024-001"
                [(ngModel)]="code"
                (keyup.enter)="handleSearch()"
                class="w-full pl-16 pr-6 py-6 bg-[#F3F4F6] border-2 border-transparent focus:border-[#008C44]/30 rounded-3xl outline-none transition-all text-xl md:text-2xl font-black placeholder:text-[#111827]/10"
              />
            </div>
            <button
              (click)="handleSearch()"
              [disabled]="isSearching()"
              class="px-10 py-6 bg-[#008C44] text-white font-black uppercase tracking-widest rounded-3xl hover:bg-[#00C853] shadow-xl shadow-trenyseg/20 transition-all active:scale-95 disabled:opacity-50 min-w-[180px]"
            >
              @if (isSearching()) {
                <div class="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
              } @else {
                Verificar
              }
            </button>
          </div>

          <!-- Results -->
          @if (error()) {
            <div class="p-8 bg-red-50 text-red-600 rounded-[2.5rem] flex flex-col items-center gap-6 border border-red-100 text-center animate-in zoom-in duration-500">
               <lucide-icon [name]="XCircleIcon" size="64" class="opacity-20"></lucide-icon>
               <div>
                  <h3 class="text-2xl font-display font-bold mb-2">Certificado não encontrado</h3>
                  <p class="font-bold opacity-70">Verifique o código informado ou entre em contato com o suporte técnico.</p>
               </div>
            </div>
          }

          @if (result()) {
            <div class="animate-in fade-in slide-in-from-bottom-10 duration-700">
               <div class="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 text-center md:text-left">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                      <lucide-icon [name]="CheckCircleIcon" size="40"></lucide-icon>
                    </div>
                    <div>
                      <h3 class="font-display font-bold text-[#111827] text-2xl md:text-3xl">Autenticidade Confirmada</h3>
                      <p class="text-[10px] text-[#111827]/40 font-black uppercase tracking-[0.4em] mt-1">Status: {{ result().status }}</p>
                    </div>
                  </div>
                  <div class="bg-[#008C44]/10 text-[#008C44] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-[#008C44]/20">
                    Ativo na Base TrenySeg
                  </div>
               </div>

               <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F3F4F6] p-8 md:p-10 rounded-[2.5rem] border border-black/5">
                  <div class="space-y-8">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#008C44] shadow-sm shrink-0">
                        <lucide-icon [name]="UserIcon" size="20"></lucide-icon>
                      </div>
                      <div>
                        <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest mb-1">Aluno(a) Graduado</div>
                        <div class="text-lg font-bold text-[#111827] leading-tight">{{ result().studentName }}</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#008C44] shadow-sm shrink-0">
                        <lucide-icon [name]="BookOpenIcon" size="20"></lucide-icon>
                      </div>
                      <div>
                        <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest mb-1">Treinamento</div>
                        <div class="text-lg font-bold text-[#111827] leading-tight">{{ result().course }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-8">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#008C44] shadow-sm shrink-0">
                        <lucide-icon [name]="ClockIcon" size="20"></lucide-icon>
                      </div>
                      <div>
                        <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest mb-1">Carga Horária</div>
                        <div class="text-lg font-bold text-[#111827]">{{ result().workload }}</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#008C44] shadow-sm shrink-0">
                        <lucide-icon [name]="CalendarIcon" size="20"></lucide-icon>
                      </div>
                      <div>
                        <div class="text-[10px] text-[#111827]/40 font-black uppercase tracking-widest mb-1">Reciclagem em</div>
                        <div class="text-lg font-bold text-[#008C44]">{{ result().expiryDate }}</div>
                      </div>
                    </div>
                  </div>
               </div>

               <div class="mt-10 flex flex-col md:flex-row gap-4">
                  <button class="flex-grow bg-[#F3F4F6] text-[#111827] font-bold py-5 rounded-2xl hover:bg-[#111827] hover:text-white transition-all flex items-center justify-center gap-3">
                    <lucide-icon [name]="DownloadIcon" size="20"></lucide-icon>
                    Baixar PDF
                  </button>
                  <button class="flex-grow bg-[#008C44] text-white font-bold py-5 rounded-2xl hover:bg-[#00C853] transition-all flex items-center justify-center gap-3 shadow-xl shadow-trenyseg/20">
                    <lucide-icon [name]="ShieldCheckIcon" size="20"></lucide-icon>
                    Emitir Comprovante
                  </button>
               </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ValidationComponent {
  route = inject(ActivatedRoute);

  QrCodeIcon = QrCode;
  SearchIcon = Search;
  CheckCircleIcon = CheckCircle;
  XCircleIcon = XCircle;
  ShieldCheckIcon = ShieldCheck;
  DownloadIcon = Download;
  CalendarIcon = Calendar;
  UserIcon = User;
  BookOpenIcon = BookOpen;
  ClockIcon = Clock;

  code = 'VAL-2024-001';
  result = signal<any>(null);
  isSearching = signal(false);
  error = signal('');

  constructor() {
    this.route.queryParams.subscribe(params => {
      const urlCode = params['codigo'];
      if (urlCode) {
        this.code = urlCode;
      }
      this.handleSearch();
    });
  }

  handleSearch() {
    if (!this.code.trim()) return;
    
    this.isSearching.set(true);
    this.error.set('');
    this.result.set(null);

    // Simulated lookup
    setTimeout(() => {
      const found = (siteData.certificates as any)[this.code];
      if (found) {
        this.result.set(found);
      } else {
        this.error.set('Não encontrado');
      }
      this.isSearching.set(false);
    }, 800);
  }
}
