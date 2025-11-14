import { createDirectus, rest } from '@directus/sdk';

const client = createDirectus('https://directus.maisperto.com.br').with(rest());

export default client;
