import axios from "axios"



/**
 * Write a summary of the HubSpot API Wrapper here.
 * HubSpot is a CRM that we use to manage our contacts and leads.
 * We interface with the HubSpot API through the HubSpot Backend API.
 * 
 * This object is to be used to interface with the HubSpot Backend API.
 * It abstracts away the details of the API and provides a simple interface.
 * 
 * @returns {} 
 */
export const HubSpot = () => {
  
  const endpoint = `${process.env.REACT_APP_BACKEND_ENDPOINT}/apis/v1/hubspot/`
  const portal_id = process.env.REACT_APP_HUBSPOT_PORTAL_ID
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Wrapper for axios to interface with the HubSpot Backend API. 
  const request = async (method: string, path: string, payload?: any, config?: any) => {
    
    // Check if the backend endpoint is defined in the environment variables
    if (process.env.REACT_APP_BACKEND_ENDPOINT === undefined) {
      throw new Error('API endpoint is undefined')
    }
    if (portal_id === undefined) {
      throw new Error('HubSpot Portal ID is undefined')
    }

    // ensure config contains content type of json
    config = config || {}
    config.headers = config.headers || {}
    config.headers['Content-Type'] = 'application/json'

    const url = endpoint + path
    const response = await axios({url, method, data:payload, ...config})

    return response
  }

  const get = async (path: string, payload?: any, config?: any) => await request('GET', path, payload, config)
  const post = async (path: string, payload?: any, config?: any) => await request('POST', path, payload, config)
  



  // Wrapper for the HubSpot Forms API
  const forms = () => {

    // Submit a form to HubSpot
    const submit = async (form_id: string, payload: any) => {
      return await post(`forms/submit/${portal_id}/${form_id}`, payload)
    }
  
    return { submit }
  }


  // Object returned by the HubSpot API Wrapper
  return { 
    get, post, 
    forms: forms(),
    info: {endpoint, portal_id, },
  }

}

export const hubspot = HubSpot()

export default hubspot 