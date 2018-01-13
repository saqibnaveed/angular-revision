import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCaser'
})
export class TitleCaser implements PipeTransform {

    transform(value: string) {
        if (!value) {
            return null;
        }

        const prepositions = ['of', 'Of', 'then', 'over', 'through', 'with', 'at', 'plus', 'after', 'on', 'for', 'from', 'the', 'The'];
        let words = value.split(' ');

        let wordsToReturn = '';

        if (words.length > 1) {
            words.forEach((word, index) => {
                word = word.toLowerCase();
                if (prepositions.find(function(element) {
                    return word == element;
                  })) {
                    if (index == 0) {
                        wordsToReturn += word.charAt(0).toUpperCase() + word.substr(1) + ' ';
                    } else {
                        wordsToReturn += word.charAt(0).toLowerCase() + word.substr(1) + ' ';
                    }
                } else {
                    wordsToReturn += word.charAt(0).toUpperCase() + word.substr(1) + ' ';
                }
            });
            return wordsToReturn;
        } else {
            return words.join('').charAt(0).toUpperCase() + words.join('').substr(1);
        }
    }
}
