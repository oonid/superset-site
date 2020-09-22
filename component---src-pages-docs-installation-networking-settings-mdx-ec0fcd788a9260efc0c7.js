(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{eJLV:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return d}));var a=t("wx14"),o=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("hhGP"),l=(t("qKvR"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/networking_settings.mdx"}});var s={_frontmatter:l},b=r.a;function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(b,Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"additional-networking-settings"},"Additional Networking Settings"),Object(i.b)("h3",{id:"cors"},"CORS"),Object(i.b)("p",null,"To configure CORS, or cross-origin research sharing, the following dependency must be installed:"),Object(i.b)("pre",null,Object(i.b)("code",{className:"language-python",parentName:"pre"},"pip install apache-superset[cors]\n")),Object(i.b)("p",null,"The following keys in ",Object(i.b)("inlineCode",{parentName:"p"},"superset_config.py")," can be specified to configure CORS:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ENABLE_CORS"),": Must be set to ",Object(i.b)("inlineCode",{parentName:"li"},"True")," in order to enable CORS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CORS_OPTIONS"),": options passed to Flask-CORS\n(",Object(i.b)("a",{href:"https://flask-cors.corydolphin.com/en/latest/api.html#extension",parentName:"li"},"documentation"),")")),Object(i.b)("h3",{id:"domain-sharding"},"Domain Sharding"),Object(i.b)("p",null,"Chrome allows up to 6 open connections per domain at a time. When there are more than 6 slices in\ndashboard, a lot of time fetch requests are queued up and wait for next available socket.\n",Object(i.b)("a",{href:"https://github.com/apache/incubator-superset/pull/5039",parentName:"p"},"PR 5039")," adds domain sharding to Superset,\nand this feature will be enabled by configuration only (by default Superset doesn’t allow\ncross-domain request)."),Object(i.b)("p",null,"Add the following setting in your ",Object(i.b)("inlineCode",{parentName:"p"},"superset_config.py")," file:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SUPERSET_WEBSERVER_DOMAINS"),": list of allowed hostnames for domain shareding feature.")),Object(i.b)("h3",{id:"middleware"},"Middleware"),Object(i.b)("p",null,"Superset allows you to add your own middleware. To add your own middleware, update the\n",Object(i.b)("inlineCode",{parentName:"p"},"ADDITIONAL_MIDDLEWARE")," key in your ",Object(i.b)("inlineCode",{parentName:"p"},"superset_config.py"),". ",Object(i.b)("inlineCode",{parentName:"p"},"ADDITIONAL_MIDDLEWARE")," should be a list\nof your additional middleware classes."),Object(i.b)("p",null,"For example, to use ",Object(i.b)("inlineCode",{parentName:"p"},"AUTH_REMOTE_USER")," from behind a proxy server like nginx, you have to add a\nsimple middleware class to add the value of ",Object(i.b)("inlineCode",{parentName:"p"},"HTTP_X_PROXY_REMOTE_USER")," (or any other custom header\nfrom the proxy) to Gunicorn’s ",Object(i.b)("inlineCode",{parentName:"p"},"REMOTE_USER")," environment variable:"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/networking_settings.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-networking-settings-mdx-ec0fcd788a9260efc0c7.js.map