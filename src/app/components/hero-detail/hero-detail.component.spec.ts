import { async, ComponentFixture, TestBed
} from '@angular/core/testing';

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Hero } from '../../model/hero';
import { HeroDetailComponent } from './hero-detail.component';

describe('Hero Detail', () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [ HeroDetailComponent]
        })
        .compileComponents(); // compile template and css
    }))
})