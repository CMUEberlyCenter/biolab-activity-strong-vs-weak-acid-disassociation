# Biolab Activity Template

This activity demonstrates how strong and weak acids affect the ratio of protons to conjugate bases.

![Travis (.org)](https://flat.badgen.net/travis/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Coveralls github](https://flat.badgen.net/coveralls/c/github/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Code Climate maintainability](https://flat.badgen.net/codeclimate/maintainability/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)
![Code Climate technical debt](https://flat.badgen.net/codeclimate/tech-debt/CMUEberlyCenter/biolab-activity-strong-vs-weak-acid-dissociation)

## Learning Objectives

Compare how strong and weak acids affect ratio of protons to conjugate bases

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
* **Zach Mineroff** - *Strong vs weak acid/base* - [zmineroff](https://github.com/zmineroff)

See also the list of [contributors](https://github.com/CMUEberlyCenter/biolab-template/contributors) who participated in this project.
