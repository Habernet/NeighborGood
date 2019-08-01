

### Branching process

- Master and develop are 🔒protected branches🔒. This means we need at least 1 approval before we merge into our these branches. (having the these branches protected helps so we know for sure what is going into master and develop, and noone can accidentally push code to it and break our site).
- Develop will be the branch we create branches off of. Develop will be merged into master on a scheduled cadence decided by the team.
- This screenshot 👇 illustrates this branching process.
- Feature A and Feature B are branches where we code our tasks. Once finished with making your edits, we merge that branch into develop. At the end of everyday (or whenever the team decides), develop gets merged into master.
- Then develop is updated with the latest version of master, and the process happens all over again.

![screenshot](https://raw.githubusercontent.com/schmitty890/homestead/master/public/assets/images/branching.jpg)

Here is a helpful reminder of the git process when creating, adding to, committing and pushing branches. Refer to this whenever needed, as working in a team environment with branches really helps keep everyones code organized and makes the project much more manageable.

```
1. Start on a clean branch

  1.1 Check which branch you're on `git branch`

  1.2 Start on develop branch, `git checkout develop`

  1.3 Do a `git pull` to get the latest copy of develop

  1.4 Create your new branch to code your story, `git checkout -b <branchname>` (Title your branch name the title of the story you're working on, replace spaces with -)

  1.5 Now you're on your own branch. Type `git branch` to see you're on your new branch

  1.6 Now write your code ✏️
```

```
2. You're done writing code, time to add your files and commit message to your branch

  2.1 Type `git status` to see the status of the files you've worked on. (these should be red, because you havent added them yet)

  2.2 To add these files, type `git add .` to add all files

  2.3 Type `git status` again, you will now see the files are green, which indicates they have been added to your branch

  2.4 Now make your commit message that says specifically what code you changed in this story. `git commit -m "your commit message here"`
  
  2.5 Pull down again. Type `git pull` (while on your feature branch after you've added/committed)...this will pull in any changes that were merged into you develop branch while you were working.
      If it asks for a branch, point to the develop branch `git pull origin develop`.
```  

```
3. You're ready to push your branch up to github

  3.1 Next, push your code up to the repository, with a `git push origin <branchname>` (branchname refers to the feature branch, not the develop branch)

  3.2 Once your branch is pushed up, navigate to our repo, and you can see branch under "Your recently pushed branches:". Click on Compare & pull request

  3.3 ❗Choose the base branch `development` as that will be the branch that you merge your branch into. (the development branch will be merged into master daily TODO: determine when we want builds to master branch to happen ❓)

  3.4 On the right hand side, add reviewers to review your pull request. Then click "Create Pull Request"

  3.5 Once your pull request is approved and merged, it will be 🙌built out into master🙌 during the next build to production. (TODO: determine when we want builds to maste branch to happen ❓)
```