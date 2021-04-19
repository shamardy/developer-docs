(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{480:function(t,a,e){"use strict";e.r(a);var s=e(51),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installing-atomicdex-software-mm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-atomicdex-software-mm2"}},[t._v("#")]),t._v(" Installing AtomicDEX Software (MM2)")]),t._v(" "),e("h3",{attrs:{id:"minimum-requirements-for-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements-for-installation"}},[t._v("#")]),t._v(" Minimum Requirements for Installation")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("MacOS, Windows (see note below), and Linux (see note below)")])]),t._v(" "),e("li",[e("p",[t._v("64-bit (see note below for 32-bit)")])]),t._v(" "),e("li",[e("p",[t._v("Minimum 2GB of free RAM")])]),t._v(" "),e("li",[e("p",[t._v("Normal user account with admin/root privileges")])])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("If you would prefer to avoid building MM2 from source, you can download our pre-built binary "),e("a",{attrs:{href:"https://github.com/KomodoPlatform/atomicDEX-API/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("from our Github releases page."),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"note-about-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-about-linux"}},[t._v("#")]),t._v(" Note about Linux")]),t._v(" "),e("p",[t._v("For Linux users, much of the following documentation assumes that you are building and running MM2 on a Debian 9/10 or Ubuntu 18.04 host. If you have questions about other releases or distributions, "),e("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("please reach out to us on the #dev-marketmaker channel on Discord."),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"note-about-installing-on-windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-about-installing-on-windows"}},[t._v("#")]),t._v(" Note about Installing on Windows")]),t._v(" "),e("p",[t._v("Developing software on Windows typically requires an installation of Git Bash.")]),t._v(" "),e("p",[t._v("Git Bash is a terminal shell based on Unix. It is similar to the Windows Shell or Windows Command Prompt, but uses Unix-based syntax.")]),t._v(" "),e("p",[t._v("All instructions in the MarketMaker 2.0 documentation are given with Unix-based syntax, and therefore we recommend installing Git Bash before proceeding.")]),t._v(" "),e("p",[t._v("You may download and install Git Bash for Windows here:")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Git Bash for Windows"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("The download should begin automatically.")]),t._v(" "),e("p",[t._v("Double-click the downloaded "),e("code",[t._v(".exe")]),t._v(" file and follow the Installation Wizard.")]),t._v(" "),e("p",[t._v("Once Git Bash is open and running on your machine, you may continue.")]),t._v(" "),e("h3",{attrs:{id:"note-about-32-bit-operating-systems"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-about-32-bit-operating-systems"}},[t._v("#")]),t._v(" Note About 32-bit Operating Systems")]),t._v(" "),e("p",[t._v("We are currently testing 32-bit operating system functionality. As 32-bit machines can often be comparatively older hardware, we cannot guarantee that MarketMaker 2.0 will run successfully by default.")]),t._v(" "),e("p",[t._v("We invite users of 32-bit operating systems to test the software and "),e("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("report any errors to our team on the #dev-marketmaker channel on Discord"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"installing-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-dependencies"}},[t._v("#")]),t._v(" Installing Dependencies")]),t._v(" "),e("h4",{attrs:{id:"rust"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[t._v("#")]),t._v(" Rust")]),t._v(" "),e("p",[t._v("Install "),e("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://sh.rustup.rs -sSf "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),e("p",[t._v("Choose "),e("code",[t._v("2)")]),t._v(" to customize the installation, select "),e("code",[t._v("default host triple")]),t._v(" and "),e("code",[t._v("default toolchain")]),t._v(", and choose the "),e("code",[t._v("minimal")]),t._v(" profile.")]),t._v(" "),e("div",[e("img",{attrs:{src:"/get-started-atomicdex/rustup-minimal.png"}})]),t._v(" "),e("h4",{attrs:{id:"cmake-version-3-12-or-higher"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmake-version-3-12-or-higher"}},[t._v("#")]),t._v(" cmake Version 3.12 or Higher")]),t._v(" "),e("p",[t._v("Download the cmake software here: "),e("a",{attrs:{href:"https://cmake.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("download link"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Unpack and follow the instructions here: "),e("a",{attrs:{href:"https://cmake.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions link"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"build-tools-for-your-os"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-tools-for-your-os"}},[t._v("#")]),t._v(" Build Tools for Your OS")]),t._v(" "),e("h5",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" build-essential\n")])])]),e("h5",{attrs:{id:"windows-follow-these-instructions-for-msvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-follow-these-instructions-for-msvc"}},[t._v("#")]),t._v(" Windows: "),e("a",{attrs:{href:"https://docs.microsoft.com/en-us/cpp/build/vscpp-step-0-installation?view=vs-2017",target:"_blank",rel:"noopener noreferrer"}},[t._v("Follow these instructions for MSVC"),e("OutboundLink")],1)]),t._v(" "),e("h5",{attrs:{id:"macos-install-xcode-via-the-app-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-install-xcode-via-the-app-store"}},[t._v("#")]),t._v(" MacOS: "),e("a",{attrs:{href:"https://itunes.apple.com/us/app/xcode/id497799835?mt=12",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install XCode via the App Store"),e("OutboundLink")],1)]),t._v(" "),e("h4",{attrs:{id:"install-additional-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-additional-dependencies"}},[t._v("#")]),t._v(" Install Additional Dependencies")]),t._v(" "),e("p",[t._v("Install the following additional dependencies using the terminal.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" llvm-3.9-dev libclang-3.9-dev clang-3.9 libssl-dev pkg-config\n")])])]),e("h4",{attrs:{id:"install-additional-rust-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-additional-rust-components"}},[t._v("#")]),t._v(" Install Additional Rust Components")]),t._v(" "),e("p",[t._v("Install additional Rust components:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("rustup "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nightly-2020-10-25\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("rustup default nightly-2020-10-25\n")])])]),e("p",[t._v("(Optional) Skip this step if it fails.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("rustup component "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" rustfmt-preview\n")])])]),e("h4",{attrs:{id:"install-jq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-jq"}},[t._v("#")]),t._v(" Install jq")]),t._v(" "),e("p",[e("code",[t._v("jq")]),t._v(" is an optional, but useful addition to our needed software. "),e("code",[t._v("jq")]),t._v(" can provide a more readable format of JSON output in the terminal, which helps us more quickly digest mm2's data.")]),t._v(" "),e("h5",{attrs:{id:"linux-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-2"}},[t._v("#")]),t._v(" Linux:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jq\n")])])]),e("h5",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" MacOS:")]),t._v(" "),e("p",[t._v("Download the appropriate file from "),e("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link."),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("In your terminal, make the file executable by changing into the directory where the file downloaded and executing:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x jq\n")])])]),e("p",[t._v("Execute the file.")]),t._v(" "),e("h5",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows:")]),t._v(" "),e("p",[t._v("Download and execute the appropriate file from "),e("a",{attrs:{href:"https://stedolan.github.io/jq/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link."),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"build-mm2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-mm2"}},[t._v("#")]),t._v(" Build MM2")]),t._v(" "),e("p",[t._v("Clone the MM2 repository:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/KomodoPlatform/atomicDEX-API --branch mm2.1 --single-branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" atomicDEX-API\n")])])]),e("p",[t._v("Compile the source code.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("cargo build --features native -vv\n")])])]),e("h4",{attrs:{id:"macos-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-2"}},[t._v("#")]),t._v(" MacOS")]),t._v(" "),e("p",[t._v("If the above command results in an error, use the following command instead.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LIBRARY_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/opt/openssl/lib cargo build --features native -vv\n")])])]),e("p",[t._v("Alternatively, create a permanent link called "),e("code",[t._v("libcrypto")]),t._v(" to "),e("code",[t._v("/usr/local/lib")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /usr/local/opt/openssl/lib/libcrypto.a /usr/local/lib\n")])])]),e("p",[t._v("If everything installed successfully, a response that is similar to the following should appear.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("“Finished dev [optimized + debuginfo] target(s) in 3m 33s”\n")])])]),e("p",[t._v("The MM2 executable is now built and available here: "),e("code",[t._v("~/atomicDEX-API/target/debug/mm2")])])])}),[],!1,null,null,null);a.default=n.exports}}]);