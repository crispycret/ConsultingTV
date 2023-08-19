import axios from "axios"



export const Firebase = () => {
  

  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/apis/v1/firebase/`
//   const portal_id = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
  
  // Set axios configuration headers to support JSON 
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Wrapper for axios to interface with the HubSpot Backend API. 
  const request = async (method: string, path: string, payload?: any, config?: any) => {
    
    // Check if the backend endpoint is defined in the environment variables
    if (process.env.NEXT_PUBLIC_BACKEND_ENDPOINT === undefined) {
      throw new Error('API endpoint is undefined')
    }
    // if (portal_id === undefined) {
    //   throw new Error('HubSpot Portal ID is undefined')
    // }

    // ensure config contains content type of json
    config = config || {}
    config.headers = config.headers || {}
    config.headers['Content-Type'] = 'application/json'

    // Build off the firebase endpoint.
    const url = endpoint + path
    console.log(endpoint)
    console.log(path)
    console.log(url)

    // Make the request to the backend firebase api
    const response = await axios({url, method, data:payload, ...config})

    return response
  }



  const get = async (path: string, payload?: any, config?: any) => await request('GET', path, payload, config)
  const post = async (path: string, payload?: any, config?: any) => await request('POST', path, payload, config)
  const patch = async (path: string, payload?: any, config?: any) => await request('PATCH', path, payload, config)
  

  const get_file = async (filename: string, path: string) => {
    return await get('/', {filename, path})
  }

  // Push functions will be removed once the dashboard is built but for now they should only be used in development.   
  // Push a json file to firebase (file in @/assets/data/)   
  const push_file = async (filename: string, path: string, data: object) => {
    return await post('/', {filename, path, data})
  }

  const update_file = async (filename: string, path: string, data: object) => {
    return await patch('/', {filename, path, data})
  }



  // Object returned by the HubSpot API Wrapper
  return { 
    get, post, patch,
    get_file, push_file, update_file,
    info: { endpoint },
  }

}

export const firebase = Firebase()

export default firebase