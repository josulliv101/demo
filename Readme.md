# Future Projects

This is some info to keep on the radar for future react/redux projects. It's not recommendations... just things to be aware of and further investigated if it seems like a good fit. 

This demo repo is a monorepo -- though its scope is for an app... usually the monorepo scope would be much broader. But there are companies using monorepos just for single apps.

To demonstrate some of the points, I created a demo app. It's quick & dirty, not meant to be a starting point or boilerplate. Just a way to demonstrate some examples.

https://build-wcplkdlvmf.now.sh/

## Develop Components in Isolation
  * Components just come out better when developed in isolation
  * Create a Styleguide
    * developing cmps in isolation goes hand-in-hand with using a styleguide
    * good for group development
    * provides an inventory of components
    * may be useful as tool when interacting with business
    * Example Tools: Storybook, Styleguidist, Catalog
       * https://everydayhero.github.io/constructicon/ (styleguidist)
       * https://dialogs.github.io/dialog-web-components/ (styleguidist)
       * https://building.coursera.org/coursera-ui/ (storybook)
       
here's my stinky styleguide generated for this demo repo: 
https://public-jfpcwngzni.now.sh/

## Adopt a framework
  * Every web app is made out of same basic components (buttons, lists, tabs, tooltips, etc), avoid recreate wheel.
  * Emphasis is on providing good stucture.
  * Thorough documentation should already exist.
  * Example Frameworks: Material-UI, React-Bootstrap
  
## Monorepo/Use Workspaces for logical separation of code
  * Example Yarn, Lerna, others
  * Set up to needs (a need may be to run large amount tests efficiently, or another may be really good experience when developing)
  * Scope of monorepo: app vs organization
  * Probably some bumps/bruises in finding right structure for monorepo
  * https://github.com/korfuri/awesome-monorepo
  * Unfortunately monorepo support was yanked from create-react-app v2 at the last minute. This demo uses a create-react-app so I had to do some extra stuff to get it to work.
  
 ## Recompose/HOCs
 good way to promote code reuse/extract logic out of components (there's no if/else/switch statements in demo -- except in dev-tools. lot easier to test)
 see https://github.com/acdlite/recompose
 
 ## Reduce repetitive boilerplate code associated with redux-saga
 There's plenty of packages that help deal with this. In demo I tried using redux-toolbelt (never used it before, wanted to try). Or potentially could create own utils for it. See demo for saga/reducer code reduction -- this is just a simple, contrived example
 
 
