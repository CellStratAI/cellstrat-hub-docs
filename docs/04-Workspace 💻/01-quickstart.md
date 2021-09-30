# Workspace Quickstart 💻

import TOCInline from '@theme/TOCInline';

CellStrat Hub Workspace is a simple yet powerful development environment for rapid AI development based on JupyterLab. Get started with Workspace in just a few minutes

1. Sign Up for a free account on CellStrat Hub [here](https://cellstrathub.com/sign-up)
2. Once your account is created and verified, login to CellStrat Hub Console [here](https://console.cellstrathub.com/)

Workspace provides you a dedicated virtual machine that is pre-configured with Jupyter Lab and all major python libraries for Data Science, Machine Learning and Deep Learning with persistent storage unlike other notebook based platforms.

<TOCInline toc={toc} />

**_Guides on the New Features of Hub Workspace Coming Soon. Stay Tuned!_**

## Tour of the Dashboard

So as you login to CellStrat Hub Console, you see the Workspace Dashboard. Let's take a tour of all the elements in the Workspace Dashboard:

![Dashboard Tour](/img/workspace/dashboard_tour.svg)
_The red circled numbers on the image above correspond to their explanations below_

1. As you are provided a pre-configured virtual machine on the cloud that can be accessed from anywhere with an internet connection, you are required to start your machine when you need to access it using the `Start Workspace` button. Once you are done you should always stop it.
2. This shows your current status of the workspace. It can be in Stopped, Pending, Running or Stopping states.
3. Based on your plan, you are allowed only a certain number of compute hours in a particular timeframe (month, quarter, year). For the free tier, its 15 hours per month. So in order to save your compute credits, make sure to always stop your workspace when you are done using it.
4. This shows your current CellStrat Hub tier/plan. We have many tiers to suit all levels of developers. You can checkout the full [pricing here](https://cellstrathub.com/pricing)
5. Every tier comes with certain amount of persistent storage. This shows how much storage you have used up.
6. As mentioned in `3`, each tier has a timeframe (month, quarter, year). This shows the validity of your current tier. If you are on a paid plan like Alpha or Beta and your plan expires, then you are reverted back to Free tier.
7. Expansion packs are curated projects for learners to get hands-on practice with different domains of AI and experienced developers to get a starting point to build on top. These projects can be downloaded in your workspace with the `Add More Packs` button. You can learn more about [Expansion Packs here](https://cellstrathub.com/packs)
8. You can also deploy your AI models with the HubAPI Platform. This button leads you to your deployments. [Learn more about it here](/HubAPI%20Deployment%20🚀/quickstart).
9. You can upgrade your tier here to get more compute hours, storage and other features.
10. You can find shortcut links to this documentation here.
11. The technical specifications of your virtual machine are specified here.
12. You can access your profile settings, billing dashboard and the Sign Out button.
13. The Support page is the fastest way to get in touch with us over email. You can share your feedback, report bugs, ask for help and more.

## Quickstart

Now that you have a basic understanding of everything on the dashboard, let's get started with the workspace.

### 1. Start the Workspace

![Start Workspace](/img/workspace/start.svg)
Hit the "Start Workspace" button to start the workspace and you should see the status change to `Pending`. This takes around 1 minute and 40 seconds to turn from `Pending` to `Running` state and the button should change to `Stop Workspace`.

### 2. Launch JupyterLab

![Launch Jupyter Lab](/img/workspace/launch.svg)
Once it's in `Running` state, hit the `Launch Jupyter` button which should open a new tab in your browser with Jupyter Lab. Your Jupyter Lab should look something like this.
![Jupyter Lab](/img/workspace/jupyter.svg)

### 3. Basics of JupyterLab

#### 3a. Basic Tour of the Interface

![Jupyter Lab Tour](/img/workspace/jupyter_tour.svg)
_The red circled numbers on the image above correspond to their explanations below_

1. This is the file manager where you can create, navigate and view your files and folders.
2. This is the launcher tab which is used to create and open things like Jupyter Notebooks, Terminals, Python Files and more.
3. This set of buttons on top of the file manager (from left to right) contains buttons for,
    1. opening the launcher tab from the 2nd circle (it's the blue button with a plus icon)
    2. creating a new folder
    3. uploading files from your local computer
    4. refreshing the file manager
    5. creating a git repository

#### 3b. Launching Notebooks

![Launch Notebook](/img/workspace/launch_notebook.svg)
To create and open a new notebook, select the Python 3 Notebook in the launcher as shown above.

![Jupyter Notebook](/img/workspace/notebook.svg)
As you can see a jupyter notebook has opened up where you can interactively write your python code line-by-line or block-by-block in notebook cells and execute them with the `Shift + Enter` shortcut key. You can also see a small toolbar on the top of your notebook for saving, inserting a new cell, copying or pasting a cell, running a cell, stopping a cell, restarting the notebook (kernel) and more. You can also rename the notebook by right-clicking the notebook file in the file manager on the left.

### 4. Stop the Workspace

Once you are done coding in the Jupyter Workspace, stop your workspace by pressing the `Stop Workspace` button in the dashboard as shown below.
![Stop Workspace](/img/workspace/stop.svg)
Once pressed, you should see the status change to `Stopping` and at this point you can close the Jupyter Lab browser tab and log out if you want to.

:::info
There is a default timeout of 30 minutes on the free plan and 1 hour on the paid plans which automatically stops the workspace if there has been no notebook activity. So if you forget to stop the workspace, it could automatically timeout and save your compute time. But it's **highly recommended to manually stop your workspace**.
:::

## What's Next?

In this quickstart you learnt to navigate around the Workspace and JupyterLab. But there are still a lot of features like different kernels, terminals, git, realtime-collaboration and much more. Be sure to checkout the documentation on all of these features.

- To learn more about the essentials of working in Workspace, checkout the [Workspace Essentials Guide](/Workspace%20💻/essentials).