import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Clock, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div
      class="bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:shadow-trenyseg/5 transition-all duration-300 group hover:-translate-y-2 h-full flex flex-col"
    >
      <div class="relative h-48 overflow-hidden">
        <img
          [src]="image"
          [alt]="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute top-4 left-4 bg-[#008C44] text-white px-3 py-1 rounded-lg font-bold text-sm shadow-md">
          NR-{{ nr }}
        </div>
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#111827] px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider shadow-sm">
          {{ category }}
        </div>
      </div>
      
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="font-display font-bold text-xl mb-3 text-[#111827] group-hover:text-[#008C44] transition-colors">
          {{ title }}
        </h3>
        <p class="text-[#111827]/60 text-sm mb-6 line-clamp-3">
          {{ shortDescription }}
        </p>
        
        <div class="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
          <div class="flex items-center gap-2 text-[#111827]/40 text-xs font-bold uppercase tracking-wider">
            <lucide-icon [name]="ClockIcon" size="14" class="text-[#008C44]"></lucide-icon>
            {{ workload }}
          </div>
          <a
            [routerLink]="['/treinamentos', id]"
            class="flex items-center gap-1 text-[#008C44] font-bold text-sm group/btn"
          >
            Detalhes
            <lucide-icon [name]="ChevronRightIcon" size="16" class="group-hover/btn:translate-x-1 transition-transform"></lucide-icon>
          </a>
        </div>
      </div>
    </div>
  `
})
export class TrainingCardComponent {
  @Input() id!: string;
  @Input() nr!: string;
  @Input() title!: string;
  @Input() shortDescription!: string;
  @Input() workload!: string;
  @Input() image!: string;
  @Input() category!: string;

  ClockIcon = Clock;
  ChevronRightIcon = ChevronRight;
}
