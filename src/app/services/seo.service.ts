import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config) {
    // default values
    config = {
      title: 'JancoBH',
      description: 'Test en SEO Service',
      image: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/general%2Ffreebay.png?alt=media&token=75bf00ca-41ad-42ce-8b8b-69a7c0420113',
      slug: '',
      ...config
    };


    this.meta.updateTag({name: 'description', content: config.description });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@JancoBH' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'JancoBH' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `https://jancobh.herokuapp.com/${config.slug}` });
  }

}
