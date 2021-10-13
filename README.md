# webrtc
Test peer to peer connection  
1 - [Dialler](https://zababurinsv.github.io/webrtc/index.dialer.html)  
2 - [Initiator](https://zababurinsv.github.io/webrtc/index.initiator.html)  
3 - push button `peer init` on dialer and initiator pages

## Storage
[nft.storage](https://nft.storage/)  
[pinata.cloud](https://app.pinata.cloud/)  
[js-ipfs config-browser](https://github.com/ipfs/js-ipfs/blob/master/packages/ipfs-core/src/runtime/config-browser.js)  
[js-ipfs](https://github.com/ipfs/js-ipfs/blob/master/docs/MODULE.md)  
[proto](https://proto.school/build)  
[gateway](https://docs.ipfs.io/how-to/configure-node/#gateway)  


#FS
* Create file FS.writeFile("file.txt","some contents");
* Create file, with options FS.createDataFile("/data","file.txt","abcdef",true,true);
  >  folder where file will be saved  
  file name
  file contents (a string)
  is this file readable?
  is this file writable?

## folder where file will be saved
* Rename file `FS.rename("/data/file.txt","/data/renamed.txt");`
* Read file contents `FS.readFile("/data/file.txt", { encoding: "utf8" });`
* Delete the file `FS.unlink("/data/file.txt");`

## Enable virtual filesystems (the ephemeral MEMFS is included by default)
* IDBFS -lidbfs.js
* WORKERFS -lworkerfs.js
* NODEFS -lnodefs.js

## Folders
* Create folder `FS.mkdir("/data");`
* List folder contents `FS.readdir("/data");`
* Delete empty `folder FS.rmdir("/data");`
* Get working directory `FS.cwd();`


[emscripten filesystem-api](https://emscripten.org/docs/api_reference/Filesystem-API.html#filesystem-api)  
[emscripten-core](https://github.com/emscripten-core/emscripten/tree/main/src)
