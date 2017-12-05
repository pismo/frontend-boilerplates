import { setTimeout } from "timers"
import axios from 'axios'
import { getBaseAPIURL, stripAllButNumbers, mountAuthHeaders } from '../../utils'
// import AWS from 'aws-sdk'

const baseUrl = getBaseAPIURL()
const client = axios.create({baseURL: `${baseUrl}/auth/v1/aws/sessiontoken`})

class AWSServices {
  static getCredentials() {
    return new Promise((resolve, reject) => {
      client
        .get()
        .then(response => response.data)
        .then(credentials => {
          AWS.config.credentials = credentials
          AWS.config.region = 'sa-east-1'
        })
        .then(resolve)
        .catch(reject)
    })
  }

  // static getListBuckets() {
  //   const s3 = new AWS.S3()
  //   return new Promise((resolve, reject) => {
  //     s3.listBuckets({}, function(err, data) {
  //       if(err) {
  //         reject(err)
  //       } else {
  //         resolve(data)
  //       }
  //     })
  //   })
  // }
}

export default AWSServices
