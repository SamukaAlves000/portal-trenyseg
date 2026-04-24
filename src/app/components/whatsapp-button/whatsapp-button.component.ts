import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <a
      href="https://wa.me/5562981778510"
      target="_blank"
      class="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group overflow-hidden"
    >
      <div class="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
      <lucide-icon [name]="MessageCircleIcon" size="32" class="relative z-10"></lucide-icon>
      
      <div class="absolute -top-12 right-0 bg-white text-[#111827] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
        Falar com Consultor
      </div>
    </a>
  `
})
export class WhatsappButtonComponent {
  MessageCircleIcon = MessageCircle;
}
