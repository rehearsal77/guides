(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{232:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ko-calling-other-kos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ko-calling-other-kos"}},[e._v("#")]),e._v(" KO calling other KOs")]),e._v(" "),a("p",[e._v("An executive Knowledge Object can call the functions from other knowledge Objects, orchestrating the data flow and process among these KOs.")]),e._v(" "),a("p",[e._v("In this tutorial, we are demonstrating the concept of the executive object. The example KO is  for Nashorn script engine, which is the script engine used in the reference implementation of KGrid Activator.")]),e._v(" "),a("p",[e._v("To do so, you will need to use Nashorn context to retrieve the executor from the dependent KOs.")]),e._v(" "),a("h2",{attrs:{id:"context-of-nashhorn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-of-nashhorn"}},[e._v("#")]),e._v(" Context of Nashhorn")]),e._v(" "),a("p",[e._v("Nashorn script Engine has "),a("code",[e._v("context")]),e._v(" where the objects and functions are stored. After the KOs are activated, each KO executor can be accessed in the context.")]),e._v(" "),a("h2",{attrs:{id:"get-the-executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-executor"}},[e._v("#")]),e._v(" Get the executor")]),e._v(" "),a("p",[e._v("In the script of the executive object, the following code will retrieve the executor for the KO of "),a("code",[e._v("ark:/99999/helloworld/")]),e._v(". You will replace this ARK id with the Ark ID of the KO you'd like to call.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" executor "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"99999-helloworld/welcome"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h2",{attrs:{id:"pass-in-the-inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pass-in-the-inputs"}},[e._v("#")]),e._v(" Pass in the inputs")]),e._v(" "),a("p",[e._v("The executive object should have known the input schema for the KOs it is calling. It will construct the inputs for each child KO and pass to the respective KO's executor as argument.")]),e._v(" "),a("p",[e._v("As shown below, "),a("code",[e._v("obj")]),e._v(" is the input for "),a("code",[e._v("executor")])]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" executor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("h2",{attrs:{id:"work-with-the-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-with-the-result"}},[e._v("#")]),e._v(" Work with the result")]),e._v(" "),a("p",[e._v("As shown in the above code, the result returned from the child KOs will be aggregated by the executive object. The results can then be used in the consecutive codes in the executive object. The Executive object will eventually return its own response to the service request.")]),e._v(" "),a("h2",{attrs:{id:"an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-example"}},[e._v("#")]),e._v(" An example")]),e._v(" "),a("p",[e._v("KGRID CLI includes an example template so that you can use "),a("code",[e._v("kgrid create")]),e._v(" to create an executive object to try it. It will call the simple KO you created during going through the developer's guide.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("  kgrid create newko --executive\n")])])]),a("p",[e._v("After "),a("code",[e._v("newko")]),e._v(" is created, change to the directory of the ko folder, modify the file "),a("code",[e._v("/src/index.js")]),e._v(" to get the executor for the simple KO you created.")]),e._v(" "),a("p",[e._v("You can now try the executive object in your local activator.")]),e._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),a("p",[e._v("The section shows the concept of 'Executive Object' which orchestrating and calling other KOs. For different implementations of Activator, the actual code structure and syntax for constructing the Executive Object will be different.")])])}),[],!1,null,null,null);t.default=r.exports}}]);