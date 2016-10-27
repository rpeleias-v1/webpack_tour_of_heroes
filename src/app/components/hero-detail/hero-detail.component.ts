import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
    //moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent {

    @Input() hero: Hero;

    constructor(private router: ActivatedRoute, private heroService: HeroService, private location: Location) { }

    ngOnInit(): void {
        this.router.params.forEach((params:Params) =>{
            let id = +params['id']; //converts string to number
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        })
    }

    goBack(): void {
        this.location.back();
    }

    save():void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}