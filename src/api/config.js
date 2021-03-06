﻿/*! Copyright 2014 MedicaSoft LLC USA and Info World SRL
Licensed under the Apache License, Version 2.0 the "License";
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var port = 8085;
var baseUrl = "http://localhost:" + port + "/";
if(!/\/$/.test(baseUrl)) //ensure it ends with '/' 
    baseUrl += '/';
    
module.exports = {
    connString: "/var/run/postgresql maildb",
    port: port,
    baseUrl: baseUrl,

    //paging for resource search 
    pageSize: 10
};
