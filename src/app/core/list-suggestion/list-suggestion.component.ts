import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent {
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description:
        "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    }
  ];

  searchTitle = '';
  searchCategory = '';

  favorites: Suggestion[] = [];

  get filteredSuggestions(): Suggestion[] {
    const title = this.searchTitle.trim().toLowerCase();
    const category = this.searchCategory.trim().toLowerCase();

    return this.suggestions.filter((s) => {
      const matchesTitle = !title || s.title.toLowerCase().includes(title);
      const matchesCategory =
        !category || s.category.toLowerCase().includes(category);
      return matchesTitle && matchesCategory;
    });
  }

  canInteract(s: Suggestion): boolean {
    return s.status !== 'refusee';
  }

  like(s: Suggestion): void {
    if (!this.canInteract(s)) return;
    s.nbLikes++;
  }

  isFavorite(s: Suggestion): boolean {
    return this.favorites.some((f) => f.id === s.id);
  }

  addToFavorites(s: Suggestion): void {
    if (!this.canInteract(s)) return;
    if (this.isFavorite(s)) return;
    this.favorites.push(s);
  }
}
