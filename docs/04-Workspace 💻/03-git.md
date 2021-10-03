# Git Integration

import TOCInline from '@theme/TOCInline';

Git is a popular version-control and collaboration system for software and is fully supported by Hub Workspace with a Graphical Interface to easily perform the common git operations.

## Authentication (SSH)

Before you can start using any cloud git solutions like GitLab or GitHub, you would need to authenticate yourself via SSH. In this guide, we will use GitHub as an example but the process would be similar for other providers like BitBucket and GitLab.

1. The first step is ofcourse starting and opening up the Workspace.
2. Now launch a terminal and run the following command. _Make sure to replace your email in the command._
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
3. It will ask a few questions, continue to press the `Enter` or `Return` key on the keyboard to keep all of the defaults. (DO NOT change the default save path of the key).
4. Now run the following command to view the public-key of the key-pair that was generated just now.
```bash
cat ~/.ssh/id_ed25519.pub
```
5. Copy the output of the above command. We need to add this public key to our GitHub account.
6. Login to your GitHub account in the browser and go to your settings by clicking on your profile on the top-right.
7. On the left, you should see a tab for `SSH and GPG Keys` and click on it.
8. You should see a green button called `Add New SSH Key`. Click on it and paste the public key you just copied earlier and add it.

That's it, you are now authenticated with your GitHub account on the Workspace.

:::caution
After the authentication, don't stop the workspace immediately, please wait for atleast 5 minutes before stopping the workspace. You can continue doing your work though. This is to ensure your SSH keys are backed up in your persistent storage. This will ensure you remain authenticated across workspace sessions.
:::

## Using the Git GUI

Now that you are authenticated with your GitHub account, you can start by cloning your repositories via the SSH URL which is usually of the following format: `git@github.com:username/repository-name.git`.

The Git GUI app is available as the third tab on the left.
![Git Tab](/img/workspace/git_tab.svg)

:::info
Some Git operations are available on the Git Menu in the Menu bar on the top as well.
:::

You can perform different operations like initializing a git repository, cloning a repository, staging and committing changes, pushing and pulling commits and more in this tab.

1. As a simple demo, you can create a new repository in GitHub. Once you create the repository, you can copy the SSH clone URL as shown below.
![Sample Repo](/img/workspace/sample_repo.svg)
2. Now open the Git Tab in JupyterLab Workspace and click on the `Clone a Repository` button.
![Clone](/img/workspace/clone_repo.svg)
4. Once the repo is cloned, you should see your repo cloned and the folder should appear in the file manager. Now go to the file manager and open your repository folder.
5. For demo purposes, you can create a new python file and write some hello world code in it as shown below.
![Hello File](/img/workspace/create_file_repo.svg)
6. While being in the repository's folder in the file manager, go to the Git tab. You should see your staging area.
![Stage 1](/img/workspace/stage1.svg)
You can press the `+` button on the untracked or changed area (depending on whether they are new files or modified files). After pressing that button you should see your changes move to staged area.
![Stage 2](/img/workspace/stage2.svg)
7. Now you can write a commit message and maybe a description and press the commit button.
![Commit](/img/workspace/commit.svg)
If you are committing for the first time, it might ask you your github username and email.
![First Commit](/img/workspace/first_commit.svg)
8. After committing, you can push your changes using the upload cloud icon button (red circle 1).
![Push Commit](/img/workspace/push_pull.svg)
In general, you can pull remote changes using the download cloud icon button (red circle 2).

So this was a basic example of using the Git GUI in the Workspace. Many other basic operations are supported in the GUI. If you want to use advanced git commands, you can use the terminal as you would normally.


