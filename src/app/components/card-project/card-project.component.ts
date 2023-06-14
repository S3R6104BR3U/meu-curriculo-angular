import { Component, OnInit, Input } from '@angular/core';

import { projects } from '../../data/projects';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {
  //projeto : string = 'Instagram login - Clone';
  //descricao : string = 'Replica da página de login do Instagram, com a adição de um botão para mudar o tema para escuro.';
  @Input()
  print : string = '';
  @Input()
  projeto : string = '';
  @Input()
  descricao : string = '';
  @Input()
  linkGitHub : string = '';
  @Input()
  linkGitHubPages : string = '';

  private id:string | null = "0"
  
  constructor( ) { }

  ngOnInit(): void {

   
  }


}
