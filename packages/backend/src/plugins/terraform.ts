import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { createRouter } from '@internal/plugin-terraform-backend';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
  });
}