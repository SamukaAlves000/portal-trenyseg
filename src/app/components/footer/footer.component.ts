import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ShieldCheck, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-[#111827] text-white pt-24 pb-12 border-t border-white/5">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div class="lg:col-span-1">
            <a routerLink="/" class="flex items-center gap-2 mb-8 group">
              <div class="w-10 h-10 bg-[#008C44] rounded-xl flex items-center justify-center text-white shadow-lg shadow-trenyseg/20 group-hover:rotate-6 transition-transform">
                <lucide-icon [name]="ShieldCheckIcon" size="24"></lucide-icon>
              </div>
              <span class="font-display font-bold text-2xl tracking-tight">
                Treny<span class="text-[#008C44]">Seg</span>
              </span>
            </a>
            <p class="text-white/50 text-sm leading-relaxed mb-8 pr-4">
              Referência em treinamentos de normas regulamentadoras (NRs) e consultoria técnica em Segurança do Trabalho. Protegendo vidas, garantindo conformidade.
            </p>
            <div class="flex gap-4">
              @for (social of socials; track social.name) {
                <a [href]="social.href" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#008C44] transition-all text-white/50 hover:text-white">
                  <lucide-icon [name]="social.icon" size="18"></lucide-icon>
                </a>
              }
            </div>
          </div>

          <div>
            <h4 class="font-display font-bold text-lg mb-8 uppercase tracking-widest text-[#00C853] text-[10px]">Links Rápidos</h4>
            <ul class="space-y-4">
              @for (link of navLinks; track link.name) {
                <li>
                  <a [routerLink]="link.href" class="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block font-medium">
                    {{ link.name }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <div>
            <h4 class="font-display font-bold text-lg mb-8 uppercase tracking-widest text-[#00C853] text-[10px]">Destaques NR</h4>
            <ul class="space-y-4">
              <li><a routerLink="/treinamentos" class="text-white/60 hover:text-white transition-colors">NR-35 Trabalho em Altura</a></li>
              <li><a routerLink="/treinamentos" class="text-white/60 hover:text-white transition-colors">NR-33 Espaço Confinado</a></li>
              <li><a routerLink="/treinamentos" class="text-white/60 hover:text-white transition-colors">NR-10 Segurança Elétrica</a></li>
              <li><a routerLink="/treinamentos" class="text-white/60 hover:text-white transition-colors">NR-12 Máquinas e Equip.</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-display font-bold text-lg mb-8 uppercase tracking-widest text-[#00C853] text-[10px]">Sede Campos Belos</h4>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <lucide-icon [name]="MapPinIcon" size="20" class="text-[#008C44] mt-1 shrink-0"></lucide-icon>
                <p class="text-white/60 text-sm leading-relaxed">Nordeste Goiano / Sudeste do Tocantins<br>Atendimento Nacional</p>
              </div>
              <div class="flex items-center gap-4">
                <lucide-icon [name]="PhoneIcon" size="20" class="text-[#008C44] shrink-0"></lucide-icon>
                <p class="text-white/60 text-sm">(62) 9 8177-8510</p>
              </div>
              <div class="flex items-center gap-4">
                <lucide-icon [name]="MailIcon" size="20" class="text-[#008C44] shrink-0"></lucide-icon>
                <p class="text-white/60 text-sm">trenyseg&#64;gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-[10px] uppercase font-black tracking-[0.3em] text-white/20">
            © 2024 TrenySeg. Segurança do Trabalho & Consultoria.
          </p>
          <div class="flex gap-8 text-[10px] uppercase font-black tracking-widest text-white/20">
            <a href="#" class="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" class="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  ShieldCheckIcon = ShieldCheck;
  MapPinIcon = MapPin;
  PhoneIcon = Phone;
  MailIcon = Mail;

  navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Treinamentos', href: '/treinamentos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Validar Certificado', href: '/validar' },
    { name: 'Contato', href: '/contato' },
  ];

  socials = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Linkedin', href: '#', icon: Linkedin },
    { name: 'Facebook', href: '#', icon: Facebook },
  ];
}
