// src/app.module.ts

import { Module } from '@nestjs/common';
import { CarController } from './car.controller'; // CarController'ı içe aktarın
import { CarService } from './car.service'; // CarService'i içe aktarın

@Module({
  imports: [],
  controllers: [CarController], // Yeni controller ekleyin
  providers: [CarService], // Yeni servis ekleyin
})
export class AppModule {}
