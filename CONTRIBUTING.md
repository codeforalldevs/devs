>The content of this file is taken from "JacksonBates/fcc-git-nomic CONTRIBUTING.md"
 You find this repo on this link: "https://github.com/JacksonBates/fcc-git-nomic".
 It's modified to suits our project


# How to contribute

## You will need

+ A GitHub account
+ [Git installed on your system](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Getting started

+ Fork this repo before making any changes - you will be initially pushing commits to your fork, not this repo.  
+ Create issues on **this** repo, not your fork, if you encounter bugs, non-ideal behaviour/css, or wish to request features.

## Proposing Rules - Your first PR (pull request)


+ On your forked verision of the repo on GitHub, click the green 'clone or download' button and copy the link.
  + The link will look something like this: `https://github.com/codeforalldevs/devs.git` (but with your username, not codeforalldevs)
+ In the terminal write the following command to clone the repo. This will give you a local copy to work on:
  + `git clone <paste-the-link-of-your-repo.git-here>`
  + eg: `git clone https://github.com/codeforalldevs/devs.git`
+ In your terminal navigate to the folder that was just created.
  + The command for this is `cd`
  + eg: `cd devs`
+ If your version of the repo is ever out of sync with the original repo, i.e. there are new commits on the master branch of the original that you don't have, you need to sync your repo before adding your contributions. **See below, in the section called 'How to sync your local repo with the original repo' for details**

+ **Create a new branch to work on**.
  + At the terminal, in the correct folder, run `git checkout -b <new-branch-name>`
  + `<new-branch-name>` should be replaced with something sensible, like `new-background-img`
  + All together: `git checkout -b new-background-img`
+ Make the change you want.
  + Save your work!
+ Commit your change:
  + `git add <name-of-changed-file>`
  + `git commit -m <your-commit-message>`
    + e.g. `git commit -m 'adds new background image'`
+ Push your change to your fork:
  + `git push origin <your-branch-name>`
+ Open a pull request. Follow the guide here: [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
  + It helps to summarize your proposal in the PR description, so people know what you have changed without reading the source code.

+ Once your PR is accepted (or closed and rejected) delete your local and remote branches:
  + switch to `master` branch:  
    `git checkout master`
  + list all branches:  
    `git branch`  
    you should see `* master` and the second branch you created previously
  + now delete that second branch:  
    `git branch -D <name-of-the-branch>`
  + delete second branch from your GitHub:  
    `git push origin --delete <name-of-the-branch>`  

## How to sync your local repo with the original repo

+ This setup should be done only once for the repo.  
  [source](https://help.github.com/articles/configuring-a-remote-for-a-fork/)  
  + List the current configured remote repository for your fork:  
    `git remote -v`  
    You should see two links with `origin` in front of them.  
    The links will begin either with `https` or `git@`
  + Specify a new remote upstream repository that will be synced with the fork:  
    `git remote add upstream https://github.com/codeforalldevs/devs.git`  
    or  
    `git remote add upstream git@github.com:codeforalldevs/devs.git`  
    depending on which protocol you saw in the first step.
  + Verify the new upstream repository you've specified for your fork:  
    `git remote -v`  
    now you should see four links: two `origin` and two `upstream`  


+ This should be done to check for updates on the remote repo:  
  [source](https://help.github.com/articles/syncing-a-fork/)
  + Get data from original repo:  
    `git fetch upstream`  
  + Switch to the `master` branch of your local repo:  
    `git checkout master`
  + Merge changes from the original repo into your local `master` branch:  
    `git merge upstream/master`
  + Now push changes to your GitHub repo:  
    `git push`

Now your local repo and your GitHub repo is up to date with the original repo you forked from.

## Any questions?

Could this CONTRIBUTING file be improved? Was anything inaccurate or unclear? Please open up an issue and suggest appropriate fixes. Good documentation is just as crucial as good code - so documentation contributions are just as valued as fancy code contributions!
