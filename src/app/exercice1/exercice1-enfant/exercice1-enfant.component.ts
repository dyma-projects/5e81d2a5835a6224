import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  public valeurCompteur : number = 0;

  @Input() public compteur : number;
  @Output() public sendValue : EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  incrementer () {
    this.valeurCompteur++;
    this.sendValue.emit(this.valeurCompteur);
  }

  decrementer () {
    this.valeurCompteur--;
    this.sendValue.emit(this.valeurCompteur);
  }

}
