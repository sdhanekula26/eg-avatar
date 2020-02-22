import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-eg-avatar',
  templateUrl: './eg-avatar.component.html',
  styleUrls: ['./eg-avatar.component.scss']
})
export class EgAvatarComponent implements OnChanges, OnInit {

  @Input() src;
  @Input() altName = 'A';
  @Input() maxLetterCount = 2;
  @Input() width = 45;
  @Input() height = 45;
  @Input() fontSize;
  displayShortName;
  colors = ['#FFB6C1', '#e79ee0', '#edb73c', '#ff6714', '#2cb457', '#1e2195', '#eda6ed', '#696969', '#b36cca',
    '#6e5b49', '#ffce26', '#00c3e3', '#dc6900', '#95a5a6', '#f39c12', '#1abc9c', '#ff8000', '#ff4554', '#a6a6ed', '#272abf'];
  hideImage = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && !changes.altName.firstChange) {
      this.displayShortName = this.getAltName();
      if (!this.fontSize) {
        this.fontSize = this.height / 3;
      }
    }
  }

  ngOnInit() {
    this.displayShortName = this.getAltName();
  }

  getAltName() {
    return (this.altName.split(' ').slice(0, this.maxLetterCount) || []).map(n => n.substring(0, 1)).join('').toUpperCase();
  }

  getStyles() {
    let num = Math.ceil(Math.random() * this.colors.length);
    if (num >= this.colors.length) {
      num = 0;
    }
    return {
      'background-color': this.colors[num],
      color: 'white',
      height: this.height + 'px',
      width: this.width + 'px',
      border: '1px solid',
      'border-radius': '100%',
      'text-align': 'center',
      font: '17px/' + this.height + 'px Helvetica, Arial, sans-serif'
    };
  }

  getImgStyles() {
    return {
      width: this.width + 'px', height: this.height + 'px'
    };
  }
}
