(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{o4NC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n("k1TG"),r=n("8o2o"),i=(n("q1tI"),n("7ljp")),l=n("hhGP"),o=(n("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/sql_templating.mdx"}});var c={_frontmatter:o},s=l.a;function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"sql-templating"},"SQL Templating"),Object(i.b)("h3",{id:"jinja-templates"},"Jinja Templates"),Object(i.b)("p",null,"SQL Lab and Explore supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://jinja.palletsprojects.com/en/2.11.x/"}),"Jinja templating")," in queries.\nTo enable templating, the ",Object(i.b)("inlineCode",{parentName:"p"},"ENABLE_TEMPLATE_PROCESSING")," feature flag needs to be enabled in\n",Object(i.b)("inlineCode",{parentName:"p"},"superset_config.py"),". When templating is enabled, python code can be embedded in virtual datasets and\nin Custom SQL in the filter and metric controls in Explore. By default, the following variables are\nmade available in the Jinja context:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"columns"),": columns available in the dataset"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"filter"),": filters applied in the query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from_dttm"),": start ",Object(i.b)("inlineCode",{parentName:"li"},"datetime")," value from the selected time range (",Object(i.b)("inlineCode",{parentName:"li"},"None")," if undefined)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to_dttm"),": end ",Object(i.b)("inlineCode",{parentName:"li"},"datetime")," value from the selected time range (",Object(i.b)("inlineCode",{parentName:"li"},"None")," if undefined)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"groupby"),": columns which to group by in the query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metrics"),": aggregate expressions in the query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"row_limit"),": row limit of the query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"row_offset"),": row offset of the query"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"time_column"),": temporal column of the query (",Object(i.b)("inlineCode",{parentName:"li"},"None")," if undefined)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"time_grain"),": selected time grain (",Object(i.b)("inlineCode",{parentName:"li"},"None")," if undefined)")),Object(i.b)("p",null,"For example, to add a time range to a virtual dataset, you can write the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT * from tbl where dttm_col > '{{ from_dttm }}' and dttm_col < '{{ to_dttm }}'\n")),Object(i.b)("p",null,"To add custom functionality to the Jinja context, you need to to to overload the default Jinja\ncontext in your environment by defining the ",Object(i.b)("inlineCode",{parentName:"p"},"JINJA_CONTEXT_ADDONS")," in your superset configuration\n(",Object(i.b)("inlineCode",{parentName:"p"},"superset_config.py"),"). Objects referenced in this dictionary are made available for users to use\nwhere the Jinja context is made available."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"JINJA_CONTEXT_ADDONS = {\n    'my_crazy_macro': lambda x: x*2,\n}\n")),Object(i.b)("p",null,"Besides default Jinja templating, SQL lab also supports self-defined template processor by setting\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOM_TEMPLATE_PROCESSORS")," in your superset configuration. The values in this dictionary\noverwrite the default Jinja template processors of the specified database engine. The example below\nconfigures a custom presto template processor which implements its own logic of processing macro\ntemplate with regex parsing. It uses the ",Object(i.b)("inlineCode",{parentName:"p"},"$")," style macro instead of ",Object(i.b)("inlineCode",{parentName:"p"},"{{ }}")," style in Jinja\ntemplating."),Object(i.b)("p",null,"By configuring it with ",Object(i.b)("inlineCode",{parentName:"p"},"CUSTOM_TEMPLATE_PROCESSORS"),", a SQL template on a presto database is\nprocessed by the custom one rather than the default one."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def DATE(\n    ts: datetime, day_offset: SupportsInt = 0, hour_offset: SupportsInt = 0\n) -> str:\n    """Current day as a string."""\n    day_offset, hour_offset = int(day_offset), int(hour_offset)\n    offset_day = (ts + timedelta(days=day_offset, hours=hour_offset)).date()\n    return str(offset_day)\n\nclass CustomPrestoTemplateProcessor(PrestoTemplateProcessor):\n    """A custom presto template processor."""\n\n    engine = "presto"\n\n    def process_template(self, sql: str, **kwargs) -> str:\n        """Processes a sql template with $ style macro using regex."""\n        # Add custom macros functions.\n        macros = {\n            "DATE": partial(DATE, datetime.utcnow())\n        }  # type: Dict[str, Any]\n        # Update with macros defined in context and kwargs.\n        macros.update(self.context)\n        macros.update(kwargs)\n\n        def replacer(match):\n            """Expand $ style macros with corresponding function calls."""\n            macro_name, args_str = match.groups()\n            args = [a.strip() for a in args_str.split(",")]\n            if args == [""]:\n                args = []\n            f = macros[macro_name[1:]]\n            return f(*args)\n\n        macro_names = ["$" + name for name in macros.keys()]\n        pattern = r"(%s)\\s*\\(([^()]*)\\)" % "|".join(map(re.escape, macro_names))\n        return re.sub(pattern, replacer, sql)\n\nCUSTOM_TEMPLATE_PROCESSORS = {\n    CustomPrestoTemplateProcessor.engine: CustomPrestoTemplateProcessor\n}\n')),Object(i.b)("p",null,"SQL Lab also includes a live query validation feature with pluggable backends. You can configure\nwhich validation implementation is used with which database engine by adding a block like the\nfollowing to your configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"FEATURE_FLAGS = {\n    'SQL_VALIDATORS_BY_ENGINE': {\n        'presto': 'PrestoDBSQLValidator',\n    }\n}\n")),Object(i.b)("p",null,"The available validators and names can be found in\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apache/superset/tree/master/superset/sql_validators"}),"sql_validators"),"."),Object(i.b)("h3",{id:"available-macros"},"Available Macros"),Object(i.b)("p",null,"In this section, we'll walkthrough the  pre-defined Jinja macros in Superset."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Current Username")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"{{ current_username() }}")," macro returns the username of the currently logged in user."),Object(i.b)("p",null,"If you have caching enabled in your Superset configuration, then by defaul the the ",Object(i.b)("inlineCode",{parentName:"p"},"username")," value will be used\nby Superset when calculating the cache key. A cache key is a unique identifer that determines if there's a\ncache hit in the future and Superset can retrieve cached data."),Object(i.b)("p",null,"You can disable the inclusion of the ",Object(i.b)("inlineCode",{parentName:"p"},"username")," value in the calculation of the\ncache key by adding the following parameter to your Jinja code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ current_username(add_to_cache_keys=False) }}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Current User ID")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"{{ current_user_id()}}")," macro returns the user_id of the currently logged in user."),Object(i.b)("p",null,"If you have caching enabled in your Superset configuration, then by defaul the the ",Object(i.b)("inlineCode",{parentName:"p"},"user_id")," value will be used\nby Superset when calculating the cache key. A cache key is a unique identifer that determines if there's a\ncache hit in the future and Superset can retrieve cached data."),Object(i.b)("p",null,"You can disable the inclusion of the ",Object(i.b)("inlineCode",{parentName:"p"},"user_id")," value in the calculation of the\ncache key by adding the following parameter to your Jinja code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{{ current_user_id(add_to_cache_keys=False) }}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Custom URL Parameters")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"{{ url_param('custom_variable') }}")," macro lets you define arbitrary URL\nparameters and reference them in your SQL code."),Object(i.b)("p",null,"Here's a concrete example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You write the following query in SQL Lab:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT count(*)\nFROM ORDERS\nWHERE country_code = '{{ url_param('countrycode') }}'\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You're hosting Superset at the domain ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.example.com"}),"www.example.com")," and you send your\ncoworker in Spain the following SQL Lab URL ",Object(i.b)("inlineCode",{parentName:"p"},"www.example.com/superset/sqllab?countrycode=ES"),"\nand your coworker in the USA the following SQL Lab URL ",Object(i.b)("inlineCode",{parentName:"p"},"www.example.com/superset/sqllab?countrycode=US"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For your coworker in Spain, the SQL Lab query will be rendered as:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT count(*)\nFROM ORDERS\nWHERE country_code = 'ES'\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For your coworker in the USA, the SQL Lab query will be rendered as:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT count(*)\nFROM ORDERS\nWHERE country_code = 'US'\n")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Explicitly Including Values in Cache Key")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"{{ cache_key_wrapper() }}")," function explicitly instructs Superset to add a value to the\naccumulated list of values used in the the calculation of the cache key."),Object(i.b)("p",null,"This function is only needed when you want to wrap your own custom function return values\nin the cache key. You can gain more context\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apache/superset/blob/efd70077014cbed62e493372d33a2af5237eaadf/superset/jinja_context.py#L133-L148"}),"here"),"."),Object(i.b)("p",null,"Note that this function powers the caching of the ",Object(i.b)("inlineCode",{parentName:"p"},"user_id")," and ",Object(i.b)("inlineCode",{parentName:"p"},"username")," values\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"current_user_id()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"current_username()")," function calls (if you have caching enabled)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter Values")),Object(i.b)("p",null,"You can retrieve the value for a specific filter as a list using ",Object(i.b)("inlineCode",{parentName:"p"},"{{ filter_values() }}"),"."),Object(i.b)("p",null,"This is useful if:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"you want to use a filter component to filter a query where the name of filter component column doesn't match the one in the select statement"),Object(i.b)("li",{parentName:"ul"},"you want to have the ability for filter inside the main query for performance purposes")),Object(i.b)("p",null,"Here's a concrete example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"SELECT action, count(*) as times\nFROM logs\nWHERE\n    action in ({{ \"'\" + \"','\".join(filter_values('action_type')) + \"'\" }})\nGROUP BY action\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filters for a Specific Column")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"{{ get_filters() }}")," macro returns the filters applied to a given column. In addition to\nreturning the values (similar to how ",Object(i.b)("inlineCode",{parentName:"p"},"filter_values()")," does), the ",Object(i.b)("inlineCode",{parentName:"p"},"get_filters()")," macro\nreturns the operator specified in the Explore UI."),Object(i.b)("p",null," This is useful if:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"you want to handle more than the IN operator in your SQL clause"),Object(i.b)("li",{parentName:"ul"},"you want to handle generating custom SQL conditions for a filter"),Object(i.b)("li",{parentName:"ul"},"you want to have the ability to filter inside the main query for speed purposes")),Object(i.b)("p",null,"Here's a concrete example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{})," WITH RECURSIVE\n    superiors(employee_id, manager_id, full_name, level, lineage) AS (\n    SELECT\n        employee_id,\n        manager_id,\n        full_name,\n    1 as level,\n    employee_id as lineage\n    FROM\n        employees\n    WHERE\n    1=1\n\n    {# Render a blank line #}\n    {%- for filter in get_filters('full_name', remove_filter=True) -%}\n\n    {%- if filter.get('op') == 'IN' -%}\n        AND\n        full_name IN ( {{ \"'\" + \"', '\".join(filter.get('val')) + \"'\" }} )\n    {%- endif -%}\n\n    {%- if filter.get('op') == 'LIKE' -%}\n        AND\n        full_name LIKE {{ \"'\" + filter.get('val') + \"'\" }}\n    {%- endif -%}\n\n    {%- endfor -%}\n    UNION ALL\n        SELECT\n            e.employee_id,\n            e.manager_id,\n            e.full_name,\n    s.level + 1 as level,\n    s.lineage\n        FROM\n            employees e,\n        superiors s\n        WHERE s.manager_id = e.employee_id\n    )\n\n    SELECT\n    employee_id, manager_id, full_name, level, lineage\n    FROM\n    superiors\n    order by lineage, level\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/sql_templating.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-sql-templating-mdx-fe77bf64121fb6ed7c2d.js.map