(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(t,e,a){t.exports=a.p+"assets/img/ko-layout.f0897b6c.png"},234:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"knowledge-object-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knowledge-object-overview"}},[t._v("#")]),t._v(" Knowledge Object Overview")]),t._v(" "),s("p",[t._v("Conceptually, a knowledge object represents computable knowledge as both a resource and a service. That is, it contains description of what it does, and the code to do it. Also, in order to make the object findable, accessible, interoperable, and reusable, the KO has enough metadata to describe itself as both resource and service.")]),t._v(" "),s("p",[t._v("Here's a picture....")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("img",{attrs:{src:a(206),alt:"KO Layout"}})]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("Let's take a look at what's inside a knowledge object ....")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("├── hello-world\n    ├── metadata.json\n    ├── service.yaml\n    └── welcome.js\n")])])]),s("h2",{attrs:{id:"knowledge-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#knowledge-object"}},[t._v("#")]),t._v(" Knowledge Object")]),t._v(" "),s("h3",{attrs:{id:"metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" Metadata")]),t._v(" "),s("p",[t._v("In the packaged object metadata is kept in a "),s("code",[t._v("json")]),t._v(" file.")]),t._v(" "),s("p",[t._v("Metadata includes an identifier, minimal description data, and required knowledge object properties from the "),s("a",{attrs:{href:"koio"}},[t._v("Knowledge Object Implementation Ontology (KOIO)")])]),t._v(" "),s("p",[s("code",[t._v("hello-world/metadata.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"koio:KnowledgeObject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"identifier"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ark:/hello/world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World Title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contributors"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kgrid Team"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test Hello World "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hasServiceSpecification"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service.yaml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hasDeploymentSpecification"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy.yaml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hasPayload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"welcome.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@context"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://kgrid.org/koio/contexts/knowledgeobject.jsonld"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Descriptive metadata elements like "),s("code",[t._v("title")]),t._v(" or "),s("code",[t._v("description")]),t._v(", administrative metadata like "),s("code",[t._v("identifier")]),t._v(", and technical metadata like the "),s("code",[t._v("koio:KnowledgeObject")]),t._v(" the element are described in the section "),s("RouterLink",{attrs:{to:"/tutorial/ko/moreaboutmetadata.html"}},[t._v("More about Metadata")]),t._v(". We recommend using standard "),s("em",[t._v("dcterms")]),t._v(" metadata elements, or similar. Some items may be required (see "),s("RouterLink",{attrs:{to:"/tutorial/ko/moreaboutmetadata.html"}},[t._v("KO Metadata standard")]),t._v("). You may add additional descriptive or domain specific metadata elements as needed. We recommend you use standard vocabularies and express them in the "),s("code",[t._v("context")]),t._v(" element so as to enable metadata use in linked data scenarios.")],1)])}),[],!1,null,null,null);e.default=r.exports}}]);