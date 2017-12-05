import axios from 'axios'

const client = axios.create({ baseURL: 'https://viacep.com.br/ws' })

class CEP {
  static getAddressFromCEP(CEP) {
    return new Promise((resolve, reject) => {
      client
        .get(`/${CEP}/json/`)
        .then(res => {
          if (!res || !res.data) {
            return reject(res)
          }

          return res
        })
        .then(res => res.data)
        .then(resolve)
        .catch(reject)
    })
  }
}

export default CEP
