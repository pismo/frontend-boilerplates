import getCurrentEnv from './getCurrentEnv'

describe('Utils # getCurrentEnv', () => {
  it("should get proper environment acronym from browser's hostname part of location", () => {
    const cases = [
      { hostname: 'qa.pismo.io', env: '-qa' },
      { hostname: 'dev.pismo.io', env: '-dev' },
      { hostname: 'prod.pismo.io', env: '' },
      { hostname: 'br.pismo.io', env: '' },
      { hostname: 'ficticious.qa.pismo.io', env: '-qa' },
      { hostname: 'ficticious.pismo.io', env: '-dev' },
      {
        hostname: 'itau.dev.pismolabs.io.s3-website-sa-east-1.amazonaws.com',
        env: 'itauqa',
      },
      { hostname: 'itau-platform.pismo.io', env: 'itau' },
      { hostname: 'crm.itau.pismolabs.io', env: 'itau' },
    ]

    cases.forEach(({ hostname, env }) => {
      expect(getCurrentEnv(hostname)).toBe(env)
    })
  })
})
