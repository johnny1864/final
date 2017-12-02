/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

import { MovieService } from '../movie.service'

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
    title: string;
    results: any[] = [];
    
    
    constructor(public movieService$: MovieService){
       //this.movieService$.getMovie();
    }
    
    getMovie(){
        this.movieService$.getMovie(this.title);
    }
    
    
   
}
