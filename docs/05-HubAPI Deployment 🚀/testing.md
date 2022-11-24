---
sidebar_position: 2
---

# Testing and Debugging

import TOCInline from '@theme/TOCInline';

Testing and debugging your HubAPI is a crucial part of the development process. This section will cover the different ways you can test your Inference API.

<TOCInline toc={toc} />

## Testing your API locally

Before deploying, you can host your API locally in development mode in the workspace to test it. This is useful for debugging and testing your API before deploying it.

To host your API locally, run the following command in the terminal from the project root:

```bash
hub dev
```

This will start the API in development mode. You can then test it by sending requests to the API. The API will be hosted at

```
http://localhost:9000/2015-03-31/functions/function/invocations
```

You can now make your API call using any API testing tool like Postman or cURL or Python's `requests` library.

```python
import json
import requests

# The API endpoint for your Hub API project
endpoint = f"http://localhost:9000/2015-03-31/functions/function/invocations"

headers = {
  "Content-Type": "application/json"
}

payload = {
  "some key": "some test input"
}

# Send the POST request
response = requests.post(endpoint, headers=headers, data=json.dumps(payload)).json()

if response.get('statusCode') == 200:
    output = response['body']['output']
else:
    output = response

print(output)
```

## Debugging After Deployment (Logs)

After deploying your API, you can debug it using the [API Console](https://console.cellstrathub.com/deployments). The API Console provides a dashboard for your deployed Hub APIs. You can click on your deployed model to view the logs, metrics, and other information about your API.

You can also view the logs from your workspace terminal using the Hub CLI. The Hub CLI provides a command to view the logs of your API.

```bash
hub logs <api-name>
```

```
Arguments:
--hours - Query logs from the last X hours. Default is logs from the last 1 hour.
--save_dir - Path to directory where the logs should be saved.
```

:::note
It takes a minute or so for the logs to be updated after each invocation so let's say you get an error after deployment, wait for a minute and then check the logs.
:::
