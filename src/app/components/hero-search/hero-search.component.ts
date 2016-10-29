import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from '../../service/hero-search.service';
import { Hero } from '../../model/hero';

@Component({
    //moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: ['hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>(); // producer of an observable event setream

    constructor(private heroSearchService: HeroSearchService, private router: Router ) {}

    search(term: string) {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term 
                ? this.heroSearchService.search(term)
                : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}