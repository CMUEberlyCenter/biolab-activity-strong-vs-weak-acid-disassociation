# Biolab Activity Template

This project is a template for activities in the Biolab suite.

![Travis (.org)](https://flat.badgen.net/travis/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Coveralls github](https://flat.badgen.net/coveralls/c/github/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Code Climate maintainability](https://flat.badgen.net/codeclimate/maintainability/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Code Climate technical debt](https://flat.badgen.net/codeclimate/tech-debt/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)

## Getting Started

As this project is designed to be a template for a Biolab activity,
these instructions will have you create a new activity repo, then get
a copy of the project up and running on your local machine for
development and testing purposes. See deployment for notes on how to
deploy the project on a live system.

### Prerequisites

git and [npm](https://www.npmjs.com/) must be installed and are
assumed to be in your path.

### Installing

On your local machine, create a new activity directory. The naming
convention is biolab-activity-something, e.g.:
biolab-activity-strong-vs-weak-acid-dissociation. Then, initialize it
as a git repo:

```
mkdir new-activity-name
cd new-activity-name
git init
```

Pull in the activity template files (this project); then initialize
and fetch the configuration submodule:

```
git pull https://github.com/CMUEberlyCenter/biolab-template
git submodule update --init conf/
```

Open a browser, go to GitHub, and create a new repository for the activity.

Add your new repo as the origin of your local repo and push everything there:

```
git remote add origin git-url-of-new-activity-repo
git push -u origin master
```

Install dependencies from npm:

```
npm i
```

Now that the dependencies to do a config update are installed, do the
update followed by another install (in case anything new came from
upstream):

```
npm run conf
npm i
```

To start the dev server and see a skeleton program run:

```
npm run start
```

Now, point your browser at the URL it tells you (probably [localhost:8080](http://localhost:8080))

### Configuring hosted CI services

Biolab activities should follow the model of this template by having
tested, maintainable code. Login via your GitHub account to the
following services and enable the new activity's repository in
each. The links below will take you directly to the respective add
repo pages. No additional configuration is required.

[Travis CI](https://travis-ci.org/account/repositories) - Continuous integration build and testing

[Coveralls](https://coveralls.io/repos/new) - Code coverage tracking

[Code Climate](https://codeclimate.com/github/repos/new) - Code maintainability

Update the shield links in the new activity's `README.md`. The links
should change from using this template's project to that of the new
activity's project. Finally, commit those changes and push them to
GitHub.

## Developing and Building the Activity

Assuming the steps in **Getting Started** completed successfully, work
on the activity code can begin in earnest. Most development work will
be in `src/sketch.js` and will vary based on the requirements of the
activity.

### Building the Activity

Build scripts within `package.json` manage the development lifecycle.

As seen above in Getting Started, `npm run start` spools up a dev
server. Changes made to source files will be automatically reflected
once the file is saved.

If it's desirable to just open an html file locally on the dev
machine, you can perform a dev build:

```
npm run build:dev
```

That will build the project using the dev webpack configuration and
export it to `dist/`. The exported `dist/index.html` can be opened
with a browser by doing `File > Open File...` (or equivalent).

You can automatically perform a rebuild whenever a change is made to a
source file:

```
npm run build:watch
```

When that script is running, after a change is saved, just reload the
`dist/index.html` file already open in your browser.

Finally, remove all files in `dist/` with:

```
npm run build:clean
```

As is typically done before a clean build.

Regenerate a production bundle before commiting changes to master:

```
npm run build:clean
npm run build # an alias for build:prod
```

In a production build, ESLint must succeed or the build will fail and
no files will be in `dist/`.

### Generating documentation

Documentation uses JSDoc, and can be generated with:

```
npm run doc
```

Examples of properly documented code can be found in the template. You
should regenerate documentation before commiting changes to master if
any of those changes would affect the documentation.

### Deploying the demo to GitHub Pages

A publicly accessible demo of the activity can be created by the following:

```
npm run deploy
```

The demo will be located at
[https://cmueberlycenter.github.io/biolab-activity-name](https://cmueberlycenter.github.io/biolab-activity-name). If
it's not found, check the GitHub Pages settings for the
repository. Ensure it is turned on and set to use the `gh-pages`
branch.

### Receiving upstream configuration changes

The [biolab-config](https://github.com/CMUEberlyCenter/biolab-config)
project governs how activities should generally be configured and it's
a good idea to regularly pull in any updates. The one-stop shop to
fetch updates and incorporate those changes is:

```
npm run conf
```

Upstream configuration is included as a submodule and placed in
`conf/`. All activity-specific configuration overrides should be done
by editing the appropriate file(s) in the project root, and NOT by
editing files within `conf/`. Configuration overrides in files at the
project root take precedence and will not be overwritten. This
includes edits to the `package.json` file: It is carefully merged with
the upstream `package-base.json` and additional, activity-specific
packages can be installed using `npm i <package-name> --save-dev` or
`npm i <package-name> --save` as normal.

## Running Tests

Test scripts are included in the `package.json` file. Tests discussed
below should all pass before new changes are committed. When a commit
is pushed to GitHub, Code Climate and Travis CI are automatically
triggered. Code Climate performs a maintainability analysis and Travis
does a build and sends the coverage report to Coveralls. Updates will
be seen in the shields in the `README.md` and details can be found on
the reports at each service's site.

### Code coverage and unit testing

Testing is primarily done through Jest. Some example tests are
included in this template for `src/sketch.js` in
`src/sketch.test.js`. Tests should be added throughout activity
development. Tests can be run by:

```
npm run test
```

### Linting

ESLint is used for linting, which does code style checks and looks for
potential errors. The linting process is integrated with webpack,
which handles the asset bundling and build process. That process is
discussed above, but the result is that linting does not need to be
done explicitly. However, if that is necessary or even desirable, you
can use the following to lint files within the `src` directory:

```
npx eslint src/
```
Linting style is done with stylelint. This is also integrated with 
webpack. Use the following to explicitly lint style files in `src`:

```
npx stylelint --config stylelint.config.js src/
```

## Deployment

When deployed, the `index.html` and `bundle.js` in `dist/` should be
placed in the same directory. They can be served by any standard
webserver or `index.html` can be opened by a browser using `File >
Open File...`.

## Built With

* [p5.js](https://p5js.org/) - The drawing library
* [p5.play](http://molleindustria.github.io/p5.play/) - Sprite library for p5.js
* [p5.beaker](http://cmueberlycenter.github.io/p5.beaker/) - Beaker and particle library for p5.js

## Authors

* **Meg Richards** - *Initial work* - [merichar](https://github.com/merichar)

See also the list of [contributors](https://github.com/CMUEberlyCenter/biolab-template/contributors) who participated in this project.
