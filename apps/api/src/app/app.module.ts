import { Module } from '@nestjs/common';
import { RequestBehaviorModule, ValidateModule, LogModule } from "@nestegg/cqrs"

@Module({
  imports: [
    RequestBehaviorModule,
    ValidateModule,
    LogModule,
  ]
})
export class AppModule {}
