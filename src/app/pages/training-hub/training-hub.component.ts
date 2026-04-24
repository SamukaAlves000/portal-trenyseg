import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, Filter, BookOpen } from 'lucide-angular';
import { TrainingCardComponent } from '../../components/training-card/training-card.component';
import siteData from '../../../assets/data/site-data.json';

@Component({
  selector: 'app-training-hub',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, TrainingCardComponent],
  template: `
    <div class="pt-32 pb-24 min-h-screen bg-[#F3F4F6]">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="max-w-4xl mb-16">
          <div class="flex items-center gap-3 text-[#008C44] font-bold text-sm uppercase tracking-widest mb-6">
            <lucide-icon [name]="BookOpenIcon" size="18"></lucide-icon>
            Catálogo Completo de Treinamentos
          </div>
          <h1 class="text-5xl md:text-7xl font-display font-bold text-[#111827] mb-8 leading-tight tracking-[calc(-0.01em)]">
            Capacitação que <br> <span class="text-[#008C44]">Gera Resultados.</span>
          </h1>
          <p class="text-xl text-[#111827]/60 leading-relaxed font-medium">
            Explore nossa grade completa de treinamentos normativos e técnicos. Filtre por categoria para encontrar o curso ideal para sua equipe.
          </p>
        </div>

        <!-- Filters & Search -->
        <div class="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-black/5 border border-black/5 mb-16 flex flex-col lg:flex-row gap-6 items-center">
          <div class="relative flex-grow w-full">
            <lucide-icon [name]="SearchIcon" size="20" class="absolute left-6 top-1/2 -translate-y-1/2 text-[#111827]/30"></lucide-icon>
            <input 
              type="text" 
              placeholder="Buscar treinamento (Ex: Trabalho em Altura, NR-35...)" 
              [(ngModel)]="search"
              class="w-full pl-14 pr-6 py-4 bg-[#F3F4F6] border-2 border-transparent focus:border-[#008C44]/30 rounded-2xl outline-none transition-all font-bold text-[#111827] placeholder:text-[#111827]/30"
            />
          </div>
          
          <div class="flex flex-wrap gap-2 justify-center w-full lg:w-auto">
            @for (cat of categories; track cat) {
              <button 
                (click)="selectedCategory.set(cat)"
                [class]="selectedCategory() === cat 
                  ? 'px-6 py-4 bg-[#111827] text-white rounded-2xl font-bold transition-all shadow-lg' 
                  : 'px-6 py-4 bg-[#F3F4F6] text-[#111827]/60 hover:bg-[#008C44]/10 hover:text-[#008C44] rounded-2xl font-bold transition-all'"
              >
                {{ cat }}
              </button>
            }
          </div>
        </div>

        <!-- Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          @for (training of filteredTrainings(); track training.id) {
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

        @if (filteredTrainings().length === 0) {
          <div class="py-32 text-center">
            <div class="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#111827]/10 mx-auto mb-8 shadow-sm">
               <lucide-icon [name]="SearchIcon" size="40"></lucide-icon>
            </div>
            <h3 class="text-3xl font-display font-bold text-[#111827] mb-4">Nenhum resultado encontrado</h3>
            <p class="text-[#111827]/40 font-medium">Tente buscar por termos mais genéricos ou mude a categoria selecionada.</p>
          </div>
        }
      </div>
    </div>
  `
})
export class TrainingHubComponent {
  SearchIcon = Search;
  FilterIcon = Filter;
  BookOpenIcon = BookOpen;

  search = '';
  selectedCategory = signal('Todos');

  categories = ['Todos', 'Segurança', 'Saúde', 'Técnico', 'Gestão'];

  filteredTrainings = computed(() => {
    let list = siteData.trainings as any[];
    
    if (this.selectedCategory() !== 'Todos') {
      list = list.filter(t => t.category === this.selectedCategory());
    }
    
    if (this.search) {
      const s = this.search.toLowerCase();
      list = list.filter(t => 
        t.title.toLowerCase().includes(s) || 
        t.nr.toLowerCase().includes(s) || 
        t.shortDescription.toLowerCase().includes(s)
      );
    }
    
    return list;
  });
}
