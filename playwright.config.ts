import { PlaywrightTestConfig } from '@playwright/test';

 const config: PlaywrightTestConfig = {
  testDir: './src/tests/e2e', // Directory for e2e tests
  testMatch: '**/*.e2e.{js,ts}',
} as PlaywrightTestConfig;

export default config;