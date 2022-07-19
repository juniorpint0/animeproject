import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/api.service';
import { DataService } from 'src/app/data.service';
import {  of } from 'rxjs';
import { AnimesComponent } from './animes.component';
import { AppModule } from 'src/app/app.module';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AnimesComponent', () => {
  let component: AnimesComponent;
  let fixture: ComponentFixture<AnimesComponent>;
  let apiService: ApiService;
  let dataService: DataService;
  let setAnime: DataService;
  let router: Router;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  let animeMock: {
    id: '10740';
    attributes: {
      canonicalTitle: 'One Punch Man';
      synopsis: 'string';
      episodeCount: 1;
      // startDate: '2015-10-05';
      // endDate: '2015-10-05';
      posterImage: {
        tiny: 'string';
        small: 'string';
        medium: 'string';
        large: 'string';
        original: 'string';
      };
    };
  };
  const mockAnime = {
    "id": "10740",
    "type": "anime",
    "links": {
        "self": "https://kitsu.io/api/edge/anime/10740"
    },
    "attributes": {
        "createdAt": "2015-03-07T16:34:36.575Z",
        "updatedAt": "2022-06-25T12:38:31.246Z",
        "slug": "one-punch-man",
        "synopsis": "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\n\n(Source: MAL Rewrite)",
        "description": "The seemingly ordinary and unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, he trained relentlessly for three years—and lost all of his hair in the process. Now, Saitama is incredibly powerful, so much so that no enemy is able to defeat him in battle. In fact, all it takes to defeat evildoers with just one punch has led to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored.\n\nThis all changes with the arrival of Genos, a 19-year-old cyborg, who wishes to be Saitama's disciple after seeing what he is capable of. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society, and Saitama, shocked that no one knows who he is, quickly agrees. And thus begins the story of One Punch Man, an action-comedy that follows an eccentric individual who longs to fight strong enemies that can hopefully give him the excitement he once felt and just maybe, he'll become popular in the process.\n\n(Source: MAL Rewrite)",
        "coverImageTopOffset": 350,
        "titles": {
            "en_jp": "One Punch Man",
            "en_us": "One Punch Man",
            "ja_jp": "ワンパンマン"
        },
        "canonicalTitle": "One Punch Man",
        "abbreviatedTitles": [
            "One Punch-Man",
            "OPM",
            "One-Punch Man"
        ],
        "averageRating": "83.45",
        "ratingFrequencies": {
            "2": "13363",
            "3": "352",
            "4": "1073",
            "5": "191",
            "6": "876",
            "7": "238",
            "8": "19132",
            "9": "311",
            "10": "2688",
            "11": "549",
            "12": "4947",
            "13": "844",
            "14": "51739",
            "15": "2132",
            "16": "23554",
            "17": "3973",
            "18": "24437",
            "19": "2381",
            "20": "174285"
        },
        "userCount": 341696,
        "favoritesCount": 3384,
        "startDate": "2015-10-05",
        "endDate": "2015-12-21",
        "nextRelease": null,
        "popularityRank": 2,
        "ratingRank": 27,
        "ageRating": "R",
        "ageRatingGuide": "Violence, Profanity",
        "subtype": "TV",
        "status": "finished",
        "tba": null,
        "posterImage": {
            "tiny": "https://media.kitsu.io/anime/poster_images/10740/tiny.jpg",
            "large": "https://media.kitsu.io/anime/poster_images/10740/large.jpg",
            "small": "https://media.kitsu.io/anime/poster_images/10740/small.jpg",
            "medium": "https://media.kitsu.io/anime/poster_images/10740/medium.jpg",
            "original": "https://media.kitsu.io/anime/poster_images/10740/original.jpg",
            "meta": {
                "dimensions": {
                    "tiny": {
                        "width": 110,
                        "height": 156
                    },
                    "large": {
                        "width": 550,
                        "height": 780
                    },
                    "small": {
                        "width": 284,
                        "height": 402
                    },
                    "medium": {
                        "width": 390,
                        "height": 554
                    }
                }
            }
        },
        "coverImage": {
            "tiny": "https://media.kitsu.io/anime/cover_images/10740/tiny.jpg",
            "large": "https://media.kitsu.io/anime/cover_images/10740/large.jpg",
            "small": "https://media.kitsu.io/anime/cover_images/10740/small.jpg",
            "original": "https://media.kitsu.io/anime/cover_images/10740/original.jpg",
            "meta": {
                "dimensions": {
                    "tiny": {
                        "width": 840,
                        "height": 200
                    },
                    "large": {
                        "width": 3360,
                        "height": 800
                    },
                    "small": {
                        "width": 1680,
                        "height": 400
                    }
                }
            }
        },
        "episodeCount": 12,
        "episodeLength": 24,
        "totalLength": 288,
        "youtubeVideoId": "tMblzsXwAKo",
        "showType": "TV",
        "nsfw": false
    },
    "relationships": {
        "genres": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/genres",
                "related": "https://kitsu.io/api/edge/anime/10740/genres"
            }
        },
        "categories": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/categories",
                "related": "https://kitsu.io/api/edge/anime/10740/categories"
            }
        },
        "castings": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/castings",
                "related": "https://kitsu.io/api/edge/anime/10740/castings"
            }
        },
        "installments": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/installments",
                "related": "https://kitsu.io/api/edge/anime/10740/installments"
            }
        },
        "mappings": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/mappings",
                "related": "https://kitsu.io/api/edge/anime/10740/mappings"
            }
        },
        "reviews": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/reviews",
                "related": "https://kitsu.io/api/edge/anime/10740/reviews"
            }
        },
        "mediaRelationships": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/media-relationships",
                "related": "https://kitsu.io/api/edge/anime/10740/media-relationships"
            }
        },
        "characters": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/characters",
                "related": "https://kitsu.io/api/edge/anime/10740/characters"
            }
        },
        "staff": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/staff",
                "related": "https://kitsu.io/api/edge/anime/10740/staff"
            }
        },
        "productions": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/productions",
                "related": "https://kitsu.io/api/edge/anime/10740/productions"
            }
        },
        "quotes": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/quotes",
                "related": "https://kitsu.io/api/edge/anime/10740/quotes"
            }
        },
        "episodes": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/episodes",
                "related": "https://kitsu.io/api/edge/anime/10740/episodes"
            }
        },
        "streamingLinks": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/streaming-links",
                "related": "https://kitsu.io/api/edge/anime/10740/streaming-links"
            }
        },
        "animeProductions": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/anime-productions",
                "related": "https://kitsu.io/api/edge/anime/10740/anime-productions"
            }
        },
        "animeCharacters": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/anime-characters",
                "related": "https://kitsu.io/api/edge/anime/10740/anime-characters"
            }
        },
        "animeStaff": {
            "links": {
                "self": "https://kitsu.io/api/edge/anime/10740/relationships/anime-staff",
                "related": "https://kitsu.io/api/edge/anime/10740/anime-staff"
            }
        }
    }
}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [
        {
          provide: DataService,
          useValue: {
            setAnime: () =>
              of(animeMock),
          },
        },
      ],
      declarations: [AnimesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    dataService = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should enter the function goToDetalhesByService()', () => {
    
//     
//     const el = fixture.debugElement.query(By.css('.card')).nativeElement;
//     el.click();
//     
//     fixture.detectChanges();
//     spyOn(component, 'goToDetalhesByService');
//     component.goToDetalhesByService(animeMock);
    
//     fixture.detectChanges();
//     
//     expect(component.goToDetalhesByService).toHaveBeenCalledWith(animeMock);
//     expect(router.navigateByUrl).toBe('/details/edit/' + animeMock.id);
//   });


  it('should call goToDetalhesByService function', () => {
    const animeM = { id: '1', name: '' };
    spyOn(component, 'goToDetalhesByService').and.callThrough();
    component.goToDetalhesByService(animeM);

    // expect(component.goToDetalhesByService).toHaveBeenCalled();

        // expect(router.navigateByUrl).toBe('/details/edit/' + animeM.id);
  });

 
});
