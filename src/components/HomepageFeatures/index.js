import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Icon from "@material-ui/core/Icon";



const FeatureList = [

  {
    title: '<span style="text-decoration: underline;">The waPC Protocol',
    icon: 'settings',
    description: (
      <>The core of waPC is a protocol for communicating into and out of WebAssembly. <br/>
        Use waPC for everything from small libraries to distributed application platforms.
      </>
    ),
  },
  {
    title: '<span style="text-decoration: underline;">waPC Hosts & Guests',
    icon: 'extension',
    description: (
      <>
        waPC hosts manage the lifecycle and communication of WebAssembly guests.
        <br/>
        Hosts and guests give you a universal interface for dynamic behavior in both native and WebAssembly.
      </>
    ),
  },
  {
    title: '<span style="text-decoration: underline;">WIDL & the waPC CLI',
    icon: 'handyman',    
    description: (
      <>
      Use the WebAssembly Interface Definition Language (WIDL) to define your WebAssembly’s schema and the wapc CLI to generate all the code except your business logic.
      </>
    ),
  },
];

const StepsList = [
  {
    title: '<span style="text-decoration: underline;">Step 1',
    description: ( 'hi'
  // <div class="col">
  //   <div class="row section">
  //     <div class="step">
  //       <h3>Step 1: Install the wapc CLI</h3>
  //       <div class="install step-details">
  //         <Tabs
  //           defaultValue={os()}
  //           values={[
  //             {label: 'Windows', value: 'windows'},
  //             {label: 'MacOS', value: 'macos'},
  //             {label: 'Linux', value: 'linux'},
  //             {label: 'Homebrew', value: 'homebrew'},
  //           ]}>
  //           <TabItem value="windows">

  //         ```shell
  //         powershell -Command "iwr -useb https://raw.githubusercontent.com/wapc/cli/master/install/install.ps1 | iex"
  //         ```

  //           </TabItem>
  //           <TabItem value="macos">

  //         ```shell
  //         $ curl -fsSL https://raw.githubusercontent.com/wapc/cli/master/install/install.sh | /bin/bash
  //         ```

  //           </TabItem>
  //           <TabItem value="linux">

  //         ```shell
  //         $ wget -q https://raw.githubusercontent.com/wapc/cli/master/install/install.sh -O - | /bin/bash
  //         ```

  //           </TabItem>
  //           <TabItem value="homebrew">

  //         ```shell
  //         $ brew install wapc/tap/wapc
  //         ```

  //           </TabItem>
  //         </Tabs>
  //       </div>
  //     </div>
  //   </div>
  // </div>
    ),
  },

  {
    title: '<span style="text-decoration: underline;">Step 2',
    description: (
      <>
      {/* <div class="install step-details">
      
      <Tabs>
        <TabItem value="assemblyscript" label="AssemblyScript" default>
      
      ```shell
      $ wapc new assemblyscript hello_world_as
      ```
      
        </TabItem>
        <TabItem value="rust" label="Rust">
      
      ```shell
      $ wapc new rust hello_world_rust
      ```
      
        </TabItem>
        <TabItem value="tinygo" label="TinyGo">
      
      ```shell
      $ wapc new tinygo hello_world_tinygo
      $ cd hello_world_tinygo
      $ make codegen
      $ go mod tidy
      ```
      
        </TabItem>
      </Tabs>
      </div> */}
      </>
    ),
  },
  {
    title: '<span style="text-decoration: underline;">Step 3',
    description: (
      <>
        <div class="install step-details">
        <div class="code-toolbar">
        <pre
                      class="language-en"
                    ><code class=" language-en">$ make</code></pre>
        <div class="toolbar">
        <div class="toolbar-item"><button>Copy</button></div>
        </div>
        </div>
        </div>
      </>
    ),
  },
  {
    title: '<span style="text-decoration: underline;">Step 4',  
    description: (
      <>
      <div class="install step-details"></div>
      </>
    ),
  },
];

const ImageList = [
  {
    Svg: require('@site/static/img/wapc-arch.svg').default
  },
];

const BodyList = [
  {
    description: (
      <>
      <b><dt>waPC Host</dt></b>
      <dd>Once initialized with a WebAssembly intepreter and a wasm binary, the wapc-host library can start executing functions in the wasm guest. The host and guest operate over the waPC communication protocol to satisfy bindings for compiled languages. This protocol takes an operation name and input data, serializes it, and calls the receiving waPC method in the wasm guest.</dd>
      <b><dt>waPC Guest</dt></b>
      <dd>The wasm binary — built with the wapc-guest bindings — accepts the waPC call, deserializes the input, executes the requested operation by name, serializes the return value, and passes it back over the waPC protocol back to the host.</dd>
      <b><dt>WIDL</dt></b>
      <dd>Your WIDL definition is the description of your wasm module's interface. It includes the exposed operations, the input types, return types, namespaces, and more. The waPC CLI uses a widl definition to generate Rust, Go, or AssemblyScript code. <a href="https://github.com/wapc/widl-spec">(see more)</a></dd>
      <b><dt>waPC CLI</dt></b>
      <dd>The waPC command line tool automates the process of creating new projects and generating waPC-compliant integration code.</dd>
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center hiw-img">
        <Icon>{icon}</Icon>
      </div>
      <div className="text--center padding-horiz--md">
        <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Body({description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}
function Image({Svg}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="hiw-img">
        <Svg className={styles.featureSvg} role="img" />
      </div>
    </div>
  );
}

function Steps({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="padding-horiz--md">
      <h3 dangerouslySetInnerHTML={{__html: title}}></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      
          {StepsList.map((props, idx) => (
            <Steps key={idx} {...props} />
          ))}
      <h1 className="text--center">The waPC tool suite</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1 className="text--center">How it works</h1>
        <div className="row">
        {ImageList.map((props, idx) => (
            <Image className="hiw-img" key={idx} {...props} />
          ))}
          {BodyList.map((props, idx) => (
            <Body key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
