(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{230:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ko-service-with-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ko-service-with-dependencies"}},[e._v("#")]),e._v(" KO Service with Dependencies")]),e._v(" "),r("p",[e._v("Many of the functions developed for KO Services are simple and require no external libraries or files.  However the use of these libraries and files can simplify design, increase maintainability and create a better solution.")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc",target:"_blank",rel:"noopener noreferrer"}},[e._v("10-Year Risk of Cardiovascular Disease KO"),r("OutboundLink")],1),e._v(" is an object the could be developed using a function the has not dependencies ( "),r("a",{attrs:{href:"https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc/v0.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("score-calc v0.1.0"),r("OutboundLink")],1),e._v(").  However the introduction of external dependencies in the form of libraries and files creates a more testable, adaptable and maintainable function ("),r("a",{attrs:{href:"https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc/v0.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("score-calc v0.3.0"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("p",[e._v("Currently the KGrid Activator uses the "),r("a",{attrs:{href:"https://openjdk.java.net/projects/nashorn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nashorn"),r("OutboundLink")],1),e._v(" JavaScript engine for execution of JavaScript Objects. Nashorn implements "),r("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript 5.1 specification"),r("OutboundLink")],1),e._v(" which doesn't support external dependencies without "),r("em",[e._v("bundling")]),e._v(" your function using "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),r("OutboundLink")],1),e._v(".  The use of "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),r("OutboundLink")],1),e._v(" allows the function to be transpiled to "),r("a",{attrs:{href:"https://openjdk.java.net/projects/nashorn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nashorn"),r("OutboundLink")],1),e._v(" compliant "),r("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ECMAScript 5.1 specification"),r("OutboundLink")],1),e._v(" artifact.")]),e._v(" "),r("h2",{attrs:{id:"create-bundled-ko-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-bundled-ko-service"}},[e._v("#")]),e._v(" Create bundled KO Service")]),e._v(" "),r("p",[e._v("To create from the template of bundled KO, run the KGrid CLI command and select the template type of "),r("code",[e._v("bundled")]),e._v(":")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v(" kgrid create myko\n")])])]),r("p",[e._v("Comparing with the project created as a simple KO in the developer's guide, you will notice an additional file "),r("code",[e._v("webpack.config.js")]),e._v(" in the created KO folder. This file will configure the webpack tool to build the source files into a JAVASCRIPT bundle, ready for KGrid activator.")]),e._v(" "),r("p",[e._v("Looking in to the folder of "),r("code",[e._v("/src")]),e._v(", you will find a few more files in addition to "),r("code",[e._v("index.js")]),e._v(".")]),e._v(" "),r("p",[r("code",[e._v("cvdscore.js")]),e._v(" is a Javascript file containing the core function of SCORE computation.")]),e._v(" "),r("p",[r("code",[e._v("beta.json")]),e._v(" and "),r("code",[e._v("coefficients.json")]),e._v(" are the data files containing coefficients for the SCORE models. They are referenced in "),r("code",[e._v("cvdscore.js")]),e._v(" using "),r("code",[e._v("require()")]),e._v(".")]),e._v(" "),r("p",[e._v("When we build the bundled KO, "),r("code",[e._v("index.js")]),e._v(" will be the main entry for "),r("code",[e._v("webpack")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"build-bundled-ko-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#build-bundled-ko-service"}},[e._v("#")]),e._v(" Build bundled KO Service")]),e._v(" "),r("p",[e._v("Similar with the simple KO, the bundled KO under development is basically a Javascript project which follows the development pattern of node.js/npm.")]),e._v(" "),r("p",[e._v("In our example template, "),r("code",[e._v("webpack")]),e._v(" is used to build the bundled script. We use default values for the webpack configuration wherever possible to keep it simple.")]),e._v(" "),r("p",[e._v("This shows the configuration file from the template.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("let path = require('path');\nmodule.exports = {\n\n  entry: './src/index.js',\n\n  output: {\n    library: \"score\",\n    path: path.resolve(__dirname, 'dist')\n  },\n\n  module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        exclude: /(node_modules|bower_components)/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: ['@babel/preset-env']\n          }\n        }\n      }\n    ]\n  },\n};\n")])])]),r("p",[e._v("By default, the "),r("code",[e._v("output.libraryTarget")]),e._v(" is set as 'var'. For bundling the KO for Nashorn Script Engine, only 'var', 'assign' and 'this' are valid options. By default, the output file is set as 'main.js' in the folder defined in "),r("code",[e._v("path")]),e._v(". In the example template, it will be "),r("code",[e._v("/dist")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Note library name in the output element "),r("em",[e._v('library: "score"')]),e._v(" must match the x-kgrid-activation element "),r("em",[e._v("entry: score")]),e._v(" found in the KGrid extensions of the "),r("RouterLink",{attrs:{to:"/tutorial/openapi/overview.html#extensions"}},[e._v("OpenAPI")]),e._v(" specification.")],1)]),e._v(" "),r("p",[e._v("For details on customization of the webpack config, please refer to "),r("a",{attrs:{href:"https://webpack.js.org/configuration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack Documentation"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("You need to change to the ko directory and run")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install\n")])])]),r("p",[e._v("Once "),r("code",[e._v("npm")]),e._v(" installs all dependencies, run")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm run build\n")])])]),r("p",[e._v("The build process will create a file "),r("code",[e._v("main.js")]),e._v(" in "),r("code",[e._v("/dist")]),e._v(" directory. "),r("code",[e._v("service.yaml")]),e._v(" is referring this file as the artifact for the service.")]),e._v(" "),r("h2",{attrs:{id:"activate-bundled-ko-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#activate-bundled-ko-service"}},[e._v("#")]),e._v(" Activate bundled KO Service")]),e._v(" "),r("p",[e._v("Now, the bundled KO is ready to be activated. The activation process is the same as described in "),r("RouterLink",{attrs:{to:"/developer/#start-a-local-grid"}},[e._v("the developer's guide")]),e._v(".")],1),e._v(" "),r("p",[e._v("Go back to the project directory, start the local grid by running")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("kgrid start\n")])])]),r("p",[e._v("Once activated, you can use Swagger Editor to try out the KO service. To get the url link, run")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("kgrid play ark:/"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("username"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/myko\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);