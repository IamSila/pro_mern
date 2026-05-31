# pro_mern

- Learned how to install nvm, node and npm.
- I am running an earlier version of node. I am using pip env and nodeenv to be able to do that. (I am running v10.24.1)
- npm install <package> to install a package.
- express version used is 4

- While working with a team, use package.json to check for exact versions being used.

# babel command

installation -> check documentation
run this to transform the jsx during build.

`npx babel src --presets @babel/react --out-dir public`

presets to be used can be saved in a configuration file called .babelrc [Should be placed where we have the jsx code to be transformed i.e in src folder]

`polyfills` - function implementations to supplement the missing implementation in older browsers are.

To include polyfills add this in html ---> use the latest versions in other project.
`<script src="https://unpkg.com/@babel/polyfill@7/dist/polyfill.min.js"></script>`

- Commandline commands can be added to scripts in the package.json to automate them.

- package.json has all the scripts for reference.
