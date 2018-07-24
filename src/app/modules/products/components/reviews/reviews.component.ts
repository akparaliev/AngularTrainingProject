import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Array<string>;

  constructor(private reviewsService: ReviewsService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
    this.reviews = [];
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => (Promise.resolve(this.reviewsService.getReviews(params.get('productId'))))))
      .subscribe(
        reviews => {
          this.reviews = reviews;
        },
        err => console.log(err)
    );
  }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate(['/products', { outlets: { popup: null} }]);
    this.reviewsService.isDisplayed = false;
  }

}
