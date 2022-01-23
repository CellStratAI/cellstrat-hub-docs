# Essentials 🧰

import TOCInline from '@theme/TOCInline';

This guide documents some of the essential things you need to know to have a great development experience in the Workspace.

<TOCInline toc={toc} />

## Notebooks

If you have never used _Jupyter Notebooks_, then here's a short crash course on it. Jupyter Notebooks are an interactive way to execute python code, debug it and experiment. Notebooks are heavily used in Data Science, Machine Learning and Deep Learning for rapidly experimenting and building in Python.

When you first open a new notebook, you will notice it has _cells_. Cells are how notebooks are structured and are the areas where you write your code. To run a piece of code you can click on it and use the `Shift + Enter` shortcut key or even use the play button that you can find at the toolbar above the cells.
![Cell](/img/workspace/cell.svg)

There are many ways to run cells in a notebook which you can find in the `Run` dropdown.
![Run](/img/workspace/run_dropdown.svg)

A few other things you should know to effectively use a notebook are,

- Use `Tab` to autocomplete (and also view) the functions and classes of a package.
  ![Autocomplete](/img/workspace/tab_autocomplete.svg)
- Whenever you are unsure on how to use a particular function or what it does, you can access the _docstring_ of the function with `Shift + Tab`.
  ![Docstring](/img/workspace/docstring.svg)
- Sometimes you might need to restart the notebook (kernel) which you can do by `Kernel` dropdown or using the restart kernel icon in the notebook toolbar.
  ![Restart Kernel](/img/workspace/restart_kernel.svg)
- You can view your active kernels and terminals in the kernels tab on the left and shut them down or close them.
  ![Active Kernels](/img/workspace/active_kernels.svg)

Workspace already comes with many python libraries preinstalled, but if you are looking to use a library that isn't installed, then you can install it directly in the notebook using the `pip` command in the cell.
![Pip](/img/workspace/pip_install.svg)
:::note
Any libraries you install this way, won't stay installed if you Stop your Workspace and Start it again later. In other words, your custom installations don't persist across sessions.
:::

## Kernels and Conda Environments

The concept of kernels and conda environments could be new to you if you are a complete beginner. So, here's a short explanation of both of them and how they relate to each other.

### Conda Environments

Anaconda is a distribution of the Python and R programming languages for scientific computing (data science, machine learning applications, large-scale data processing, predictive analytics, etc.), that simplifies package management and deployment.

A conda environment is a directory that contains a specific collection of python packages that have been installed. For example, there could be one environment with PyTorch installed and another with Tensorflow installed. This way you libraries which are not compatible with each other are isolated into different environments and makes it easy to work with projects which require specific libraries or packages. You can easily activate or deactivate environments either using the terminal or the notebook kernels, which is how you switch between them.

### Jupyter Kernels

Kernels are programming language-specific processes that run independently and interact with the Jupyter Applications and Conda Environments. Kernels can be language specific as well a conda environment specific. Currently in the Workspace, Kernels allow us to use specific conda environments in our notebooks. There are currently 3 different kernels available:

- Python 3 `(base)` - Contains the standard python libraries + machine learning and data science libraries, opencv, dlib and more.
- Pytorch 1.9 `(pytorch)` - Contains everything in Python 3 + Pytorch and Transformers.
- Tensorflow 2.4 `(tensorflow)` - Contains everything in Python 3 + Tensorflow and Transformers.
  :::tip
  The text in the parentheses `()` is the _conda environment_ associated with the kernel. This is useful when we want to switch between different conda environments in the terminal, like `conda activate pytorch`.
  :::

So, kernels in the notebook are analogous to using different conda environments. Based on what libraries you need when working on your project, you can choose the appropriate kernel when creating the notebook in the Launcher.
![Kernels in Launcher](/img/workspace/kernels_launcher.svg)

You can also switch between kernels after creating the notebook, by clicking on the kernel name of the top-right of the notebook which will open a pop-up dialog box to select the kernel.
![Switch Kernels](/img/workspace/switch_kernels.svg)

## Packs

CellStrat Hub comes with a wide library of projects in the form of Packs in all major fields of AI like Computer Vision, Natural Language Processing, Reinforcement Learning and Much More. You can use these packs to learn a particular domain of AI in a hands-on manner or use them as a boilerplate for your projects.

### Adding a Pack

You can add packs to your workspace by click on the `Add More Packs` button as shown below.
![Add Packs](/img/workspace/add_packs.svg)

This will take you to our wide library of packs and you can select any of them to add them your workspace.

After getting a pack, it will be available in your workspace in the `Packs/` folder as shown below.
![Packs Folder](/img/workspace/packs_dir.svg)

:::info
You can only add packs when your workspace is stopped.
:::

### Removing a Pack

Adding packs takes up your storage and you might want to clean it and remove some packs. You can do that by running this command in the terminal of your workspace.

```bash
hub utils rm-pack <name of pack here>
```

For example, if you want to remove a pack with name `deep-nlp` you would run `hub utils rm-pack deep-nlp` in terminal to remove it as shown below.
![Removing a Pack](/img/workspace/rm_pack.svg)

## Terminal FAQ

A fully functional linux terminal is available for you to run python scripts, install packages or do anything that requires a terminal.

If you are working with python scripts (`.py` files), you can execute them in the terminal by selecting terminal in the Launcher.
![Launch Terminal](/img/workspace/launch_terminal.svg)

Once the terminal is laucnhed, you can simply run `python my_file.py` (replace _my_file.py_ with your file name).
![Python in Terminal](/img/workspace/python_terminal.svg)

If you want to use a particular conda environment, you can run `conda activate env_name` (replace _env_name_ with the name of the conda environment like `pytorch` or `tensorflow`)
![Conda in Terminal](/img/workspace/conda_terminal.svg)

You can switch between directories in the terminal with the `cd` command, like `cd Packs/` or `cd ..` to go back one directory.

:::info
`~/hub` is the directory where your personal data lives permanently. If you store anything outside of this directory, it will not persist across different sessions.
:::

:::tip Deleting Non-Empty Folders
Jupyter Lab doesn't allow you to delete non-empty folders containing files from the file manager. In that case you can use the terminal to delete the folder using the `sudo rm -r path/to/the/folder` command. For example, `sudo rm -r ./myfolder/`.
:::

## File Management FAQ

The file manager on the left has most of the functionality required to

The JupyterLab file manager supports uploading (or drag-and-dropping) multiple files, but it doesn't support when folders are involved. If you are looking to upload multiple files and folders together or just folders, there is an alternative way.

1. Zip your files and folders in your local computer using archive tools like `Winrar` which allow you to create a `.zip` file of your files and folders.
2. Upload this `.zip` file to the JupyterLab Workspace.
3. Right-click the uploaded `.zip` file and select `Extract Archive` option in the context menu. After the extraction all your files and folders will be available.
   ![Extract Zip](/img/workspace/extract_zip.svg)

If you want to download folders from the JupyterLab Workspace to your local computer, you can right-click the folder and select the `Download as an Archive` option in the context menu.
![Download Zip](/img/workspace/download_zip.svg)
