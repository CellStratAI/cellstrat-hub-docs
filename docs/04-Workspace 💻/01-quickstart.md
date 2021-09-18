# Workspace Quickstart 💻

CellStrat Hub Workspace is a simple yet powerful development environment for rapid AI development based on JupyterLab. Get started with Workspace in just a few minutes

**_Guides on the New Features and Usage of Hub Workspace Coming Soon. Stay Tuned!_**

## Quickstart
_<h3>Soon to be Updated for version Hub 2.0</h3>_

1. Sign Up for a free account on CellStrat Hub [here](https://cellstrathub.com/sign-up)
2. Once your account is created and verified, login to CellStrat Hub Console [here](https://console.cellstrathub.com/)

### Navigating the Hub Console

CellStrat Hub provides you with a dedicated server (a.k.a. virtual machine or VM) with jupyter installed that you can turn on and off. This VM is called an `Instance`.

![dashboard](/img/dashboard.jpg)

1. You can start the instance by pressing on the green `Start Instance` button. This will change the state of the instance (top-right of card) to `Pending`.

:::note
The instance can take around 2 minutes to start depending on your tier.
:::

2. While the instance is starting, let's look at the other components on the screen. Just below the button, there are 3 cards,
   1. The first card shows the number of hours you have consumed and the maximum you can use. It also shows when your quota will renew. For free tier, its monthly from the date of your sign up.
   2. The second card shows your data storage usage.
   3. The third card shows you your current billing periods which spans a month for the free tier. For paid tiers, it could be either a quarter or year.
3. The top-left card titled **Resources** links to this documentation website and the the bottom-left card titled **Machine Specifications** shows you the current technical specifications of your instance.
4. Apart from a VM on the cloud with jupyter, you also have expansion packs which are a curated set of projects which can give you a head start if you are a beginner. Free tiers usually get the starter python pack which you can see on your dashboard. You can buy more packs by clicking on the big `Add more packs` button. These packs are preloaded in your instance so you don't need to set them up in anyway and its ready to use.

![inservice_dashboard](/img/inservice_dashboard.jpg)

5. Now, that you have explored the dashboard, it's likely that the instance state has also changed to `InService` and the `Launch Jupyter` button below the state is now active. 6. Press the `Launch Jupyter` button which will open a Classic Jupyter Notebook in a new tab.

![classic_jupyter](/img/classic_jupyter.jpg)

6. You can use this classic interface of jupyter if you want to but this will soon get depracated so we would recommend using the Jupyter Lab interface which can be accessed by clicking on the `Open JupyterLab` button on the top-right. This should reload the current tab and switch to the new JupyterLab interface as shown below.

![jupyterlab](/img/jupyterlab.jpg)

7. On the left, you can see your file explorer which has a folder called Packs which contains all the packs you own.
8. On the right, you can see various options for creating a notebook depending on the kernel. If you don't know what a kernel is then in a nutshell, jupyter kernels here are anaconda environments which have some libraries pre-installed depending on the use case. For example, `conda_python3` is the most commonly used kernel for general python and machine learning applications. For deep learning you can use the `conda_tensorflow_p36` or the `conda_pytorch_p36` kernels.
9. You can explore other features and aspects of Jupyter Lab, start coding, switch to dark mode if you like (under Settings -> JupyterLab Theme). For more information on effectively using JupyterLab, please go to the [FAQ](/Workspace%20💻/faq)

:::note
The instance has an Idle timeout of 30 minutes for the free tier and 60 minutes for the paid tiers. This idle timeout checks for inactivity in your jupyter notebooks and if the notebooks have been idle for more than this time, the instance automatically shuts down to save your compute hours.
:::
