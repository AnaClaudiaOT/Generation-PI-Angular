import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  faTwitter = faTwitter
  faGithub = faGithub
  faLinkedin = faLinkedin
  faArrowLeft = faArrowLeft
  faArrowRight = faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

}
