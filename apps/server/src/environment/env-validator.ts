import { plainToClass } from 'class-transformer';
import { IsBoolean, IsNumber, IsObject, IsString, validateSync } from 'class-validator';

import { getEnvConfig } from './env-config';
import { IDatabaseEnvironment, IEnvironment } from './env.interface';

class DatabaseEnvironment implements IDatabaseEnvironment {
  @IsString()
  host: string;
  @IsNumber()
  port: number;
  @IsString()
  database: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
}
class Environment implements IEnvironment {
  @IsBoolean()
  production: boolean;

  @IsNumber()
  port: number;

  @IsString()
  baseUrl: string;

  @IsObject()
  database: DatabaseEnvironment;

  @IsString()
  globalApiPrefix: string;
}

export function envValidation() {
const config = getEnvConfig();
  const validatedConfig = plainToClass(Environment, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}