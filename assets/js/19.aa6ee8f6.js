(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{224:function(t,r,e){"use strict";e.r(r);var a=e(0),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kgrid-quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-quick-start"}},[t._v("#")]),t._v(" KGrid Quick Start")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://circleci.com/gh/kgrid/guides",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://circleci.com/gh/kgrid/guides.svg?style=svg",alt:"CircleCI"}}),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("strong",[t._v("Confirm "),e("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node and NPM (version 10+)"),e("OutboundLink")],1),t._v(" are installed, and "),e("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 8+ JDK"),e("OutboundLink")],1),t._v(" is installed.")])])]),t._v(" "),e("h2",{attrs:{id:"step-1-install-the-kgrid-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-install-the-kgrid-cli"}},[t._v("#")]),t._v(" Step 1 - Install the "),e("a",{attrs:{href:"https://kgrid.org/kgrid-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("KGrid CLI"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @kgrid/cli\n")])])]),e("h2",{attrs:{id:"step-2-install-a-micro-grid-in-your-project-directory-kgrid-workspace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-install-a-micro-grid-in-your-project-directory-kgrid-workspace"}},[t._v("#")]),t._v(" Step 2 - Install a micro-grid in your project directory(KGrid workspace)")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" myproject\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myproject\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kgrid setup\n")])])]),e("p",[t._v("The terminal might show the following messages:")]),t._v(" "),e("blockquote",[e("p",[t._v("KGrid CLI v0.4.0")]),t._v(" "),e("p",[t._v("Setting up kgrid at /Users/pboisver/dev/foof/.kgrid")]),t._v(" "),e("p",[t._v("Downloading kgrid components... done")]),t._v(" "),e("p",[t._v("kgrid setup complete")])]),t._v(" "),e("h2",{attrs:{id:"step-3-start-a-local-grid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-start-a-local-grid"}},[t._v("#")]),t._v(" Step 3 - Start a local grid")]),t._v(" "),e("p",[t._v("Start KGrid & verify in the browser that the activator and library are running")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" kgrid start\n")])])]),e("p",[t._v("The terminal might show the following messages:")]),t._v(" "),e("blockquote",[e("p",[t._v("java -jar .../kgrid-library-1.2.3.jar ...  --server.port=8081")]),t._v(" "),e("p",[t._v("java -jar .../kgrid-activator-1.1.5.jar ... --server.port=8080")]),t._v(" "),e("p",[t._v("library: You have the latest version.")]),t._v(" "),e("p",[t._v("Starting KGrid library...")]),t._v(" "),e("p",[t._v("activator: You have the latest version.>")]),t._v(" "),e("p",[t._v("Starting KGrid activator...")]),t._v(" "),e("p",[t._v("...")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("You can stop the local micro-grid with "),e("code",[t._v("ctrl-C")]),t._v(" or open an additional terminal tab or window to continue.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Once the Library ("),e("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8081"),e("OutboundLink")],1),t._v(") and Activator ("),e("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),e("OutboundLink")],1),t._v(") are running you can open a browser window verify that both are running")]),t._v(" "),e("p",[t._v("The Library will be empty and the Activator should show an empty KO list, "),e("code",[t._v("{}")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"what-s-next"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),e("p",[t._v("If you'd like to load existing Knowledge Objects to the Activator or Library, KGrid team has developed several collections of KOs you can try:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kgrid-objects.github.io/example-collection/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example Collection"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://kgrid-objects.github.io/cpic-collection/deployment/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CPIC Collection"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("More information on KO collections can be found at "),e("a",{attrs:{href:"https://kgrid-objects.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kgrid-objects.github.io/"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("If you'd like to create a new Knowledge Object, please refer to "),e("a",{attrs:{href:"https://kgrid.org/guides/developer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Developer's Guide"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);