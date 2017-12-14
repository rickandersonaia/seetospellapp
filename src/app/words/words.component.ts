import { Component, OnInit } from '@angular/core';

import { Word } from '../shared/word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words: Word[] = [
    {
      name: 'again',
      image: '/assets/images/again.jpg',
      sentence: '/assets/images/again2.jpg',
      audio: '/assets/audio/again.mp3',
      cardset: 1,
      isfree: false
    },
    {
      name: 'any',
      image: '/assets/images/any.jpg',
      sentence: '/assets/images/any2.jpg',
      audio: '/assets/audio/any-1.mp3',
      cardset: 1,
      isfree: false
    },
    {
      name: 'about',
      image: '/assets/images/about.jpg',
      sentence: '/assets/images/about2.jpg',
      audio: '/assets/audio/about.mp3',
      cardset: 2,
      isfree: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
