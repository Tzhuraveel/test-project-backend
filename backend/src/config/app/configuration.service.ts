import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import configuration from './configuration';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(configuration.KEY)
    private appConfiguration: ConfigType<typeof configuration>,
  ) {}

  get secretKey(): string {
    return this.appConfiguration.secretTokenKey;
  }

  get port(): number {
    return Number(this.appConfiguration.port);
  }
}
