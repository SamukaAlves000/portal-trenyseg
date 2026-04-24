import { Component, HostListener, signal, inject, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { LucideAngularModule, ShieldCheck, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <nav
      [ngClass]="{
        'bg-white/90 backdrop-blur-md py-3 shadow-sm border-black/5': isScrolled() || !isDarkHeaderPage(),
        'bg-transparent py-5 border-transparent': !isScrolled() && isDarkHeaderPage()
      }"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <a routerLink="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 bg-[#008C44] rounded-xl flex items-center justify-center text-white shadow-lg shadow-trenyseg/20 group-hover:scale-110 transition-transform duration-300">
              <lucide-icon [name]="ShieldCheckIcon" size="24"></lucide-icon>
            </div>
            <div class="flex flex-col">
              <span class="font-display font-bold text-xl leading-tight transition-colors duration-300" 
                    [ngClass]="(isScrolled() || !isDarkHeaderPage()) ? 'text-[#111827]' : 'text-white'">
                Treny<span class="text-[#008C44]">Seg</span>
              </span>
              <span class="text-[10px] uppercase tracking-[0.2em] font-medium font-sans opacity-70 transition-colors"
                    [ngClass]="(isScrolled() || !isDarkHeaderPage()) ? 'text-[#111827]/60' : 'text-white/80'">
                Treinamentos & Consultoria
              </span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            @for (link of navLinks; track link.name) {
              <a
                [routerLink]="link.href"
                routerLinkActive="text-[#008C44]"
                [routerLinkActiveOptions]="{exact: true}"
                class="text-sm font-semibold transition-all duration-300 relative py-2"
                [ngClass]="link.primary 
                  ? 'bg-[#008C44] text-white px-4 py-2 rounded-lg hover:bg-[#00C853] shadow-md hover:shadow-trenyseg/20'
                  : ((isScrolled() || !isDarkHeaderPage()) ? 'text-[#111827] hover:text-[#008C44]' : 'text-white/90 hover:text-white')"
              >
                {{ link.name }}
              </a>
            }
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden p-2 rounded-lg transition-colors"
            [ngClass]="(isScrolled() || !isDarkHeaderPage()) ? 'text-[#111827] hover:bg-black/5' : 'text-white hover:bg-white/10'"
            (click)="toggleMenu()"
          >
            <lucide-icon [name]="isOpen() ? XIcon : MenuIcon" size="24"></lucide-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-b border-black/5 overflow-hidden animate-in fade-in slide-in-from-top-4">
          <div class="px-4 py-6 space-y-4">
            @for (link of navLinks; track link.name) {
              <a
                [routerLink]="link.href"
                (click)="toggleMenu()"
                class="block text-base font-semibold px-4 py-2 rounded-lg transition-colors"
                [ngClass]="link.primary
                  ? 'bg-[#008C44] text-white'
                  : 'text-[#111827]/70 hover:bg-[#F3F4F6] hover:text-[#008C44]'"
              >
                {{ link.name }}
              </a>
            }
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  isOpen = signal(false);
  isDarkHeaderPage = signal(true);

  private router = inject(Router);

  ShieldCheckIcon = ShieldCheck;
  MenuIcon = Menu;
  XIcon = X;

  navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Treinamentos', href: '/treinamentos' },
    { name: 'Serviços Técnicos', href: '/servicos' },
    { name: 'Validar Certificado', href: '/validar', primary: true },
    { name: 'Contato', href: '/contato' },
  ];

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      const darkPages = ['/', '/sobre'];
      
      // If we navigate to a page that doesn't have a dark hero section,
      // force the navbar to be in "white background / dark text" mode
      this.isDarkHeaderPage.set(darkPages.includes(url));
      this.isOpen.set(false);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }
}
