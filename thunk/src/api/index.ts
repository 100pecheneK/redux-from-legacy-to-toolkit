type CustomConfig =
  | {
      body?: any
      headers?: any
    }
  | any
export async function client<R>(
  endPoint: string,
  customConfig: CustomConfig = {}
): Promise<R> {
  const headers = {
    'Content-Type': 'application/json',
  }

  const config = {
    method: customConfig.body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (customConfig.body) {
    config.body = JSON.stringify(customConfig.body)
  }
  try {
    const res = await fetch(endPoint, config)
    if (!res.ok) throw new Error('failed to fetch')
    const data: R = await res.json()
    return data
  } catch (err: any) {
    throw new Error(err)
  }
}

// client.get = function(...)...
