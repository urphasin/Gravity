import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

function makeReduce() {
  const arr_ℤ = [-1, 1, 0, 2, 3];
  const sum = (ε: number, curr: number) => {
    return ε + curr;
  }
  const total = arr_ℤ.reduce(sum, arr);
  
}

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
