import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('We here');
    let heroString: string;
    this.appService
      .getHero()
      .pipe(
        map((hero) => {
          heroString = hero;
        }),
      )
      .subscribe();
    return heroString;
  }
}
