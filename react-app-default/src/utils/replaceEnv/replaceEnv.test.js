import replaceEnv from './replaceEnv'

describe('Utils # replaceEnv', () => {
  it('should interpolate the [env] tag in all string values of given object', () => {
    const scenario = {
      key: '[env].value',
      anotherKey: 2,
      booleanThisTime: true,
      hello: 'world [env]!',
      notthisone: 'hehehe',
    }

    const expected = {
      ...scenario,
      key: 'qa.value',
      hello: 'world qa!',
    }

    expect(replaceEnv(scenario)).toEqual(expected)
  })

  it('should interpolate itau baseURL in all string values that represent URLs of given object', () => {
    const scenario = {
      url: '//api-auth[env].elasticbeanstalk.com/v1/tokens',
    }

    const hostnames = ['itau.crm.pismolabs.io', 'itau-platform.pismo.com']

    expect(replaceEnv(scenario, 'itau')).toEqual({
      url: '//api-gateway-itau.pismo.io/auth/v1/tokens',
    })
    expect(replaceEnv(scenario, 'itauqa')).toEqual({
      url: '//api-sandbox.pismolabs.io/auth/v1/tokens',
    })
  })
})
