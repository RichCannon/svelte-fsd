import { PlaywrightTestConfig } from '@playwright/test';

 const config: PlaywrightTestConfig = {
  testDir: './src/tests/e2e', // Directory for e2e tests
  testMatch: '**/*.e2e.{js,ts}',
  // Configure projects for different browsers
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { browserName: 'chromium' },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { browserName: 'firefox' },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { browserName: 'webkit' },
  //   },
  // ],
  // Add more configurations as needed
} as PlaywrightTestConfig;

export default config;