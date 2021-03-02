(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{wllN:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("k1TG"),o=a("8o2o"),r=(a("q1tI"),a("7ljp")),i=a("hhGP"),s=(a("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Creating Charts and Dashboards/index.mdx"}});var c={_frontmatter:s},l=i.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"creating-your-first-dashboard"},"Creating Your First Dashboard"),Object(r.b)("p",null,"This section is focused on documentation for end-users who will be using Superset\nfor the data analysis and exploration workflow\n(data analysts, business analysts, data\nscientists, etc). In addition to this site, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://preset.io/"}),"Preset.io")," maintains an updated set of end-user\ndocumentation at ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.preset.io/"}),"docs.preset.io"),"."),Object(r.b)("p",null,"This tutorial targets someone who wants to create charts and dashboards in Superset. We’ll show you\nhow to connect Superset to a new database and configure a table in that database for analysis.\nYou’ll also explore the data you’ve exposed and add a visualization to a dashboard so that you get a\nfeel for the end-to-end user experience."),Object(r.b)("h3",{id:"connecting-to-a-new-database"},"Connecting to a new database"),Object(r.b)("p",null,"Superset itself doesn't have a storage layer to store your data but instead pairs with\nyour existing SQL-speaking database or data store."),Object(r.b)("p",null,"First things first, we need to add the connection credentials to your database to be able\nto query and visualize data from it. If you're using Superset locally via\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/installation/installing-superset-using-docker-compose"}),"Docker compose"),", you can\nskip this step because a Postgres database, named ",Object(r.b)("strong",{parentName:"p"},"examples"),", is included and\npre-configured in Superset for you."),Object(r.b)("p",null,"Under the ",Object(r.b)("strong",{parentName:"p"},"Data")," menu, select the ",Object(r.b)("em",{parentName:"p"},"Databases")," option:"),Object(r.b)("img",{src:"/images/tutorial_01_sources_database.png"})," "," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"Next, click the green ",Object(r.b)("strong",{parentName:"p"},"+ Database")," button in the top right corner:"),Object(r.b)("img",{src:"/images/tutorial_02_add_database.png"})," "," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"You can configure a number of advanced options in this window, but for this walkthrough you only\nneed to specify two things (the database name and SQLAlchemy URI):"),Object(r.b)("img",{src:"/images/tutorial_03_database_name.png"}),Object(r.b)("p",null,"As noted in the text below\nthe URI, you should refer to the SQLAlchemy documentation on\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.sqlalchemy.org/en/12/core/engines.html#database-urls"}),"creating new connection URIs"),"\nfor your target database."),Object(r.b)("p",null,"Click the ",Object(r.b)("strong",{parentName:"p"},"Test Connection")," button to confirm things work end to end. If the connection looks good, save the configuration\nby clicking the ",Object(r.b)("strong",{parentName:"p"},"Add")," button in the bottom right corner of the modal window:"),Object(r.b)("img",{src:"/images/tutorial_04_add_button.png"}),Object(r.b)("p",null,"Congratulations, you've just added a new data source in Superset!"),Object(r.b)("h3",{id:"registering-a-new-table"},"Registering a new table"),Object(r.b)("p",null,"Now that you’ve configured a data source, you can select specific tables (called ",Object(r.b)("strong",{parentName:"p"},"Datasets")," in Superset)\nthat you want exposed in Superset for querying."),Object(r.b)("p",null,"Navigate to ",Object(r.b)("strong",{parentName:"p"},"Data ‣ Datasets")," and select the ",Object(r.b)("strong",{parentName:"p"},"+ Dataset")," button in the top right corner."),Object(r.b)("img",{src:"/images/tutorial_08_sources_tables.png"}),Object(r.b)("p",null,"A modal window should pop up in front of you. Select your ",Object(r.b)("strong",{parentName:"p"},"Database"),",\n",Object(r.b)("strong",{parentName:"p"},"Schema"),", and ",Object(r.b)("strong",{parentName:"p"},"Table")," using the drop downs that appear. In the following example,\nwe register the ",Object(r.b)("strong",{parentName:"p"},"cleaned_sales_data")," table from the ",Object(r.b)("strong",{parentName:"p"},"examples")," database."),Object(r.b)("img",{src:"/images/tutorial_09_add_new_table.png"}),Object(r.b)("p",null,"To finish, click the ",Object(r.b)("strong",{parentName:"p"},"Add")," button in the bottom right corner. You should now see your dataset in the list of datasets."),Object(r.b)("h3",{id:"customizing-column-properties"},"Customizing column properties"),Object(r.b)("p",null,"Now that you've registered your dataset, you can configure column properties\nfor how the column should be treated in the Explore workflow:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Is the column temporal? (should it be used for slicing & dicing in time series charts?)"),Object(r.b)("li",{parentName:"ul"},"Should the column be filterable?"),Object(r.b)("li",{parentName:"ul"},"Is the column dimensional?"),Object(r.b)("li",{parentName:"ul"},"If it's a datetime column, how should Superset parse\nthe datetime format? (using the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601 string pattern"),")")),Object(r.b)("img",{src:"/images/tutorial_column_properties.png"}),Object(r.b)("h3",{id:"superset-semantic-layer"},"Superset semantic layer"),Object(r.b)("p",null,"Superset has a thin semantic layer that adds many quality of life improvements for analysts.\nThe Superset semantic layer can store 2 types of computed data:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Virtual metrics: you can write SQL queries that aggregate values\nfrom multiple column (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"SUM(recovered) / SUM(confirmed)"),") and make them\navailable as columns for (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"recovery_rate"),") visualization in Explore.\nAgggregate functions are allowed and encouraged for metrics.")),Object(r.b)("img",{src:"/images/tutorial_sql_metric.png"}),Object(r.b)("p",null,"You can also certify metrics if you'd like for your team in this view."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Virtual calculated columns: you can write SQL queries that\ncustomize the appearance and behavior\nof a specific column (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"CAST(recovery_rate) as float"),").\nAggregate functions aren't allowed in calculated columns.")),Object(r.b)("img",{src:"/images/tutorial_calculated_column.png"}),Object(r.b)("h3",{id:"creating-charts-in-explore-view"},"Creating charts in Explore view"),Object(r.b)("p",null,"Superset has 2 main interfaces for exploring data:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Explore"),": no-code viz builder. Select your dataset, select the chart,\ncustomize the appearance, and publish."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"SQL Lab"),": SQL IDE for cleaning, joining, and preparing data for Explore workflow")),Object(r.b)("p",null,"We'll focus on the Explore view for creating charts right now.\nTo start the Explore workflow from the ",Object(r.b)("strong",{parentName:"p"},"Datasets")," tab, start by clicking the name\nof the dataset that will be powering your chart."),Object(r.b)("img",{src:"/images/tutorial_launch_explore.png"}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("p",null,"You're now presented with a powerful workflow for exploring data and iterating on charts."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Dataset")," view on the left-hand side has a list of columns and metrics,\nscoped to the current dataset you selected."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Data")," preview below the chart area also gives you helpful data context."),Object(r.b)("li",{parentName:"ul"},"Using the ",Object(r.b)("strong",{parentName:"li"},"Data")," tab and ",Object(r.b)("strong",{parentName:"li"},"Customize")," tabs, you can change the visualization type,\nselect the temporal column, select the metric to group by, and customize\nthe aesthetics of the chart.")),Object(r.b)("p",null,"As you customize your chart using drop-down menus, make sure to click the ",Object(r.b)("strong",{parentName:"p"},"Run")," button\nto get visual feedback."),Object(r.b)("img",{src:"/images/tutorial_explore_run.jpg"}),Object(r.b)("p",null,"In the following screenshot, we craft a grouped Time-series Bar Chart to visualize\nour quarterly sales data by product line just be clicking options in drop-down menus."),Object(r.b)("img",{src:"/images/tutorial_explore_settings.jpg"}),Object(r.b)("h3",{id:"creating-a-slice-and-dashboard"},"Creating a slice and dashboard"),Object(r.b)("p",null,"To save your chart, first click the ",Object(r.b)("strong",{parentName:"p"},"Save")," button. You can either:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Save your chart and add it to an existing dashboard"),Object(r.b)("li",{parentName:"ul"},"Save your chart and add it to a new dashboard")),Object(r.b)("p",null,'In the following screenshot, we save the chart to a new "Superset Duper Sales Dashboard":'),Object(r.b)("img",{src:"/images/tutorial_save_slice.png"}),Object(r.b)("p",null,"To publish, click ",Object(r.b)("strong",{parentName:"p"},"Save and goto Dashboard"),"."),Object(r.b)("p",null,"Behind the scenes, Superset will create a slice and store all the information needed\nto create your chart in its thin data layer\n(the query, chart type, options selected, name, etc)."),Object(r.b)("img",{src:"/images/tutorial_first_dashboard.png"}),Object(r.b)("p",null," To resize the chart, start by clicking the pencil button in the top right corner."),Object(r.b)("img",{src:"/images/tutorial_pencil_edit.png"}),Object(r.b)("p",null,"Then, click and drag the bottom right corner of the chart until the chart layout snaps\ninto a position you like onto the underlying grid."),Object(r.b)("img",{src:"/images/tutorial_chart_resize.png"}),Object(r.b)("p",null," Click ",Object(r.b)("strong",{parentName:"p"},"Save")," to persist the changes."),Object(r.b)("p",null,"Congrats! You’ve successfully linked, analyzed, and visualized data in Superset. There are a wealth\nof other table configuration and visualization options, so please start exploring and creating\nslices and dashboards of your own"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Creating Charts and Dashboards/index.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-creating-charts-and-dashboards-index-mdx-55eb11b845bacfc163ce.js.map