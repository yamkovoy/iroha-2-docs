import{_ as r,o as i,c as s,C as e,I as o,V as t,J as n}from"./chunks/framework.7726510e.js";const x=JSON.parse('{"title":"Iroha Special Instructions","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blockchain/instructions.md","lastUpdated":1692001131000}'),c={name:"guide/blockchain/instructions.md"},d=t('<h1 id="iroha-special-instructions" tabindex="-1">Iroha Special Instructions <a class="header-anchor" href="#iroha-special-instructions" aria-label="Permalink to &quot;Iroha Special Instructions&quot;">​</a></h1><p>When we spoke about <a href="/iroha-2-docs/#how-iroha-works">how Iroha operates</a>, we said that Iroha Special Instructions are the only way to modify the world state. So, what kind of special instructions do we have? If you&#39;ve read the language-specific guides in this tutorial, you&#39;ve already seen a couple of instructions: <code>Register&lt;Account&gt;</code> and <code>Mint&lt;Quantity&gt;</code>.</p><p>Here is the full list of Iroha Special Instructions:</p><table><thead><tr><th>Instruction</th><th>Descriptions</th></tr></thead><tbody><tr><td><a href="#un-register">Register/Unregister</a></td><td>Give an ID to a new entity on the blockchain.</td></tr><tr><td><a href="#mint-burn">Mint/Burn</a></td><td>Mint/burn assets, triggers, or permission tokens.</td></tr><tr><td><a href="#setkeyvalue-removekeyvalue">SetKeyValue/RemoveKeyValue</a></td><td>Update blockchain object metadata.</td></tr><tr><td><a href="#newparameter-setparameter">NewParameter/SetParameter</a></td><td>Create/set a chain-wide config parameter.</td></tr><tr><td><a href="#grant-revoke">Grant/Revoke</a></td><td>Give or remove certain permissions from accounts.</td></tr><tr><td><a href="#transfer">Transfer</a></td><td>Transfer assets between accounts.</td></tr><tr><td><a href="#executetrigger">ExecuteTrigger</a></td><td>Execute triggers.</td></tr><tr><td><a href="#composite-instructions">If, Pair, Sequence</a></td><td>Use to create composite instructions.</td></tr></tbody></table><p>Let&#39;s start with a summary of Iroha Special Instructions; what objects each instruction can be called for and what instructions are available for each object.</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2>',6),u={class:"details custom-block"},h=e("summary",null,"Diagram: Iroha Special Instructions",-1),l=t('<p>For each instruction, there is a list of objects on which this instruction can be run on. For example, only assets can be transferred, while minting can refer to assets, triggers, and permission tokens.</p><p>Some instructions require a destination to be specified. For example, if you transfer assets, you always need to specify to which account you are transferring them. On the other hand, when you are registering something, all you need is the object that you want to register.</p><table><thead><tr><th>Instruction</th><th>Objects</th><th>Destination</th></tr></thead><tbody><tr><td><a href="#un-register">Register/Unregister</a></td><td>accounts, domains, asset definitions, triggers, roles, peers</td><td></td></tr><tr><td><a href="#mint-burn">Mint/Burn</a></td><td>assets, triggers (trigger repetitions), permission tokens</td><td>accounts</td></tr><tr><td><a href="#setkeyvalue-removekeyvalue">SetKeyValue/RemoveKeyValue</a></td><td>any objects that have <a href="./metadata.html">metadata</a>: accounts, domains, assets, asset definitions, triggers, transactions</td><td></td></tr><tr><td><a href="#newparameter-setparameter">NewParameter/SetParameter</a></td><td>Iroha configuration parameters</td><td></td></tr><tr><td><a href="#grant-revoke">Grant/Revoke</a></td><td><a href="/iroha-2-docs/guide/blockchain/permissions.html">roles, permission tokens</a></td><td>accounts</td></tr><tr><td><a href="#transfer">Transfer</a></td><td>assets</td><td>accounts</td></tr><tr><td><a href="#executetrigger">ExecuteTrigger</a></td><td>triggers</td><td></td></tr><tr><td><a href="#composite-instructions">If, Pair, Sequence</a></td><td>any instructions</td><td></td></tr></tbody></table><p>There is also another way of looking at ISI, i.e. in terms of the target of each instruction. For example, when you register an account, you do so within a certain domain. This means that the <em>target</em> of the <code>Register&lt;Account&gt;</code> instruction would be the domain within which it is being registered.</p><table><thead><tr><th>Target</th><th>Instructions</th></tr></thead><tbody><tr><td>Account</td><td>(un)register assets, mint/burn account public key, mint/burn account signature condition check, update account metadata, grant/revoke a permission token, grant/revoke role</td></tr><tr><td>Domain</td><td>(un)register accounts, (un)register asset definitions, update asset metadata, update domain metadata</td></tr><tr><td>Asset</td><td>update metadata, mint/burn, transfer</td></tr><tr><td>Trigger</td><td>(un)register, mint/burn trigger repetitions, execute trigger</td></tr><tr><td>World</td><td>(un)register domains, peers, roles</td></tr></tbody></table><h2 id="un-register" tabindex="-1">(Un)Register <a class="header-anchor" href="#un-register" aria-label="Permalink to &quot;(Un)Register&quot;">​</a></h2><p>Registering and unregistering are the instructions used to give an ID to a new entity on the blockchain.</p><p>Everything that can be registered is both <code>Registrable</code> and <code>Identifiable</code>, but not everything that&#39;s <code>Identifiable</code> is <code>Registrable</code>. Most things are registered directly, like <code>Peer</code>s, but in some cases the representation in the blockchain has considerably more data. For security and performance reasons, we use builders for such data structures (e.g. <code>NewAccount</code>). As a rule, everything that can be registered, can also be un-registered, but that is not a hard and fast rule.</p><p>You can register domains, accounts, asset definitions, peers, roles, and triggers. Check our <a href="./naming.html">naming conventions</a> to learn about the restrictions put on entity names.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that depending on how you decide to set up your <a href="/iroha-2-docs/guide/configure/genesis.html">genesis block</a> in <code>genesis.json</code> (specifically, whether or not you include registration of permission tokens), the process for registering an account can be very different. In general, we can summarise it like this:</p><ul><li>In a <em>public</em> blockchain, anyone should be able to register an account.</li><li>In a <em>private</em> blockchain, there can be a unique process for registering accounts. In a <em>typical</em> private blockchain, i.e. a blockchain without any unique processes for registering accounts, you need an account to register another account.</li></ul><p>We discuss these differences in great detail when we <a href="/iroha-2-docs/guide/configure/modes.html">compare private and public blockchains</a>.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Registering a peer is currently the only way of adding peers that were not part of the original <code>TRUSTED_PEERS</code> array to the network.</p></div><p>Refer to one of the language-specific guides to walk you through the process of registering objects in a blockchain:</p><table><thead><tr><th>Language</th><th>Guide</th></tr></thead><tbody><tr><td>Bash</td><td>Register a <a href="/iroha-2-docs/guide/bash.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/bash.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/bash.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Rust</td><td>Register a <a href="/iroha-2-docs/guide/rust.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/rust.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/rust.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Kotlin/Java</td><td>Register a <a href="/iroha-2-docs/guide/kotlin-java.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/kotlin-java.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/kotlin-java.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>Python</td><td>Register a <a href="/iroha-2-docs/guide/python.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/python.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/python.html#_5-registering-and-minting-assets">asset</a></td></tr><tr><td>JavaScript/TypeScript</td><td>Register a <a href="/iroha-2-docs/guide/javascript.html#_3-registering-a-domain">domain</a>, an <a href="/iroha-2-docs/guide/javascript.html#_4-registering-an-account">account</a>, an <a href="/iroha-2-docs/guide/javascript.html#_5-registering-and-minting-assets">asset</a></td></tr></tbody></table><h2 id="mint-burn" tabindex="-1">Mint/Burn <a class="header-anchor" href="#mint-burn" aria-label="Permalink to &quot;Mint/Burn&quot;">​</a></h2><p>Minting and burning can refer to assets, triggers (if the trigger has a limited number of repetitions), and temporary permission tokens. Some assets can be declared as non-mintable, meaning that they can be minted only once after registration.</p><p>Assets and permission tokens need to be minted to a specific account, usually the one that registered the asset in the first place. All assets are assumed to be non-negative as well, so you can never have <code>-1.0</code> of <code>time</code> or <code>Burn</code> a negative amount and get a <code>Mint</code>.</p><p>Refer to one of the language-specific guides to walk you through the process of minting assets in a blockchain:</p><ul><li><a href="/iroha-2-docs/guide/bash.html#_5-registering-and-minting-assets">Bash</a></li><li><a href="/iroha-2-docs/guide/rust.html#_5-registering-and-minting-assets">Rust</a></li><li><a href="/iroha-2-docs/guide/kotlin-java.html#_5-registering-and-minting-assets">Kotlin/Java</a></li><li><a href="/iroha-2-docs/guide/python.html#_5-registering-and-minting-assets">Python</a></li><li><a href="/iroha-2-docs/guide/javascript.html#_5-registering-and-minting-assets">JavaScript/TypeScript </a></li></ul><p>Here are examples of burning assets:</p><ul><li><a href="/iroha-2-docs/guide/bash.html#_7-burning-assets">Bash</a></li><li><a href="/iroha-2-docs/guide/rust.html#_6-burning-assets">Rust</a></li></ul><h2 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to &quot;Transfer&quot;">​</a></h2><p>Similar to mint and burn instructions, transferring refers to assets. You can transfer assets between different accounts.</p><p>To do this, an account have to be granted the <a href="./permissions.html#cantransferuserassets">permission to transfer assets</a>. Refer to an example on how to <a href="/iroha-2-docs/guide/bash.html#_6-transferring-assets">transfer assets in Bash</a>.</p><h2 id="grant-revoke" tabindex="-1">Grant/Revoke <a class="header-anchor" href="#grant-revoke" aria-label="Permalink to &quot;Grant/Revoke&quot;">​</a></h2><p>Grant and revoke instructions are used for account <a href="./permissions.html">permissions and roles</a>.</p><p><code>Grant</code> is used to permanently grant a user either a single permission, or a group of permissions (a &quot;role&quot;). Granted roles and permissions can only be removed via the <code>Revoke</code> instruction. As such, these instructions should be used carefully.</p><h2 id="setkeyvalue-removekeyvalue" tabindex="-1"><code>SetKeyValue</code>/<code>RemoveKeyValue</code> <a class="header-anchor" href="#setkeyvalue-removekeyvalue" aria-label="Permalink to &quot;`SetKeyValue`/`RemoveKeyValue`&quot;">​</a></h2><p>These instructions are used with the key/value <a href="/iroha-2-docs/guide/blockchain/metadata.html#store-asset"><code>Store</code> asset type</a>. This use case has not received much attention so far, because storing data in the blockchain is a rather advanced topic that we shall cover separately.</p><h2 id="newparameter-setparameter" tabindex="-1"><code>NewParameter</code>/<code>SetParameter</code> <a class="header-anchor" href="#newparameter-setparameter" aria-label="Permalink to &quot;`NewParameter`/`SetParameter`&quot;">​</a></h2><p>With these instructions, you can create (<code>NewParameter</code>) and change (<code>SetParameter</code>) chain-wide <a href="./../configure/client-configuration.html">configuration parameters</a> for Iroha.</p><h2 id="executetrigger" tabindex="-1"><code>ExecuteTrigger</code> <a class="header-anchor" href="#executetrigger" aria-label="Permalink to &quot;`ExecuteTrigger`&quot;">​</a></h2><p>This instruction is used to execute <a href="./triggers.html">triggers</a>.</p><h2 id="composite-instructions" tabindex="-1">Composite instructions <a class="header-anchor" href="#composite-instructions" aria-label="Permalink to &quot;Composite instructions&quot;">​</a></h2><p>Iroha also offers composite instructions (<code>If</code>, <code>Pair</code>, <code>Sequence</code>) to execute instructions in a certain way:</p><ul><li><code>If</code>: execute one of the two given instructions based on a given condition</li><li><code>Sequence</code>: execute a provided vector of instructions in a given order</li><li><code>Pair</code>: execute both provided instructions in a specified order</li></ul>',35);function g(m,f,p,A,b,v){const a=n("MermaidRenderWrap");return i(),s("div",null,[d,e("details",u,[h,o(a,{id:"mermaid_ed2856e2f3a15f4a487319a2418ef404bba5a0dac5df0f42a043a82e9151599b85f73422c959b6bc3b0a5bbb39538fba27abaddf4e4077d492e2301eec56d75f",text:"classDiagram%0A%0Adirection%20LR%0A%0Aclass%20Instruction%20%7B%0A%20%20%20%20%3C%3Cenumeration%3E%3E%0A%20%20%20%20Register(RegisterBox)%0A%20%20%20%20Unregister(UnregisterBox)%0A%20%20%20%20Mint(MintBox)%0A%20%20%20%20Burn(BurnBox)%0A%20%20%20%20Transfer(TransferBox)%0A%20%20%20%20If(Box~If~)%0A%20%20%20%20Pair(Box~Pair~)%0A%20%20%20%20Sequence(SequenceBox)%0A%20%20%20%20Fail(FailBox)%0A%20%20%20%20SetKeyValue(SetKeyValueBox)%0A%20%20%20%20RemoveKeyValue(RemoveKeyValueBox)%0A%20%20%20%20Grant(GrantBox)%0A%20%20%20%20Revoke(RevokeBox)%0A%20%20%20%20ExecuteTrigger(ExecuteTriggerBox)%0A%7D%0A%0Aclass%20SetKeyValueBox%20%7B%0A%20%20%20%20object_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%20%20%20%20key%3A%20EvaluatesTo~Name~%20%20%20%20%0A%20%20%20%20value%3A%20EvaluatesTo~Value~%20%20%20%20%0A%7D%0A%0Aclass%20RemoveKeyValueBox%20%7B%0A%20%20%20%20object_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%20%20%20%20key%3A%20EvaluatesTo~Name~%20%20%20%20%0A%7D%0A%0A%0Aclass%20RegisterBox%20%7B%0A%20%20%20%20object%3A%20EvaluatesTo~RegistrableBox~%20%20%20%20%0A%7D%0A%0Aclass%20UnregisterBox%20%7B%0A%20%20%20%20object_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0A%0Aclass%20MintBox%20%7B%0A%20%20%20%20object%3A%20EvaluatesTo~Value~%20%20%20%20%0A%20%20%20%20destination_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0Aclass%20BurnBox%20%7B%0A%20%20%20%20object%3A%20EvaluatesTo~Value~%20%20%20%20%0A%20%20%20%20destination_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0Aclass%20TransferBox%20%7B%0A%20%20%20%20source_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%20%20%20%20object%3A%20EvaluatesTo~Value~%20%20%20%20%0A%20%20%20%20destination_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0A%0Aclass%20SequenceBox%20%7B%0A%20%20%20%20instructions%3A%20Vec~Instruction~%20%20%20%20%0A%7D%0A%0Aclass%20GrantBox%20%7B%0A%20%20%20%20object%3A%20EvaluatesTo~Value~%20%20%20%20%0A%20%20%20%20destination_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0Aclass%20RevokeBox%20%7B%0A%20%20%20%20object%3A%20EvaluatesTo~Value~%20%20%20%20%0A%20%20%20%20destination_id%3A%20EvaluatesTo~IdBox~%20%20%20%20%0A%7D%0A%0Aclass%20ExecuteTriggerBox%20%7B%0A%20%20%20%20trigger_id%3A%20TriggerId%0A%7D%0A%0Aclass%20SetKeyValue~SetKeyValueBox~%0Aclass%20RemoveKeyValue~RemoveKeyValueBox~%0Aclass%20Register~RegisterBox~%0Aclass%20Unregister~UnregisterBox~%0Aclass%20Mint~MintBox~%0Aclass%20Burn~BurnBox~%0Aclass%20Transfer~TransferBox~%0Aclass%20Grant~GrantBox~%0Aclass%20Revoke~RevokeBox~%0A%0A%0AInstruction%20--%3E%20SetKeyValue%0AInstruction%20--%3E%20RemoveKeyValue%0AInstruction%20--%3E%20Register%0AInstruction%20--%3E%20Unregister%0AInstruction%20--%3E%20Mint%0AInstruction%20--%3E%20Burn%0AInstruction%20--%3E%20Transfer%0AInstruction%20--%3E%20Grant%0AInstruction%20--%3E%20Revoke%0AInstruction%20--%3E%20ExecuteTrigger%0AInstruction%20--%3E%20Sequence%0A%0ASetKeyValue%20..%20SetKeyValueBox%0ARemoveKeyValue%20..%20RemoveKeyValueBox%0ARegister%20..%20RegisterBox%0AUnregister%20..%20UnregisterBox%0AMint%20..%20MintBox%0ABurn%20..%20BurnBox%0ATransfer%20..%20TransferBox%0AGrant%20..%20GrantBox%0ARevoke%20..%20RevokeBox%0AExecuteTrigger%20..%20ExecuteTriggerBox%0ASequence%20..%20SequenceBox%0A%0Aclass%20If%20%7B%0A%20%20%20%20condition%3A%20EvaluatesTo~bool~%20%20%20%20%0A%20%20%20%20then%3A%20Instruction%20%20%20%20%0A%20%20%20%20otherwise%3A%20Option~Instruction~%20%20%20%20%0A%7D%0A%0Aclass%20Pair%20%7B%0A%20%20%20%20left_instruction%3A%20Instruction%20%20%20%20%0A%20%20%20%20right_instruction%3A%20Instruction%20%20%20%20%0A%7D%0A%0AInstruction%20--%3E%20If%0AInstruction%20--%3E%20Pair"})]),l])}const k=r(c,[["render",g]]);export{x as __pageData,k as default};
