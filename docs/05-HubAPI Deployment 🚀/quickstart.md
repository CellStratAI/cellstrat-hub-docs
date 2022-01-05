---
sidebar_position: 1
---

# HubAPI Quickstart 🚀

import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Hub API is an Intuitive Deployment Platform for Serving AI Models as REST APIs. Get started with deploying your first model as an API in this hands-on guide. You will be deploying an Ants and Bees Image Classification Model in this Tutorial. This tutorial covers the deployment in both PyTorch and Tensorflow/Keras.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DsruvxMAULU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Deprecation Notice: The quickstart below is deprecated and will be updated very soon with Hub CLI 0.5. Sorry for the inconvenience!

<TOCInline toc={toc} />

## Ants vs Bees Image Classifier

![Ants and Bees](/img/deploy/ants_bees.png)

For this quickstart, we finetuned a Resnet model on this small [ants and bees dataset](https://download.pytorch.org/tutorial/hymenoptera_data.zip) with 120 examples for each class.

<Tabs>
<TabItem value="pt" label="PyTorch" default>

To follow along this tutorial, let's get you setup with the starter notebook, and the model weights and inference script:

1. Start your Hub Workspace Instance from your [dashboard](https://console.cellstrathub.com/).
2. Once it starts, download and upload this [PyTorch Quickstart Notebook](https://cellstrat-public.s3.amazonaws.com/deploy-quickstart/HubAPI-Quickstart_PyTorch.ipynb) to your Instance.
3. Run the first cell of the notebook which says `Download Setup Files`. This will download the base code and model weights.

Let's take a look at the files that got downloaded,

1. `images_ants_bees/` - Contains test images of ants and bees (5 each)
2. `classifier.py` - The inference code of the model. The `predict()` function in the script handles the prediction from direct API inputs.
3. `ants_bees_weights.pt` - The finetuned pytorch model weights

</TabItem>
<TabItem value="tf" label="Tensorflow">

To follow along this tutorial, let's get you setup with the starter notebook, and the model weights and inference script:

1. Start your Hub Workspace Instance from your [dashboard](https://console.cellstrathub.com/).
2. Once it starts, download and upload this [Tensorflow Quickstart Notebook](https://cellstrat-public.s3.amazonaws.com/deploy-quickstart/HubAPI-Quickstart_Tensorflow.ipynb) to your Instance.
3. Run the first cell of the notebook which says `Download Setup Files`. This will download the base code and model weights.

Let's take a look at the files that got downloaded,

1. `images_ants_bees/` - Contains test images of ants and bees (5 each)
2. `classifier.py` - The inference code of the model. The `predict()` function in the script handles the prediction from direct API inputs.
3. `ants_bees_model.h5` - The finetuned tensorflow model

</TabItem>
</Tabs>

## Step 1: Initialize your HubAPI Project

CellStrat Hub Workspace comes with a command line tool called `hub` which does all of the heavy lifting for deploying your model as an API. To make it simpler, we will be running the commands in the Quickstart Notebook itself which you downloaded earlier.

:::tip
To get a detailed description of every command in the tool you can run use the `--help` flag. Example, `hub --help`, `hub init --help`, and so on for every command.
:::

We start by initializing our HubAPI Project for our Ants and Bees Classifier using the `init` command which automatically generates the boilerplate for your deployment package.

```
hub init ants_bees
```

Here `ants_bees` is the name of your Project / API. This acts as your identifier of your API that we will be deploying. The project name should only contain alphanumeric characters and hyphens. After running this command we see a `ants_bees/` folder got generated. Let's do a tour of the files and folders that got generated inside `ants_bees/`.

```
ants_bees/
    - model/
    - src/
        - main.py
        - utils.py
        - requirements.txt
    - Dockerfile
    - hub_config.json
```

1. Right after we go inside `ants_bees/` we see two files,
   1. `Dockerfile` - This file describes the docker configuration for your API. For this tutorial you don't need to know what docker is or what this file is doing. You can safely ignore it for now.
   2. `hub_config.json` - This file is the configuration file describing your project. Again for this tutorial you don't need to change anything.
2. The two folders we see inside are,
   1. `src/` - Our source code goes in this directory. We will turn our prediction code from above into a script and copy it there.
   2. `model/` - All model files or any of the large files will go into this directory. You can use this directory to store all your model files or any other file which is large in size. The path of this directory after deployment will be accessible to our model source code in the `MODEL_DIR` environment variable. You can access it in python using `os` by simply running `os.getenv('MODEL_DIR')`. Check the model loading code in `classifier.py`.
3. `src/` contains 3 files,
   1. `main.py` - This is the main python file which will be executed whenever our model is invoked after deployment.
   2. `utils.py` - This is a complementary script which contains some basic utility functions that might be useful for our model, like decoding base64 encoded images which is used in this project in the `predict()` function from `classifier.py`
   3. `requirements.txt` - This file will contain the dependencies / libraries that our project requires.

## Step 2: Integrate your Inference Code

Now that we have a basic understanding of the generated files and folders, we need to refactor our original inference code from the notebook as a python module/script. But before doing that let's understand the request and response structure of our API.

### Structuring the API (Explanation)

The HubAPI Platform deploys the models as Serverless REST APIs to which the end user can make a POST request. If you don't know what a POST is, then briefly its essentially a method of API request where the user sends some data to the server which synchronously responds to the request by sending some data back to the user. In this case, we will send our images encoded as JSON strings to the deployed API (i.e. server) and our model will respond with the corresponding predictions for each image.

#### Request

In an HubAPI all requests need to be json-encoded, so we would have to convert our input images to a base64 encoded string and then send a list of those if we want to make predictions using multiple images. So we can send a list of base64 encoded strings of images as our input. So the API request will look something like this,

```
{
    "service_id": "ants-bees",
    "input": [
        "BASE64 ENCODED STRING of IMAGE 1",
        "BASE64 ENCODED STRING of IMAGE 2",
        "and so on..."
    ]
}
```

Here, `service_id` is the name of the project, in this case it is `ants-bees`. `input` is where we would send the json-encoded list of images which are in base64 format. The contents of the `input` is what your model will receive.

You can check the `predict()` function in `classifier.py` where we use the `convert_base64_to_image()` utility function from `utils.py` to convert this list of base64 images to either numpy arrays (for tensorflow) or pillow images (for pytorch).

_If you are wondering, what if multiple people have a service_id with the same name, how it will differentiate between them, then don't worry. The platform automatically figures out which user is making the request using your unique API Key._

#### Response

Now we also, need to decide on how we would return the response, after making our predictions. We could return a list of tuples where each tuple contains the class and the probability of that class. So essentially for each image we will have a tuple of 2 items. So it would look like this,

```
{
    "invocation_id": "06565a57-1c80-4fc9-9789-9421986bb615",
    "output": [
        ('ants', 0.8),
        ('bees, 0.9),
        and more...
    ]
}
```

Here, `invocation_id` is automatically generated for each invocation to the model which is just for your future reference. The outputs returned from our model are available in the `output` key when we receive the response. As you can see in the output, we have a list of tuples, each corresponding to a input image in our original inputs.

This is essentially everything that you need to know on the Request-Response structure for the API we will be deploying. For all your other projects, you can have a similar or any other structure. Its completely upto you, no limitations or strict format requirements (as long as it can be json encoded).

### Putting Everything Together

Now that we have an understanding of the API, we can start integrating our code and model in the project.

**_Your Action Needed in this Part of the Process_**

<Tabs>
<TabItem value="pt" label="PyTorch" default>

1. The first thing is to copy the `classifier.py` file to the `ants-bees/src/` directory.
2. Then we copy the `ants_bees_weights.pt` to the `ants-bees/model/` directory.
3. Now we integrate our `predict()` function in `main.py`. To integrate our code in the `main.py`, we just have to add 2 lines of code,
   1. We import our `predict()` function from the `classifier.py` at the top of the file where `# Add your own import statements` comment is mentioned.
   ```
   from classifier import predict
   ```
   2. We apply the imported `predict()` function and return the result to the `output` variable at the 6th last line, where `"YOUR OUTPUT"` is specified.
   ```
   output = predict(inputs)
   ```
4. We also add `torch` and `torchvision` in the `requirements.txt` file as these libraries are required for our code to run.

Finally, our `main.py`, and `requirements.txt` should look like this:
<Tabs
defaultValue="main.py"
values={[
{label: 'main.py', value: 'main.py'},
{label: 'requirements.txt', value: 'requirements.txt'},
]}>
<TabItem value="main.py" label="main.py" default>

```python
import json
import os
# Add your own import statements
from classifier import predict

def handler(event, context):
    '''The main function which gets triggered on an API call for an AI model'''
    # ==================== DO NOT EDIT ====================
    if event == 'PING':
        return {
            'statusCode': 200,
            'body': json.dumps("PING RESPONSE")
        }
    # =====================================================
    # ++++++++ ADD YOUR INFERENCE CODE HERE ++++++++

    # Access your json encoded string input
    inputs = json.loads(event['inputs'])

    # Predict function of your model on the input
    output = predict(inputs)

    return {
        'statusCode': 200,
        'body': json.dumps(output)
    }

```

</TabItem>
<TabItem value="requirements.txt" label="requirements.txt" >

```
torch
torchvision
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="tf" label="Tensorflow">

1. The first thing is to copy the `classifier.py` file to the `ants-bees/src/` directory.
2. Then we copy the `ants_bees_model.h5` to the `ants-bees/model/` directory.
3. Now we integrate our `predict()` function in `main.py`. To integrate our code in the `main.py`, we just have to add 2 lines of code,
   1. We import our `predict()` function from the `classifier.py` at the top of the file where `# Add your own import statements` comment is mentioned.
   ```
   from classifier import predict
   ```
   2. We apply the imported `predict()` function and return the result to the `output` variable at the 6th last line, where `"YOUR OUTPUT"` is specified.
   ```
   output = predict(inputs)
   ```
4. We also add `opencv-python` and `tensorflow` in the `requirements.txt` file as these libraries are required for our code to run.

Finally, our `main.py`, and `requirements.txt` should look like this:
<Tabs
defaultValue="main.py"
values={[
{label: 'main.py', value: 'main.py'},
{label: 'requirements.txt', value: 'requirements.txt'},
]}>
<TabItem value="main.py" label="main.py" default>

```python
import json
import os
# Add your own import statements
from classifier import predict

def handler(event, context):
    '''The main function which gets triggered on an API call for an AI model'''
    # ==================== DO NOT EDIT ====================
    if event == 'PING':
        return {
            'statusCode': 200,
            'body': json.dumps("PING RESPONSE")
        }
    # =====================================================
    # ++++++++ ADD YOUR INFERENCE CODE HERE ++++++++

    # Access your json encoded string input
    inputs = json.loads(event['inputs'])

    # Predict function of your model on the input
    output = predict(inputs)

    return {
        'statusCode': 200,
        'body': json.dumps(output)
    }

```

</TabItem>
<TabItem value="requirements.txt" label="requirements.txt" >

```
opencv-python
tensorflow
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

## Step 3: Build and Deploy your Model

A checklist of what we have done till now,

1. We initialized the HubAPI Project to generate the boilerplate.
2. Added our source code in the `src/` directory of the project and put the model weights in the `model` directory.

Now we can, go to the final step by building the project and deploying it. To run the next two commands, we change directory into the `ants-bees/` project directory.

Once we are in the project directory, we can build the project by running the following command:

```
hub build -p <PATH TO HubAPI PROJECT>
```

This command builds a docker image of the source code and its dependencies. It also uploads the model weights in the `model` directory to a file system server from where the model will access the weights. The build process can take a few minutes to complete.

:::info
The reason the model weights are not included in the docker image is to reduce the overall deployment package size and make the inference faster.
:::

Once the build is complete, we can finally deploy our model,

```
hub deploy -p <PATH TO HubAPI PROJECT>
```

Once the deployment is complete, you can check your deployed model in the [Hub API Dashboard](https://console.cellstrathub.com/deployments).

## Testing the API

**To test our API we need to first obtain an API Key. In your [Hub API Dashboard](https://console.cellstrathub.com/deployments) you should see an API key already available from where you can copy the key.**

:::tip
This API key is unique to you and should be kept secure. Leaking this key will result in your monthly API calls being consumed. But luckily, if you notice that your API key is being misused, you can disable it in the dashboard or delete it all together using the edit or delete buttons in the dashboard.
:::

Once you have the API Key, let's send a POST request to our API using the test images in the `images_ants_bees/` directory which was downloaded earlier.

**DON'T FORGET TO PUT YOUR API KEY IN THE TEST CODE BELOW WHERE IT'S SPECIFIED**

```python
import os
import json
import requests
import base64

# This URL is a universal API Endpoint for HubAPI.
HubAPI_URL = "https://api.cellstrathub.com/synchronous"
# Paste your API URL here
API_KEY = "YOUR API KEY HERE"
headers = {
  "x-api-key": API_KEY,
  "Content-Type": "application/json"
}

# Let's load some test images
image_strings = []
test_img_dir = '../images_ants_bees'

for img in os.listdir(test_img_dir):
    if os.path.splitext(img)[1] == '.jpg':
        with open(os.path.join(test_img_dir, img), 'rb') as f:
            img_bytes = f.read()
            # convert to a base64 string
            img_str = base64.b64encode(img_bytes).decode('utf-8')
            image_strings.append(img_str)

payload = {
  "service_id": "ants-bees", # The name of the Hub API Project
  "input": json.dumps(image_strings) # the json-encoded input
}

# Send the POST request
response = requests.post(HubAPI_URL, headers=headers, data=json.dumps(payload)).json()

if response.get('body'):
    # Parse the output
    body = json.loads(response['body'])

    print('Status Code:', response['statusCode'])
    print('Invocation ID:', body['invocation_id'])
    print('\nPredictions:', body['output'])
else:
    print(response)
```

```
Status Code: 200
Invocation ID: b2672235-cbf6-4834-a1bc-fea1288d6b18

Predictions: [["bees", 0.906], ["bees", 0.509], ["ants", 0.509], ["bees", 0.868], ["bees", 0.824], ["ants", 0.923], ["ants", 0.563], ["ants", 0.717], ["ants", 0.752], ["ants", 0.775]]
```

Voila! Making the POST request to your deployed model was a success!

:::note
The invocation for the first time can be slow or even timeout, as it is warming up. If it does timeout, don't worry you can just retry it by running the cell again.
:::

You can now go to your [HubAPI Dashboard](https://console.cellstrathub.com/deployments) and you should find `ants-bees` as one of your deployed models as shown below along with other information like API Keys and Usage. Click on `ants-bees` to go to its Dashboard.

![Hub API Dashboard](/img/deploy/hub_api_dashboard.png)

In the `ants-bees` dashboard you can see your model's invocation history along with the inputs and the outputs sent in the request. You can also view the execution logs of your deployed model, as shown below.

![Hub API Dashboard](/img/deploy/hub_api_model_dashboard.png)

:::note
This deployment is a Synchronous API i.e., you send the request and get the response in the same API call. There is a timeout limit for this synchronous API which is 25 seconds. So make sure your model completes inference within 25 seconds.

But given that, we are also working on the Asynchronous API for batch inference which doesn't have a timeout limit. This will be launched in the near future, so stay tuned!
:::

## What's Next?

Congratulations on deploying your first model! Hope you found the process easy and quick. We would love to here your feedback and improve the experience. You can share your [feedback here](https://forms.gle/zR2fGB2w8FLqf6Ro8) and we will respond to your feedback in under 12 hours 🙂.

But, your journey in deployment doesn't stop here. You can learn more here,

- [CellStrat Workshop on Detection Transformer - Development & Deployment](https://www.youtube.com/watch?v=XQCeKfMoEqc)
- Hub CLI and HubAPI Dashboard (_guide coming soon_)
- API Key Management (_guide coming soon_)
- [Checkout Webinars on Everything AI](https://www.meetup.com/Disrupt-4-0/events/)
- Multi-Model APIs (_guide coming soon_)
