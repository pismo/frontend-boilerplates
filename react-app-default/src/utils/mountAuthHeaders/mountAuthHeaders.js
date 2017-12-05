const mountAuthHeaders = ({ token, tenant, protocol }) => {
  let headers = {}
  
  if (token){
    headers['Authorization'] = `Bearer ${token}`
  }

  if (tenant){
    headers['x-tenant'] = tenant
  }

  if (protocol) {
    headers['x-protocol'] = protocol
  }

  return headers
}

export default mountAuthHeaders
