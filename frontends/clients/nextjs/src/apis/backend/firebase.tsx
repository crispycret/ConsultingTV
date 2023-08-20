import axios from "axios"


// Add to utils under requests or something similar
export const verify_response_data = (response: any): Object | null => {
  return JSON.stringify(response.data) !== '{}' ? response.data : null
}


export const Firebase = () => {
  
  const app = 'nextjs'
  const assets = `${app}/assets/data`
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/apis/v1/firebase`
  

  // Wrapper for axios to interface with the HubSpot Backend API. 
  const request = async (method: string, path: string, payload?: any, config?: any) => {
    
    // Check if the backend endpoint is defined in the environment variables
    if (process.env.NEXT_PUBLIC_BACKEND_ENDPOINT === undefined) {
      throw new Error('API endpoint is undefined')
    }

    // ensure config contains content type of json
    config = config || {}
    config.headers = config.headers || {}
    config.headers['Content-Type'] = 'application/json'

    // Build off the firebase endpoint.
    const url = endpoint + path

    // Make the request to the backend firebase api
    const c = {
        method,
        url,
        data: payload,
        ...config
    }

    let res = await axios.request(c)
    return res
    // return await axios.request(c)
    // return await axios.request({url, method, data:payload, ...config})
  }



  // Wrapper functions for the request function
  const get = async (path: string, payload?: any, config?: any) => 
      await request('GET', path, payload, config)
  const post = async (path: string, payload?: any, config?: any) => 
      await request('POST', path, payload, config)
  const patch = async (path: string, payload?: any, config?: any) => 
      await request('PATCH', path, payload, config)
  

  // Wrapper function for the request function to get a file from firebase
  const request_file = async (method: string, filename: string, path: string) => {
    return await verify_response_data(request(method, '/', {filename, path}))
  }

  // Wrapper functions for the request_file function
  const get_file = async (filename: string, path: string) => {
    return request_file('GET', filename, path)
  }
  const push_file = async (filename: string, path: string, data: object) => {
    return request_file('POST', filename, path)
  }
  const update_file = async (filename: string, path: string, data: object) => {
    return request_file('PATCH', filename, path)
  }


  // Wrapper function for the request function to get a page's file from firebase
  const request_page_file = async (method: string, filename: string, page: string) => {
    try {
      const path = `${assets}/${page}`
      const response = await request(method, '/', {filename, path})
      return response.data
    } catch (error) { 
      if (process.env.DEV) { 
        console.log("request_page_file Failed!!!!!!!!")
        console.log(error)
      }
    }
    return null
  }

  // Wrapper functions for the request_page_file function
  const get_page_file = async (filename: string, page: string) => {
    return await request_page_file('GET', filename, page)
  }
  const push_page_file = async (filename: string, page: string, data: object) => {
    return await request_page_file('POST', filename, page)
  }
  const update_page_file = async (filename: string, page: string, data: object) => {
    return await request_page_file('PATCH', filename, page)
  }



  // Object returned by the HubSpot API Wrapper
  return { 
    request,
    get, post, patch,

    request_file,
    get_file, push_file, update_file,
    
    request_page_file,
    get_page_file, push_page_file, update_page_file,
    
    info: { endpoint },
  }

}

export const firebase = Firebase()

export default firebase