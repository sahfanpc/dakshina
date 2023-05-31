import { Pipe, PipeTransform } from '@angular/core';

interface TranslationDictionary {
  [key: string]: string;
}
@Pipe({
  name: 'translation',
})
export class TranslationPipe implements PipeTransform {
  transform(value: string, language: string): string {
    // const translationDictionary: TranslationDictionary = {
    let translatedValue: string;
    if (language === 'fr') {
      // Translate to French
      switch (value) {
        case 'Title':
          translatedValue = 'Titre';
          break;
        case 'Description':
          translatedValue = 'Description';
          break;
        case 'hello':
          translatedValue = 'Hola';
          break;
        case 'how are you?':
          translatedValue = '¿Cómo estás?';
          break;
        // Add more translations for other strings as needed
        default:
          translatedValue = value; // Default to original value if translation not found
          break;
      }
    } else {
      // Default to English
      translatedValue = value;
    }

    return translatedValue;
  }
}
