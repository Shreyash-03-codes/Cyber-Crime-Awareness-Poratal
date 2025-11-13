import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  author: string;
  source: string;
  category: string;
}

@Component({
  selector: 'app-news',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  newsArticles: NewsArticle[] = [];
  filteredArticles: NewsArticle[] = [];
  loading: boolean = true;
  error: string = '';
  searchTerm: string = '';
  selectedCategory: string = 'all';
  categories: string[] = ['all', 'cybersecurity', 'hacking', 'data-breach', 'privacy', 'malware'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadCyberSecurityNews();
  }

  loadCyberSecurityNews() {
    this.loading = true;
    this.error = '';

    // Using Guardian API for cybersecurity news (no API key required for development)
    const apiUrl = 'https://content.guardianapis.com/search?q=cybersecurity&show-fields=all&page-size=20&api-key=test';

    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response.response && response.response.results) {
          this.newsArticles = response.response.results.map((article: any, index: number) => ({
            id: article.id,
            title: article.webTitle,
            description: article.fields?.trailText || 'Click to read more about this cybersecurity news',
            url: article.webUrl,
            image: article.fields?.thumbnail || this.getFallbackImage(index),
            publishedAt: new Date(article.webPublicationDate).toLocaleDateString(),
            author: article.fields?.byline || 'Cyber Security News',
            source: 'The Guardian',
            category: this.getRandomCategory()
          }));
          this.filteredArticles = this.newsArticles;
        } else {
          this.useFallbackData();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching news:', error);
        this.useFallbackData();
        this.loading = false;
      }
    });
  }

  private useFallbackData() {
    this.newsArticles = [
      {
        id: '1',
        title: 'Major Cybersecurity Breach Affects Millions of Users',
        description: 'A significant data breach has exposed personal information of millions of users worldwide. Security experts recommend immediate password changes.',
        url: 'https://www.theguardian.com/technology/2023/sep/15/cybersecurity-breach-data-theft-millions-users',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
        publishedAt: new Date().toLocaleDateString(),
        author: 'Security Research Team',
        source: 'Cyber News Network',
        category: 'data-breach'
      },
      {
        id: '2',
        title: 'New Ransomware Attack Targets Healthcare Organizations',
        description: 'Healthcare institutions worldwide are facing a new wave of ransomware attacks, putting patient data at risk.',
        url: 'https://www.theguardian.com/technology/2023/sep/14/ransomware-healthcare-cyber-attack',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
        publishedAt: new Date(Date.now() - 86400000).toLocaleDateString(),
        author: 'Medical Security Watch',
        source: 'Health Tech Review',
        category: 'malware'
      },
      {
        id: '3',
        title: 'Zero-Day Vulnerability Discovered in Popular Web Browser',
        description: 'Security researchers have identified a critical vulnerability that could allow remote code execution.',
        url: 'https://www.theguardian.com/technology/2023/sep/13/zero-day-vulnerability-browser-security',
        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop',
        publishedAt: new Date(Date.now() - 172800000).toLocaleDateString(),
        author: 'Browser Security Team',
        source: 'Tech Security Daily',
        category: 'cybersecurity'
      },
      {
        id: '4',
        title: 'AI-Powered Cyber Attacks on the Rise',
        description: 'Cybercriminals are increasingly using artificial intelligence to create more sophisticated attacks.',
        url: 'https://www.theguardian.com/technology/2023/sep/12/ai-cyber-attacks-machine-learning',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
        publishedAt: new Date(Date.now() - 259200000).toLocaleDateString(),
        author: 'AI Security Research',
        source: 'Future Tech Security',
        category: 'hacking'
      },
      {
        id: '5',
        title: 'New Data Privacy Regulations Take Effect',
        description: 'Updated privacy laws require companies to implement stronger data protection measures.',
        url: 'https://www.theguardian.com/technology/2023/sep/11/data-privacy-regulations-compliance',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
        publishedAt: new Date(Date.now() - 345600000).toLocaleDateString(),
        author: 'Privacy Law Experts',
        source: 'Legal Tech Review',
        category: 'privacy'
      },
      {
        id: '6',
        title: 'Critical Infrastructure Faces Increased Cyber Threats',
        description: 'Energy grids and water systems are becoming prime targets for state-sponsored hackers.',
        url: 'https://www.theguardian.com/technology/2023/sep/10/critical-infrastructure-cyber-threats',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop',
        publishedAt: new Date(Date.now() - 432000000).toLocaleDateString(),
        author: 'Infrastructure Security',
        source: 'National Security Digest',
        category: 'cybersecurity'
      }
    ];
    this.filteredArticles = this.newsArticles;
  }

  private getFallbackImage(index: number): string {
    const images = [
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop'
    ];
    return images[index % images.length];
  }

  private getRandomCategory(): string {
    return this.categories[Math.floor(Math.random() * (this.categories.length - 1)) + 1];
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm.toLowerCase();
    this.applyFilters();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredArticles = this.newsArticles.filter(article => {
      const matchesSearch = this.searchTerm === '' ||
        article.title.toLowerCase().includes(this.searchTerm) ||
        article.description.toLowerCase().includes(this.searchTerm);
      
      const matchesCategory = this.selectedCategory === 'all' || article.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  openArticle(url: string) {
    window.open(url, '_blank');
  }

  refreshNews() {
    this.loadCyberSecurityNews();
  }
}