---
sidebar_position: 3
---

# Frequently Asked Questions (FAQ) 📜

Here are some of the questions that are often asked by new users.

## Is there a terminal that I can access?

Yes, The terminal can be accessed by pressing the plus button on the top left which opens the launcher tab. In the launcher, if you scroll down you will find a button for terminal.

![terminal](/img/terminal.jpg)

- As you open the terminal, you can check your current directory with `pwd` command which gives you the following output

```bash
pwd
> /home/ec2-user/
```

- Your data is under `/home/ec2-user/SageMaker` and you can change directory with `cd` command as follows

```bash
cd SageMaker
pwd
> /home/ec2-user/SageMaker
```

## I am not able to select multiple files using the upload button. How do I do it?

You can use the upload button on the top-right bar of the JupyterLab interface to upload files.

![upload](/img/upload.jpg)

If you have multiple files and folders, the best way would be to zip your files and upload the zip to hub. Once you upload it to hub you can unzip it using the terminal. The steps to unzip are as follows:

1. Open a terminal tab in JupyterLab
2. Change directory to `SageMaker/` with `cd SageMaker`
3. Unzip your file with the `unzip` command which looks something like this: `unzip my_file.zip`

:::note
If you uploaded your zip in any other location apart from the root of the file explorer then put that path while running the unzip command. Let's say I have a folder called code in my instance and I uploaded the zip file inside the code folder, then the command in terminal to unzip would be

```bash
cd SageMaker
unzip code/my_file.zip
```

:::

:::tip
`unzip` is a general linux command and supports all the options. You can learn more about the `unzip` command by simply googling :)
:::

## Can I install my own libraries?

Yes, you can install new libraries inside the notebook itself. Notebook cells can run all terminal commands by prefixing the command with `!`. So to install a new library with `pip` run the command in the following format inside a code cell in your notebook

```bash
!pip install <name of library>
```

## How can I run python scripts?

You can run python scripts also with the `!` in the notebook cell. So running a python file would look something like this

```bash
!python my_file.py
```

## I installed a library in a notebook kernel, but it didn't stay installed when I restarted my instance. What happened?

Unfortunately any libraries you installed in your session don't stay installed when the notebook is restarted. It gets cleared.
