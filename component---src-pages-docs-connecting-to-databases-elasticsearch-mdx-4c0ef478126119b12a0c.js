(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{bBR2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a("wx14"),s=a("zLVn"),c=(a("q1tI"),a("7ljp")),r=a("hhGP"),o=(a("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Connecting to Databases/elasticsearch.mdx"}});var i={_frontmatter:o},l=r.a;function b(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)(l,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"elasticsearch"},"Elasticsearch"),Object(c.b)("p",null,"The recommended connector library for Elasticsearch is\n",Object(c.b)("a",{href:"https://github.com/preset-io/elasticsearch-dbapi",parentName:"p"},"elasticsearch-dbapi"),"."),Object(c.b)("p",null,"The connection string for Elasticsearch looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"elasticsearch+http://{user}:{password}@{host}:9200/\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Using HTTPS")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"elasticsearch+https://{user}:{password}@{host}:9200/\n")),Object(c.b)("p",null,"Elasticsearch as a default limit of 10000 rows, so you can increase this limit on your cluster or\nset Superset’s row limit on config"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"ROW_LIMIT = 10000\n")),Object(c.b)("p",null,"You can query multiple indices on SQL Lab for example"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'SELECT timestamp, agent FROM "logstash"\n')),Object(c.b)("p",null,"But, to use visualizations for multiple indices you need to create an alias index on your cluster"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'POST /_aliases\n{\n    "actions" : [\n        { "add" : { "index" : "logstash-**", "alias" : "logstash_all" } }\n    ]\n}\n')),Object(c.b)("p",null,"Then register your table with the alias name logstasg_all"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Connecting to Databases/elasticsearch.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-connecting-to-databases-elasticsearch-mdx-4c0ef478126119b12a0c.js.map