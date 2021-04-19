(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{389:function(t,s,e){"use strict";e.r(s);var a=e(51),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jumblr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr"}},[t._v("#")]),t._v(" Jumblr")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("At this time, all zero-knowledge transaction and Jumblr functionality on the main KMD chain is disabled.")]),t._v(" "),e("p",[t._v("Other Smart Chains in the Komodo ecosystem offer zero-knowledge transaction functionality. However, no Smart Chain currently offers Jumblr, and therefore this documentation is currently deprecated.")]),t._v(" "),e("p",[t._v("Please check with the developers of your desired Smart Chain to learn more.")])]),t._v(" "),e("p",[t._v("The following RPC calls interact with the "),e("code",[t._v("komodod")]),t._v(" software, and are made available through the "),e("code",[t._v("komodo-cli")]),t._v(" software.")]),t._v(" "),e("h2",{attrs:{id:"basic-instructions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions"}},[t._v("#")]),t._v(" Basic Instructions")]),t._v(" "),e("ul",[e("li",[t._v("Install Komodo following the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/installing-from-source.html#linux"}},[t._v("installation guides")]),t._v(" and change into the "),e("code",[t._v("komodod")]),t._v(" subdirectory using:")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/komodo/src\n")])])]),e("ul",[e("li",[t._v("Start the daemon:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodod "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Designate a KMD address with at least 10.024 KMD funds:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_deposit KMD_address\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The jumblr process continues until there are less than ~ 10.024 KMD in the deposit address.")])]),t._v(" "),e("ul",[e("li",[t._v("Designate a destination address for your funds. This should be a transparent address that you are keeping secret:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("komodo-cli jumblr_secret destination_KMD_address\n")])])]),e("ul",[e("li",[t._v("Leave your node running until the balance in your first address reaches below 10.024 KMD and the destination address receives the correct amount.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Jumblr is created to be resistant against time-based analysis. Because of this, Jumblr is purposefully designed not to be fast. You will need to leave your node running for several hours for the process to finish.")])]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Designate your deposit address.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])]),e("p",[t._v("Designate your secret destination address.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_secret RS46GZ5iTkt2exdauQG3JJ8fdnZNJUvAc1\n")])])]),e("h2",{attrs:{id:"jumblr-deposit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-deposit"}},[t._v("#")]),t._v(" jumblr_deposit")]),t._v(" "),e("p",[e("strong",[t._v('jumblr_deposit "depositaddress"')])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("jubmlr_deposit")]),t._v(" method indicates the address from which Jumblr should withdraw funds. There should be at least 10.024 KMD in this address. Jumblr will withdraw funds in increments of 10, 100, or 7770 KMD.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("While shielded z_address technology is available on all KMD-based Smart Chains, the Jumblr engine and methods are only available on the KMD mainnet.")])]),t._v(" "),e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v('"depositaddress"')]),t._v(" "),e("td",[t._v("(string, required)")]),t._v(" "),e("td",[t._v("the address from which Jumblr will withdraw funds")])])])]),t._v(" "),e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"jumblr-pause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-pause"}},[t._v("#")]),t._v(" jumblr_pause")]),t._v(" "),e("p",[e("strong",[t._v("jumblr_pause")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("jumblr_pause")]),t._v(" method instructs Jumblr to temporarily pause the privacy-shielding process.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See also "),e("b",[t._v("jumblr_resume")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"arguments-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_pause\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"jumblr-resume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-resume"}},[t._v("#")]),t._v(" jumblr_resume")]),t._v(" "),e("p",[e("strong",[t._v("jumblr_resume")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("jumblr_resume")]),t._v(" method instructs Jumblr to resume the privacy-shielding process.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("See also "),e("b",[t._v("jumblr_pause")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"arguments-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumblr_resume\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"jumblr-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-secret"}},[t._v("#")]),t._v(" jumblr_secret")]),t._v(" "),e("p",[e("strong",[t._v('jumblr_secret "secretaddress"')])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("jumblr_secret")]),t._v(" method indicates to Jumblr the final t destination address. This should be a separate t address that has no connection to the "),e("code",[t._v("wallet.dat")]),t._v(" file of your "),e("code",[t._v("jumblr_deposit")]),t._v(" address. Ideally, you should only access the final "),e("code",[t._v("jumblr_secret")]),t._v(" address via a separate node, and with other layers of privacy (VPN, Tor, etc.).")]),t._v(" "),e("h3",{attrs:{id:"arguments-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v('"secretaddress"')]),t._v(" "),e("td",[t._v("(string, required)")]),t._v(" "),e("td",[t._v("the destination transparent address")])])])]),t._v(" "),e("h3",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("(none)")]),t._v(" "),e("td"),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"examples-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" 📌 Examples")]),t._v(" "),e("p",[t._v("Command:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./komodo-cli jumbr_secret "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RCpMUZwxc3pWsgip5aj3Sy1cKkh86P3Tns"')]),t._v("\n")])])]),e("collapse-text",{attrs:{hidden:"",title:"Response"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);