import{_ as e,o as a,c as i,V as t}from"./chunks/framework.7726510e.js";const f=JSON.parse('{"title":"Glossary","description":"","frontmatter":{},"headers":[],"relativePath":"guide/glossary.md","lastUpdated":1692001131000}'),r={name:"guide/glossary.md"},o=t('<h1 id="glossary" tabindex="-1">Glossary <a class="header-anchor" href="#glossary" aria-label="Permalink to &quot;Glossary &lt;!-- omit in toc --&gt;&quot;">​</a></h1><p>Here you can find definitions of all Iroha-related entities.</p><ul><li><a href="#asset">Asset</a></li><li><a href="#byzantine-fault-tolerance-bft">Byzantine fault-tolerance (BFT)</a></li><li><a href="#iroha-components">Iroha Components</a><ul><li><a href="#sumeragi-emperor">Sumeragi (Emperor)</a></li><li><a href="#torii-gate">Torii (Gate)</a></li><li><a href="#kura-warehouse">Kura (Warehouse)</a></li><li><a href="#kagamiteacher-and-exemplar-andor-looking-glass">Kagami(Teacher and Exemplar and/or looking glass)</a></li><li><a href="#merkle-tree-hash-tree">Merkle tree (hash tree)</a></li><li><a href="#smart-contracts">Smart contracts</a></li><li><a href="#triggers">Triggers</a></li><li><a href="#versioning">Versioning</a></li><li><a href="#hijiri-peer-reputation-system">Hijiri (peer reputation system)</a></li></ul></li><li><a href="#iroha-modules">Iroha Modules</a></li><li><a href="#iroha-special-instructions-isi">Iroha Special Instructions (ISI)</a><ul><li><a href="#utility-iroha-special-instructions">Utility Iroha Special Instructions</a></li><li><a href="#core-iroha-special-instructions">Core Iroha Special Instructions</a></li><li><a href="#domain-specific-iroha-special-instructions">Domain-specific Iroha Special Instructions</a></li><li><a href="#custom-iroha-special-instruction">Custom Iroha Special Instruction</a></li></ul></li><li><a href="#iroha-query">Iroha Query</a></li><li><a href="#view-change">View change</a></li><li><a href="#world-state-view-wsv">World state view (WSV)</a></li><li><a href="#leader">Leader</a></li></ul><h2 id="blockchain-ledgers" tabindex="-1">Blockchain ledgers <a class="header-anchor" href="#blockchain-ledgers" aria-label="Permalink to &quot;Blockchain ledgers&quot;">​</a></h2><p>Blockchain ledgers are digital record-keeping systems that use blockchain technology to keep financial records. These are named after old-fashioned books that were used for financial records such as prices, news, and transaction information.</p><p>During medieval times, ledger books were open for public viewing and accuracy verification. This idea is reflected in the blockchain-based systems that can check the stored data for validity.</p><h2 id="asset" tabindex="-1">Asset <a class="header-anchor" href="#asset" aria-label="Permalink to &quot;Asset&quot;">​</a></h2><p>In the context of blockchains, an asset is the representation of a valuable object on the blockchain.</p><p>Additional information on assets is available <a href="/iroha-2-docs/guide/blockchain/assets.html">here</a>.</p><h3 id="fungible-assets" tabindex="-1">Fungible assets <a class="header-anchor" href="#fungible-assets" aria-label="Permalink to &quot;Fungible assets&quot;">​</a></h3><p>Such assets can be easily swapped for other assets of the same type because they are interchangeable.</p><p>As an example, all units of the same currency are equal in their value and can be used to purchase goods. Typically, fungible assets are identical in appearance, aside from the wear of banknotes and coins.</p><h3 id="non-fungible-assets" tabindex="-1">Non-fungible assets <a class="header-anchor" href="#non-fungible-assets" aria-label="Permalink to &quot;Non-fungible assets&quot;">​</a></h3><p>Non-fungible assets are unique and valuable due to their specific characteristics and rarity; their value cannot be compared to other assets.</p><ul><li>A painting&#39;s value can vary based on the artist, the time period it was painted, and the public&#39;s interest in it.</li><li>Two houses on the same street may have differing levels of maintenance.</li><li>Jewellery manufacturers typically offer a range of different designs.</li></ul><h3 id="mintable-assets" tabindex="-1">Mintable assets <a class="header-anchor" href="#mintable-assets" aria-label="Permalink to &quot;Mintable assets&quot;">​</a></h3><p>An asset is mintable if more of the same type can be issued.</p><h3 id="non-mintable-assets" tabindex="-1">Non-mintable assets <a class="header-anchor" href="#non-mintable-assets" aria-label="Permalink to &quot;Non-mintable assets&quot;">​</a></h3><p>If the initial amount of an asset is specified once and doesn&#39;t change, it is considered non-mintable.</p><p>The <a href="/iroha-2-docs/guide/configure/genesis.html">Genesis block</a> sets this information for the Iroha configuration.</p><h2 id="byzantine-fault-tolerance-bft" tabindex="-1">Byzantine fault-tolerance (BFT) <a class="header-anchor" href="#byzantine-fault-tolerance-bft" aria-label="Permalink to &quot;Byzantine fault-tolerance (BFT)&quot;">​</a></h2><p>The property of being able to properly function with a network containing a certain percentage of malicious actors. Iroha is capable of functioning with up to 33% malicious actors in its peer-to-peer network.</p><h2 id="iroha-components" tabindex="-1">Iroha Components <a class="header-anchor" href="#iroha-components" aria-label="Permalink to &quot;Iroha Components&quot;">​</a></h2><p>Rust modules containing Iroha functionality.</p><h3 id="sumeragi-emperor" tabindex="-1">Sumeragi (Emperor) <a class="header-anchor" href="#sumeragi-emperor" aria-label="Permalink to &quot;Sumeragi (Emperor)&quot;">​</a></h3><p>The Iroha module responsible for consensus.</p><h3 id="torii-gate" tabindex="-1">Torii (Gate) <a class="header-anchor" href="#torii-gate" aria-label="Permalink to &quot;Torii (Gate)&quot;">​</a></h3><p>Module with the incoming request handling logic for the peer. It is used to receive, accept and route incoming instructions, and HTTP queries, as well as run-time configuration updates.</p><h3 id="kura-warehouse" tabindex="-1">Kura (Warehouse) <a class="header-anchor" href="#kura-warehouse" aria-label="Permalink to &quot;Kura (Warehouse)&quot;">​</a></h3><p>Persistence-related logic. It handles storing the blocks, log rotation, block storage folder rotation, etc.</p><h3 id="kagami-teacher-and-exemplar-and-or-looking-glass" tabindex="-1">Kagami(Teacher and Exemplar and/or looking glass) <a class="header-anchor" href="#kagami-teacher-and-exemplar-and-or-looking-glass" aria-label="Permalink to &quot;Kagami(Teacher and Exemplar and/or looking glass)&quot;">​</a></h3><p>Generator for commonly used data. It can generate cryptographic key pairs, genesis blocks, documentation, etc.</p><h3 id="merkle-tree-hash-tree" tabindex="-1">Merkle tree (hash tree) <a class="header-anchor" href="#merkle-tree-hash-tree" aria-label="Permalink to &quot;Merkle tree (hash tree)&quot;">​</a></h3><p>A data structure used to validate and verify the state at each block height. Iroha&#39;s current implementation is a binary tree. See <a href="https://en.wikipedia.org/wiki/Merkle_tree" target="_blank" rel="noreferrer">Wikipedia</a> for more details.</p><h3 id="smart-contracts" tabindex="-1">Smart contracts <a class="header-anchor" href="#smart-contracts" aria-label="Permalink to &quot;Smart contracts&quot;">​</a></h3><p>Smart contracts are blockchain-based programs that run when a specific set of conditions is met. In Iroha smart contracts are implemented using <a href="#core-iroha-special-instructions">core Iroha special instructions</a>.</p><h3 id="triggers" tabindex="-1">Triggers <a class="header-anchor" href="#triggers" aria-label="Permalink to &quot;Triggers&quot;">​</a></h3><p>An event type that allows invoking an Iroha special instruction at specific block commit, time (with some caveats), etc. More on triggers <a href="/iroha-2-docs/guide/blockchain/triggers.html">here</a>.</p><h3 id="versioning" tabindex="-1">Versioning <a class="header-anchor" href="#versioning" aria-label="Permalink to &quot;Versioning&quot;">​</a></h3><p>Each request is labelled with the API version to which it belongs. It allows a combination of different binary versions of Iroha client/peer software to interoperate, which in turn allows software upgrades in the Iroha network.</p><h3 id="hijiri-peer-reputation-system" tabindex="-1">Hijiri (peer reputation system) <a class="header-anchor" href="#hijiri-peer-reputation-system" aria-label="Permalink to &quot;Hijiri (peer reputation system)&quot;">​</a></h3><p>Iroha&#39;s reputation system. It allows prioritising communication with peers that have a good track-record, and reducing the harm that can be caused by malicious peers.</p><h2 id="iroha-modules" tabindex="-1">Iroha Modules <a class="header-anchor" href="#iroha-modules" aria-label="Permalink to &quot;Iroha Modules&quot;">​</a></h2><p>Third party extensions to Iroha that provide custom functionality.</p><h2 id="iroha-special-instructions-isi" tabindex="-1">Iroha Special Instructions (ISI) <a class="header-anchor" href="#iroha-special-instructions-isi" aria-label="Permalink to &quot;Iroha Special Instructions (ISI)&quot;">​</a></h2><p>A library of smart contracts provided with Iroha. These can be invoked via either transactions or registered event listeners. More on ISI <a href="/iroha-2-docs/guide/blockchain/instructions.html">here</a>.</p><h4 id="utility-iroha-special-instructions" tabindex="-1">Utility Iroha Special Instructions <a class="header-anchor" href="#utility-iroha-special-instructions" aria-label="Permalink to &quot;Utility Iroha Special Instructions&quot;">​</a></h4><p>This set of <a href="#iroha-special-instructions-isi">isi</a> contains logical instructions like <code>If</code>, I/O related like <code>Notify</code> and compositions like <code>Sequence</code>. They are mostly used by <a href="#custom-iroha-special-instructions">custom instructions</a>.</p><h3 id="core-iroha-special-instructions" tabindex="-1">Core Iroha Special Instructions <a class="header-anchor" href="#core-iroha-special-instructions" aria-label="Permalink to &quot;Core Iroha Special Instructions&quot;">​</a></h3><p><a href="#iroha-special-instructions-isi">Special instructions</a> provided with every Iroha deployment. These include some <a href="#domain-specific-iroha-special-instructions">domain-specific</a> as well as <a href="#utility-iroha-special-instructions">utility instructions</a>.</p><h3 id="domain-specific-iroha-special-instructions" tabindex="-1">Domain-specific Iroha Special Instructions <a class="header-anchor" href="#domain-specific-iroha-special-instructions" aria-label="Permalink to &quot;Domain-specific Iroha Special Instructions&quot;">​</a></h3><p>Instructions related to domain-specific activities: assets, accounts, domains, peer management). These provide the tools necessary to make changes to the <a href="#world-state-view-wsv">World State View</a> in a secure and safe manner.</p><h3 id="custom-iroha-special-instruction" tabindex="-1">Custom Iroha Special Instruction <a class="header-anchor" href="#custom-iroha-special-instruction" aria-label="Permalink to &quot;Custom Iroha Special Instruction&quot;">​</a></h3><p>Instructions provided in <a href="#iroha-modules">Iroha Modules</a>, by clients or 3rd parties. These can only be built using <a href="#core-iroha-special-instructions">the Core Instructions</a>. Forking and modifying the Iroha source code is not recommended, as special instructions not agreed-upon by peers in an Iroha deployment will be treated as faults, thus peers running a modified instance will have their access revoked.</p><h2 id="iroha-query" tabindex="-1">Iroha Query <a class="header-anchor" href="#iroha-query" aria-label="Permalink to &quot;Iroha Query&quot;">​</a></h2><p>A request to read the World State View without modifying said view. More on queries <a href="/iroha-2-docs/guide/blockchain/queries.html">here</a>.</p><h2 id="view-change" tabindex="-1">View change <a class="header-anchor" href="#view-change" aria-label="Permalink to &quot;View change&quot;">​</a></h2><p>A process that takes place in case of a failed attempt at consensus. Usually this entails the election of a new <a href="#leader">Leader</a>.</p><h2 id="world-state-view-wsv" tabindex="-1">World state view (WSV) <a class="header-anchor" href="#world-state-view-wsv" aria-label="Permalink to &quot;World state view (WSV)&quot;">​</a></h2><p>In-memory representation of the current blockchain state. This includes all currently loaded blocks, with all of their contents, as well as peers elected for the current epoch.</p><h2 id="leader" tabindex="-1">Leader <a class="header-anchor" href="#leader" aria-label="Permalink to &quot;Leader&quot;">​</a></h2><p>In an iroha network, a peer is selected randomly and granted the special privilege of forming the next block. This privilege can be revoked in networks that achieve <a href="#byzantine-fault-tolerance-bft">Byzantine fault-torelance</a> via <a href="#view-change">view change</a>.</p>',62),s=[o];function n(l,h,c,d,u,p){return a(),i("div",null,s)}const g=e(r,[["render",n]]);export{f as __pageData,g as default};
