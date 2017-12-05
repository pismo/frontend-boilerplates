import axios from 'axios'
import { getBaseAPIURL, stripAllButNumbers, mountAuthHeaders } from '../../utils'

const baseURL = getBaseAPIURL()

const client = axios.create({
  baseURL: baseURL,
})

class Onboarding {
  // Verifica se o usuario ja foi convidado e envia o SMS/Email
  // Se nao for convidado, responde com 401, { "vip":false }
  // https://pismo.docs.apiary.io/#reference/vip-api/validation-code-vip/generate-validation-code
  static validateVipUserAndRequestToken(cpf, email, method = 'SMS') {
    if (!cpf || !email) return Promise.reject(new Error('Invalid arguments'))

    const payload = { cpf, email, method }

    return client.post('/vips/v2/token', payload)
      .then((res) => {
        if (!res && !res.data) throw(new Error('Response is empty.'))
        return res.data
      })
  }

  // Requisita a validacao do token/email
  // https://pismo.docs.apiary.io/#reference/users/pre-approved-account-authentication/vip-token-validation
  static validateToken(smsToken, email) {
    if (!smsToken || !email) {
      return Promise.reject(new Error('Invalid arguments'))
    }

    return client.post('/auth/v1/vips/validation', { code: smsToken, email })
      .then((res) => {
        if (!res && !res.data) throw(new Error('Response is empty.'))
        return res.data
      })
  }

  // Requisita informacoes do VIP para obter acquisition_channel e limit
  // https://pismo.docs.apiary.io/#reference/vip-api/vip/retrieve-vip-user-info
  // 
  // Resposta tipica:
  // {
  //   "message": "Vip found",
  //   "vip": {
  //     "email": "..",
  //     "cpf": "...",
  //     "code": "307555",
  //     "org_id": "...",
  //     "mobile": "...",
  //     "limit": 600000,
  //     "acquisition_channel": 323,
  //     "program_id": 499
  //   }
  // }
  static retrieveVIPUserInfo(accessToken, emailOrCPF){
    return client.get(`/vips/v2/${emailOrCPF}`, { headers: mountAuthHeaders({token:accessToken}) })
      .then((res) => {
        if (!res && !res.data) throw(new Error('Response is empty.'))
        return res.data
      })
  }

  // Registra a aplicacao do usuario
  // https://pismo.docs.apiary.io/#reference/acquisitions/client-application/application-registration
  static registerApplication(accessToken, submit=false, acquisitionChannel, applicantData){
    if (!accessToken || !acquisitionChannel || !applicantData) {
      return Promise.reject(new Error('Invalid arguments'))
    }

    const payload = {
      application: {
        submit,
        acquisition_channel: acquisitionChannel,
        engine: 'VIP',
        due_date: 1, // O campo e' obrigatorio, mas nao se aplica ao contexto
        applicant: applicantData,
      },
    }

    const config = { headers: mountAuthHeaders({token:accessToken}) }

    return client.post('/acquisitions/v2/applications', payload, config)
      .then((res) => {
        if (!res && !res.data) throw(new Error('Response is empty.'))
        return res.data
      })
  }

  // Atualiza uma aplicacao
  // https://pismo.docs.apiary.io/#reference/acquisitions/application-actions/application-update
  // Pode responder com:
  // status 200
  // status 404 - {"message": "Application not found"}
  // status 500 - {"message": "Error description"}
  static updateApplication(accessToken, submit=false, applicantData, applicationId){
    if (!accessToken || !applicationId || !applicantData) {
      return Promise.reject(new Error('Invalid arguments'))
    }

    const payload = {
      application: {
        submit,
        applicant: applicantData,
      },
    }

    const config = { headers: mountAuthHeaders({token:accessToken}) }

    return client.patch(`/acquisitions/v2/applications/${applicationId}`, payload, config)
      .then((res) => {
        if (!res && !res.data) throw(new Error('Response is empty.'))
        return res.data
      })
  }
}

export default Onboarding
