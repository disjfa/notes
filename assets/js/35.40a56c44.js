(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{263:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("A commit in a git repository records a snapshot of all the files in your directory. It's like a giant copy and paste, but even better!")]),e._v(" "),a("p",[e._v('Git wants to keep commits as lightweight as possible though, so it doesn\'t just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.')]),e._v(" "),a("h1",{attrs:{id:"quick-edit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-edit","aria-hidden":"true"}},[e._v("#")]),e._v(" Quick Edit")]),e._v(" "),a("p",[e._v("Download from repository and set user.")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git clone URL\ngit config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"NAME"')]),e._v("\ngit config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EMAIL"')]),e._v("\n")])])]),a("p",[e._v("Make changes and upload back.")]),e._v(" "),a("div",{staticClass:"language-git extra-class"},[a("pre",{pre:!0,attrs:{class:"language-git"}},[a("code",[e._v("git status\ngit add .\ngit commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MESSAGE"')]),e._v("\ngit push origin master\n")])])]),a("p",[e._v("A previously cloned repo on a server can now pull just the changes (clone is used only the first time to create the local repo).")]),e._v(" "),a("p",[a("code",[e._v("git pull")]),e._v(" - ("),a("code",[e._v("git fetch")]),e._v(" + "),a("code",[e._v("git merge")]),e._v(")")]),e._v(" "),a("p",[e._v("Github repo > Clone to local > Push to Github > Pull changes to server")]),e._v(" "),a("h1",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("p",[e._v("Master branch = Timeline")]),e._v(" "),a("p",[a("code",[e._v("HEAD")]),e._v(" = Last commit on current branch.")]),e._v(" "),a("p",[e._v("HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.")]),e._v(" "),a("p",[e._v("Commit messages should be in the present tense instead of past. They should tell what a commit does instead of what happened. Ex. Add new module vs Added new module.")]),e._v(" "),a("p",[e._v("Git uses vi as the default editor.")]),e._v(" "),a("h1",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initialize an empty repo inside a .git hidden directory.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n")])])]),a("h2",{attrs:{id:"git-ignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-ignore","aria-hidden":"true"}},[e._v("#")]),e._v(" Git Ignore")]),e._v(" "),a("p",[e._v("This is a list of files/folders to be ignored in commits. To use it, create a "),a("code",[e._v(".gitignore")]),e._v(" file in the working directory, "),a("strong",[e._v("NOT")]),e._v(" inside "),a("code",[e._v(".git")]),e._v(".")]),e._v(" "),a("p",[e._v("Each line in the file is a new ignore rule. Ex. To ignore "),a("code",[e._v("node_modules/")]),e._v(", just add that as one line.")]),e._v(" "),a("p",[e._v("If the ignoring is added after committing the files to be ignored, they need to be untracked. Use "),a("code",[e._v("git rm -r --cached .")]),e._v(" to untrack everything, and the "),a("code",[e._v("git add/git commit")]),e._v(". "),a("strong",[e._v("Careful as this can lose progress to files.")])]),e._v(" "),a("p",[e._v("Also, pattern matching can be used to ignore specific files in specific places. Ex. "),a("code",[e._v("*.txt")]),e._v(" ignores all text files, while "),a("code",[e._v("routes/*.js")]),e._v(" ignores all javascript files in that folder. To ingore a folder, use "),a("code",[e._v("FOLDER/")]),e._v(".")]),e._v(" "),a("p",[e._v("Finally, use "),a("code",[e._v("#")]),e._v(" to comment.")]),e._v(" "),a("h1",{attrs:{id:"workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workflow","aria-hidden":"true"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),a("p",[e._v("it's generally considered good practice to avoid merges where possible.")]),e._v(" "),a("p",[e._v("A good workflow is to leave the "),a("code",[e._v("master")]),e._v(" for production and do all the coding in a separate "),a("code",[e._v("develop")]),e._v(" branch. The "),a("code",[e._v("develop")]),e._v(" branch can expand into "),a("code",[e._v("feature")]),e._v(" branches which would later be merged back. When a certain stable version is reached in "),a("code",[e._v("develop")]),e._v(", it can be merged with "),a("code",[e._v("master")]),e._v(" along with a version tag.")]),e._v(" "),a("p",[e._v("Additonal brances such as "),a("code",[e._v("release")]),e._v(" and "),a("code",[e._v("hotfix")]),e._v(" can be introduced between the "),a("code",[e._v("master")]),e._v(" and "),a("code",[e._v("develop")]),e._v(" ones.")]),e._v(" "),a("p",[e._v("If a branch is not shown, it's due to fast-forwarding i.e. no changes were made in the branch being merged into, hence the simpler merge log.")]),e._v(" "),a("h1",{attrs:{id:"example-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-project","aria-hidden":"true"}},[e._v("#")]),e._v(" Example Project")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("*   e67ccc4 (HEAD -> master) Merge branch 'header'\n|\\\n| * ce37b16 (header) Fix original header\n* |   707692c Merge branch 'footer'\n|\\ \\\n| * | 2dc6e90 (footer) Expand footer\n| * | fd61a63 Create footer.html\n* | | 8083e87 Add fifth bla in CAPS\n* | | 8d56117 Add fourth bla in index.html\n* | | 86c50f0 Added third bla in index.html\n|/ /\n| | * 26326bb (header2) Fix header2 version\n| | * d83bebc Modify header into version 2\n| |/\n| * c2d4091 Create header.html\n|/\n* 9524ae9 Create index.html\n")])])]),a("h1",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help","aria-hidden":"true"}},[e._v("#")]),e._v(" Help")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List all the commands.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Explain a specific command.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v(" COMMAND\n")])])]),a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Setting up owner of changes for all repos. Github contributions count only with the github email.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"NAME"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"EMAIL"')]),e._v("\n")])])]),a("h1",{attrs:{id:"staging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staging","aria-hidden":"true"}},[e._v("#")]),e._v(" Staging")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# What changed since last commit?")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Stage an untracked file for committing.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" FILENAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Multiple files.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" FILENAME FILENAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A folder.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" FOLDER/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# All specific file types.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" *.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... in a folder.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" FOLDER/*.js\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... in whole project.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*.js"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Track everything.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Unstage files.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset HEAD FILENAME\n")])])]),a("h1",{attrs:{id:"committing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#committing","aria-hidden":"true"}},[e._v("#")]),e._v(" Committing")]),e._v(" "),a("p",[e._v("Each commit moves the HEAD further up the timeline.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Commit changes with inline message.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MESSAGE"')]),e._v("\n")])])]),a("p",[e._v("If the "),a("code",[e._v("-m")]),e._v(" is ommited, the screen will move to the "),a("code",[e._v("vi")]),e._v(" text editor, which can be exited with "),a("code",[e._v(":q")]),e._v(".")]),e._v(" "),a("h1",{attrs:{id:"tagging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging","aria-hidden":"true"}},[e._v("#")]),e._v(" Tagging")]),e._v(" "),a("p",[e._v("A reference to a specific commit, used mostly for release versioning.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create tag.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag -a v0.0.1 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Version 0.0.1"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List tags.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" tag\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Open a specific version.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout v0.0.1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Push tags to remote repo.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --tags\n")])])]),a("h1",{attrs:{id:"see-changes-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-changes-diff","aria-hidden":"true"}},[e._v("#")]),e._v(" See Changes / Diff")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Commit history.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show unstaged differences since last commit.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show differences after staging.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" --staged\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Show differences between current and specific commit.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("diff")]),e._v(" HASH\n")])])]),a("h2",{attrs:{id:"tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree","aria-hidden":"true"}},[e._v("#")]),e._v(" Tree")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# A visual tree with branch names included.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" log --oneline --decorate --all --graph\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Add the "tree" alias as a shortcut.')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config --global alias.tree "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"log --oneline --decorate --all --graph"')]),e._v("\n")])])]),a("h1",{attrs:{id:"undo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo","aria-hidden":"true"}},[e._v("#")]),e._v(" Undo")]),e._v(" "),a("p",[e._v("DON'T DO THESE AFTER PUSHING!")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Revert a file to the last commit version.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -- FILENAME\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# UNDO commit and move everything back to staging. The carrot on the HEAD means move to the previous commit.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset --soft HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# DELETE the last 2 commits.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset --HARD HEAD^^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# DELETE everything after the specified commit.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" reset --HARD HASH\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change last commit with overriding message.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit --amend -m "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"MESSAGE"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Force change on GitHub. Git interprets the "^" after the hash as the parent of this very commmit, and the "+" as a force push.')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin +hash^:master\n")])])]),a("h1",{attrs:{id:"remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote","aria-hidden":"true"}},[e._v("#")]),e._v(" Remote")]),e._v(" "),a("p",[e._v("A project can have multiple remotes ex. origin, test, production...")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Add a remote i.e. bookmark a repo i.e. This NAME = this URL. The name is usually "origin", but it can be anything.')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" NAME URL\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List all remotes.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check a remote.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote show origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Remove a remote.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" NAME\n")])])]),a("h1",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[e._v("#")]),e._v(" Push")]),e._v(" "),a("p",[e._v("Define which local branch (usually master) to push to which repository (usually origin). It asks for user and pass.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git push -u REPO_NAME BRANCH_NAME")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin master\n")])])]),a("p",[a("code",[e._v("-u")]),e._v(" remember the repo and the branch, so that only "),a("code",[e._v("git push")]),e._v(" can be used.")]),e._v(" "),a("h1",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[e._v("#")]),e._v(" Pull")]),e._v(" "),a("p",[e._v("Used to update the local repo with the latest changes. Should be done often.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull\n")])])]),a("p",[e._v("Behind the scenes, this creates an origin/master branch which is automatically merged into the master one, unless there is a merge conflict.")]),e._v(" "),a("h2",{attrs:{id:"pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Pull Requests")]),e._v(" "),a("p",[e._v("Once someone completes a feature, they don’t immediately merge it into master. Instead, they push the feature branch to the central server and file a pull request asking to merge their additions into master.")]),e._v(" "),a("p",[e._v("This gives other developers an opportunity to review the changes before they become a part of the main codebase.")]),e._v(" "),a("p",[e._v("You can think of pull requests as a discussion dedicated to a particular branch.")]),e._v(" "),a("p",[e._v("For example, if a developer needs help with a particular feature, all they have to do is file a pull request. Interested parties will be notified automatically, and they’ll be able to see the question right next to the relevant commits.")]),e._v(" "),a("p",[e._v("Once a pull request is accepted, the actual act of publishing a feature is much the same as in the Centralized Workflow. First, you need to make sure your local master is synchronized with the upstream master. Then, you merge the feature branch into master and push the updated master back to the central repository.")]),e._v(" "),a("h1",{attrs:{id:"clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clone","aria-hidden":"true"}},[e._v("#")]),e._v(" Clone")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a local repository from a remote one.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone URL\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ... with a different name.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone URL NEW_NAME\n")])])]),a("p",[e._v("Cloning does:")]),e._v(" "),a("ul",[a("li",[e._v("Download entire repo into a new local one.")]),e._v(" "),a("li",[e._v('Add "origin" remote, pointing to the clone URL.')]),e._v(" "),a("li",[e._v("Check out initial branch. (Set head to master)")])]),e._v(" "),a("h1",{attrs:{id:"branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#branch","aria-hidden":"true"}},[e._v("#")]),e._v(" Branch")]),e._v(" "),a("p",[a("strong",[e._v("Do not mess with the master")]),e._v(". The master branch is deployable production code, meant to be stable. Instead, work on new features in separate branches, which would then be "),a("code",[e._v("merged")]),e._v(" or "),a("code",[e._v("rebased")]),e._v(" into master.")]),e._v(" "),a("p",[a("strong",[e._v("Branches are local")]),e._v(", meaning they cannot be worked on at the same time.")]),e._v(" "),a("p",[e._v("Branches in Git are incredibly lightweight as well. They are simply pointers to a specific commit -- nothing more. This is why many Git enthusiasts chant the mantra: "),a("strong",[e._v("branch early, and branch often")]),e._v(".")]),e._v(" "),a("p",[e._v("Because there is no storage / memory overhead with making many branches, it's easier to logically divide up your work than have big beefy branches.")]),e._v(" "),a("p",[e._v('A branch essentially says "I want to include the work of this commit and all parent commits."')]),e._v(" "),a("p",[e._v("Switching branches will only show the files in that branch.")]),e._v(" "),a("h4",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create","aria-hidden":"true"}},[e._v("#")]),e._v(" Create")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create new branch. HEAD still on master (Use checkout to switch).")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create AND move to a branch.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a remote branch. Usually origin.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repo_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h4",{attrs:{id:"navigate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigate","aria-hidden":"true"}},[e._v("#")]),e._v(" Navigate")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check which branch we are on.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Check remote branches.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -r\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Move to a specific branch (Set HEAD from master to <branch_name>). This is like switching timelines.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h4",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete a branch.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete a remote branch")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("repo_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("branch_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("h2",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge","aria-hidden":"true"}},[e._v("#")]),e._v(" Merge")]),e._v(" "),a("p",[a("strong",[e._v("The merging is done from the perspective of where we merge "),a("code",[e._v("INTO")]),e._v(".")])]),e._v(" "),a("p",[e._v('Merging in Git creates a special commit that has two unique parents. A commit with two parents essentially means "I want to include all the work from this parent over here and this one over here, and the set of all their parents."')]),e._v(" "),a("p",[e._v("Move (checkout) to the branch (master) you want to merge into, and use:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" merge BRANCH_NAME\n")])])]),a("p",[a("code",[e._v("master")]),e._v(" now points to a commit that has two parents. If you follow the arrows up the commit tree from master, you will hit every commit along the way to the root. This means that master contains all the work in the repository now.")]),e._v(" "),a("p",[e._v("Merging is very easy if the master branch is not modified. This is fast-forwarding.")]),e._v(" "),a("p",[e._v("If both branches were modified, a commit is created to do the merge. (Vi editor opens for the message)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("0\n|\\\n2 1  - 2 master, 1 branch\n|/\n3    - master assimilates branch\n")])])]),a("h2",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase","aria-hidden":"true"}},[e._v("#")]),e._v(" Rebase")]),e._v(" "),a("p",[a("strong",[e._v('The "merging" is done from the perspective of where we merge '),a("code",[e._v("FROM")]),e._v(".")])]),e._v(" "),a("p",[e._v('The second way of combining work between branches is rebasing. Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else i.e. it serializes the history if you do not want a lot of branches in the final history.')]),e._v(" "),a("p",[e._v("While this sounds confusing, the advantage of rebasing is that it can be used to make a nice linear sequence of commits. The commit log / history of the repository will be a lot cleaner if only rebasing is allowed.")]),e._v(" "),a("p",[e._v("Move (checkout) to the branch (BRANCH_NAME) you want to merge from, and use:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" rebase master\n")])])]),a("p",[a("strong",[e._v("This makes it look like two features were developed sequentially, when in reality they were developed in parallel.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("0\n|\\\n1 1  - 1 branch\n|\n2    - 2 master\n|\n3    - branch (1) was added to the original timeline.\n")])])]),a("h1",{attrs:{id:"example-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-workflows","aria-hidden":"true"}},[e._v("#")]),e._v(" Example Workflows")]),e._v(" "),a("h2",{attrs:{id:"work-on-a-new-admin-feature-fix-a-bug-in-master-and-merge-the-new-admin-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-on-a-new-admin-feature-fix-a-bug-in-master-and-merge-the-new-admin-feature","aria-hidden":"true"}},[e._v("#")]),e._v(" Work on a new admin feature, fix a bug in master, and merge the new admin feature.")]),e._v(" "),a("p",[e._v("Create a new branch and add features. Each commit moves the HEAD.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git checkout -b admin\n\ngit add admin/dashboard.html\ngit commit -m "Add dashboard"\n\ngit add admin/users.html\ngit commit -m "Add user admin"\n')])])]),a("p",[e._v("Fix bugs on master. Move to the master branch, check that we are on it and pull the latest changes from the remote. Push changes to remote.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git checkout master\n\ngit branch\n\ngit pull\n\ngit add store.rb\ngit commit -m "Fix store bug"\n\ngit add product.rb\ngit commit -m "Fix product"\n\ngit push\n')])])]),a("p",[e._v("Move back to the admin feature to finish changes. When done, move to master branch and merge with admin.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout admin\n\ngit checkout master\n\ngit merge admin\n")])])]),a("p",[e._v("What the timeline (master) looks like. * = commit.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("*    - Merge\n|\\\n| *  - Admin feature\n* |  - Bug fix\n* |  - Bug fix\n| *  - Admin feature\n|/\n*    - Last commit before branch\n")])])]),a("h1",{attrs:{id:"useful"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useful","aria-hidden":"true"}},[e._v("#")]),e._v(" Useful")]),e._v(" "),a("p",[e._v("While we all used git (and Github) in college to collaborate and save code, we mainly stuck to the the basic \"add, commit, push\" flow and didn't really go outside of that much, mainly because we didn't know it all that well at the time. But looking back after 2+ years of using [git] in a professional environment, here was out shortlist of things we wish we knew git could do (in order of importance)")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("git reset HEAD")]),a("br"),e._v("\nIf you could learn one thing about git besides how to commit and push, this would be it. When you commit to git, those commits generate a log that is identified by a commit hash. By using the command "),a("code",[e._v("git reset HEAD <commit-hash>")]),e._v(" (there are other variants, this is the most straightforward), you can essentially go back in time in your code. What this is great for is if you are in a point in your project where you are pretty certain "),a("em",[e._v("you're going to fuck something up")]),e._v(", committing is like doing a quick save in a video game right before a boss fight. Something goes wrong, reset to the last commit.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Branching and Pull Request Workflow")]),a("br"),e._v("\nIn college we all worked off a single branch pushing our code up to save it. While this worked, the occasional push by a teammate who didn't properly test their code caused our project to crash and one of us having to fix it (this usually happened <12 hours before deadlines). Branching and pull requests would have eliminated that. Not only are they working on a different branch so pushing up won't mess with the original copy. When they want to merge their code, going through a PR (pull request) process will involve the code getting reviewed by another person to make sure it all works.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("git init")]),a("br"),e._v("\nWhen I first started with git I always thought that you had to have a remote somewhere to use it (ie on github or gitlab). As I have learned that is not the case, you can initialize a git repository in any directory and commit any files, you are only restricted from pushing until you add a remote (duh). This is great to pair with the 1st tip, even if you are working by yourself. Having the ability to go back if you mess something up is essential.")])])]),e._v(" "),a("p",[e._v("TBH that's really it. Git is a "),a("em",[e._v("very")]),e._v(" complex application that even I haven't fully learned yet. However, it has a fairly easy learning curve letting you take advantages of the most important bits quickly. If you have any questions feel free to post below and I'll be happy to answer best I can.")])])},[],!1,null,null,null);t.default=n.exports}}]);