import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="pt-24 min-h-screen bg-white font-sans">
      <section class="py-32">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-24 items-start">
            <!-- Information Panel -->
            <div class="animate-in slide-in-from-left duration-700">
              <div class="text-[#008C44] font-bold uppercase tracking-widest text-xs mb-6">Canais de Atendimento</div>
              <h1 class="text-5xl md:text-8xl font-display font-bold text-[#111827] mb-12 leading-tight tracking-tight">
                Conecte-se com a <span class="text-[#008C44]">Proteção.</span>
              </h1>
              <p class="text-2xl text-[#111827]/60 mb-16 leading-relaxed font-light">
                Dúvidas técnicas, solicitações de treinamentos ou orçamentos personalizados? Nossa equipe operacional está a um clique de distância.
              </p>

              <div class="grid gap-8">
                @for (info of contactInfo; track info.label) {
                   <div class="flex items-start gap-8 group">
                      <div class="w-16 h-16 bg-[#F3F4F6] rounded-3xl flex items-center justify-center text-[#008C44] group-hover:bg-[#008C44] group-hover:text-white transition-all transform group-hover:rotate-6 shadow-sm">
                         <lucide-icon [name]="info.icon" size="28"></lucide-icon>
                      </div>
                      <div>
                         <h4 class="font-display font-bold text-[#111827] text-xl mb-1">{{ info.label }}</h4>
                         <p class="text-xl text-[#111827]/60 font-medium">{{ info.value }}</p>
                      </div>
                   </div>
                }
              </div>

              <div class="mt-20 p-12 bg-[#008C44]/5 rounded-[4rem] border border-[#008C44]/10 relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-32 h-32 bg-[#008C44]/10 blur-3xl rounded-full"></div>
                <div class="relative z-10">
                  <div class="flex items-center gap-5 mb-6 text-[#008C44]">
                    <lucide-icon [name]="MessageSquareIcon" size="32"></lucide-icon>
                    <h4 class="font-display font-bold text-2xl text-[#111827]">Atendimento Prioritário</h4>
                  </div>
                  <p class="text-lg text-[#111827]/60 mb-10 font-medium">Tem pressa? Fale diretamente com um técnico através do nosso canal oficial no WhatsApp.</p>
                  <a 
                    href="https://wa.me/5562981778510" 
                    target="_blank" 
                    class="inline-flex items-center gap-4 px-10 py-5 bg-[#008C44] text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-[#00C853] hover:scale-105 transition-all shadow-xl shadow-trenyseg/20"
                  >
                    Abrir WhatsApp <lucide-icon [name]="SendIcon" size="20"></lucide-icon>
                  </a>
                </div>
              </div>
            </div>

            <!-- Form Panel -->
            <div class="animate-in slide-in-from-right duration-700">
               <div class="bg-[#F3F4F6] p-12 md:p-20 rounded-[4rem] border border-black/5 shadow-2xl relative overflow-hidden">
                  <h3 class="text-4xl font-display font-bold text-[#111827] mb-12">Enviar Proposta</h3>
                  
                  @if (sent()) {
                    <div class="p-12 bg-white rounded-[2.5rem] text-center animate-in zoom-in">
                       <div class="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                          <lucide-icon [name]="SendIcon" size="32"></lucide-icon>
                       </div>
                       <h3 class="text-3xl font-display font-bold text-[#111827] mb-4">Mensagem Enviada!</h3>
                       <p class="text-[#111827]/60 font-medium mb-10 text-lg">Recebemos sua solicitação. Um de nossos consultores entrará em contato em breve.</p>
                       <button (click)="sent.set(false)" class="text-[#008C44] font-black uppercase tracking-widest text-sm hover:underline">Enviar outra mensagem</button>
                    </div>
                  } @else {
                    <form (submit)="onSubmit($event)" class="space-y-10 relative z-10">
                      <div class="grid md:grid-cols-2 gap-10">
                        <div class="space-y-3">
                          <label class="text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/30 ml-4">Empresa / Cliente</label>
                          <input required type="text" class="w-full bg-white border-2 border-transparent focus:border-[#008C44]/20 rounded-3xl p-6 outline-none transition-all font-bold text-[#111827] shadow-sm" placeholder="Nome completo" />
                        </div>
                        <div class="space-y-3">
                          <label class="text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/30 ml-4">Segmento</label>
                          <select class="w-full bg-white border-2 border-transparent focus:border-[#008C44]/20 rounded-3xl p-6 outline-none transition-all font-bold text-[#111827] shadow-sm">
                             <option>Indústria</option>
                             <option>Agropecuária</option>
                             <option>Construção Civil</option>
                             <option>Outros</option>
                          </select>
                        </div>
                      </div>
                      
                      <div class="grid md:grid-cols-2 gap-10">
                        <div class="space-y-3">
                          <label class="text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/30 ml-4">E-mail Corporativo</label>
                          <input required type="email" class="w-full bg-white border-2 border-transparent focus:border-[#008C44]/20 rounded-3xl p-6 outline-none transition-all font-bold text-[#111827] shadow-sm" placeholder="seu@email.com" />
                        </div>
                        <div class="space-y-3">
                          <label class="text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/30 ml-4">Telefone de Contato</label>
                          <input required type="tel" class="w-full bg-white border-2 border-transparent focus:border-[#008C44]/20 rounded-3xl p-6 outline-none transition-all font-bold text-[#111827] shadow-sm" placeholder="(00) 00000-0000" />
                        </div>
                      </div>

                      <div class="space-y-3">
                        <label class="text-[10px] font-black uppercase tracking-[0.3em] text-[#111827]/30 ml-4">Como a TrenySeg pode ajudar?</label>
                        <textarea required rows="6" class="w-full bg-white border-2 border-transparent focus:border-[#008C44]/20 rounded-[3rem] p-8 outline-none transition-all font-bold text-[#111827] shadow-sm resize-none" placeholder="Descreva brevemente sua necessidade..."></textarea>
                      </div>

                      <button type="submit" class="w-full py-8 bg-[#111827] text-white font-black uppercase tracking-[0.3em] rounded-[3rem] hover:bg-[#008C44] transition-all transform hover:-translate-y-2 active:scale-95 shadow-2xl flex items-center justify-center gap-5">
                        Enviar Requisição
                        <lucide-icon [name]="SendIcon" size="24"></lucide-icon>
                      </button>
                    </form>
                  }
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map -->
      <section class="h-[500px] w-full bg-[#F3F4F6] relative group overflow-hidden">
        <div class="absolute inset-0 grayscale contrast-125 opacity-30">
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover" alt="Map View">
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
           <div class="text-center p-12 bg-white/90 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-white max-w-lg mx-4">
              <div class="w-20 h-20 bg-[#008C44] rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                 <lucide-icon [name]="MapPinIcon" size="40"></lucide-icon>
              </div>
              <h4 class="font-display font-bold text-3xl text-[#111827] mb-4">Campos Belos - GO</h4>
              <p class="text-lg text-[#111827]/60 font-medium mb-8">Base estratégica para atendimento em todo o território nacional.</p>
              <a href="#" class="text-[#008C44] font-black uppercase tracking-widest text-sm hover:underline">Ver no Google Maps</a>
           </div>
        </div>
      </section>
    </div>
  `
})
export class ContactComponent {
  SendIcon = Send;
  MessageSquareIcon = MessageSquare;
  MapPinIcon = MapPin;
  sent = signal(false);

  contactInfo = [
    { label: 'Sede Principal', value: 'Campos Belos - GO', icon: MapPin },
    { label: 'Tel / WhatsApp', value: '(62) 9 8177-8510', icon: Phone },
    { label: 'E-mail Oficial', value: 'trenyseg@gmail.com', icon: Mail }
  ];

  onSubmit(e: Event) {
    e.preventDefault();
    this.sent.set(true);
  }
}
