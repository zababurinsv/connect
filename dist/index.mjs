import {createStore as $dG5fC$createStore} from "redux";


function $2698a4af2d3845c0$export$9099ad97b570f7c(state = 0, action) {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


let $7ba5072a2c67a238$var$store = $dG5fC$createStore($2698a4af2d3845c0$export$9099ad97b570f7c);
var $7ba5072a2c67a238$export$9099ad97b570f7c = $7ba5072a2c67a238$var$store;


// let init = () => {
//     let eventSource = new EventSource(`${Peer.location.signal}/${Peer.id}?recipient=${Peer.recipient}&initiator=${Peer.initiator}`);
// }
async function $6ea8af4ea020f2ef$var$signalServer() {
    return new Promise(async (resolve, reject)=>{
        try {
            eventSource.onmessage = function(event) {
                try {
                    let res = JSON.parse(event.data);
                    switch(res.status){
                        case "peer save connect":
                            emoji('peer save connect'), next("peer save connect", false);
                            Peer.isEvents = true;
                            break;
                        case "post: incoming message offer":
                            isEmpty(Peer.core) ? (emoji('incoming message offer'), Peer.message.offer = res.message, next("post: incoming message offer-events", false), Peer.isEvents = true) : (emoji('incoming message offer'), Peer.message.offer = res.message, next("post: incoming message offer-offer", false), Peer.isOffer = true);
                            break;
                        case "post: incoming message answer":
                            Peer.message.answer = res.message;
                            emoji('incoming message answer'), next("post: incoming message answer", false);
                            Peer.isAnswer = true;
                            break;
                        default:
                            break;
                    }
                    API.class.peer.info.status[0].textContent = res.status;
                } catch (e) {
                    let error = e;
                    console.log('error', error);
                }
            };
            eventSource.onopen = function(event) {
                let state = '';
                switch(eventSource.readyState){
                    case 0:
                        state = "CONNECTING";
                        break;
                    case 1:
                        state = "OPEN";
                        break;
                    case 2:
                        state = "CLOSED";
                        break;
                    default:
                        break;
                }
                console.log('events', state);
            };
            eventSource.onerror = function(e) {
            // console.log('error', e)
            };
            Peer.signal = eventSource;
            resolve({
                success: false,
                status: false
            });
        } catch (e) {
            resolve({
                message: e.message,
                success: true,
                status: true
            });
        }
    });
}


let $8df93f21f7b7987c$var$manual = {
    signal: 'web'
};
let $8df93f21f7b7987c$var$object = {
    url: {
        signal: {
            web: 'https://web3-news.herokuapp.com',
            web2: "https://web3.news",
            web3: "https://web3-star.herokuapp.com",
            local: 'http://localhost:4434'
        }
    },
    role: {
        recipient: "recipient",
        initiator: "initiator"
    },
    test: {
        peer: {
            "0": "QmcrQZ6RJdpYuGvZqD5QEHAv6qX4BrQLJLQPQUrTrzdcgm",
            "1": "Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP"
        }
    }
};
var $8df93f21f7b7987c$export$9099ad97b570f7c = {
    "_": $8df93f21f7b7987c$var$manual.signal,
    signal: $8df93f21f7b7987c$var$object.url.signal[`${$8df93f21f7b7987c$var$manual.signal}`],
    role: $8df93f21f7b7987c$var$object.role,
    test: $8df93f21f7b7987c$var$object.test
};


var $3adef8a9122f15b0$export$9099ad97b570f7c = (object = {
})=>{
    return new Promise(async (resolve, reject)=>{
        resolve({
            peer: async (id)=>{
                try {
                    object.params.id = id;
                    resolve({
                        status: true,
                        success: true,
                        message: object.api
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            role: async (role)=>{
                try {
                    switch(role){
                        case `${$8df93f21f7b7987c$export$9099ad97b570f7c.role.initiator}`:
                            object.params.initiator = true;
                            break;
                        case `${$8df93f21f7b7987c$export$9099ad97b570f7c.role.recipient}`:
                            object.params.recipient = true;
                            break;
                        default:
                            console.warn('неизвестная роль', role);
                            break;
                    }
                    resolve({
                        status: true,
                        success: true,
                        message: object.api
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            await: async (oldPath, newPath)=>{
                try {
                    let Await = await fs.symlink(oldPath, newPath);
                    resolve({
                        status: true,
                        success: true,
                        message: Await
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            connect: async (signal)=>{
                try {
                    let connect = '';
                    resolve({
                        status: true,
                        success: true,
                        message: connect
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            request: async (type = {
            }, params = {
            }, dir = '/newKind')=>{
                try {
                    let request = await fs.mount(type, params, dir);
                    resolve({
                        status: true,
                        success: true,
                        message: request
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            call: async (mountPoint = '/newKind')=>{
                try {
                    let unmount = await fs.call(mountPoint);
                    resolve({
                        status: true,
                        success: true,
                        message: call
                    });
                } catch (e) {
                    resolve({
                        status: false,
                        success: false,
                        message: e
                    });
                }
            },
            UpCall: (path)=>{
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        let UpCall = await fs.mkdir(path);
                        resolve1({
                            status: true,
                            success: true,
                            message: UpCall
                        });
                    } catch (e) {
                        resolve1({
                            status: false,
                            success: false,
                            message: e
                        });
                    }
                });
            },
            message: (path)=>{
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        let message = await fs.readdir(path);
                        resolve1({
                            status: true,
                            success: true,
                            message: message
                        });
                    } catch (e) {
                        resolve1({
                            status: false,
                            success: false,
                            message: e
                        });
                    }
                });
            },
            stream: (path)=>{
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        let stream = await fs.rmdir(path);
                        resolve1({
                            status: true,
                            success: true,
                            message: stream
                        });
                    } catch (e) {
                        resolve1({
                            status: false,
                            success: false,
                            message: e
                        });
                    }
                });
            },
            disconnect: (path)=>{
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        let disconnect = await fs.cwd();
                        resolve1({
                            status: true,
                            success: true,
                            message: disconnect
                        });
                    } catch (e) {
                        resolve1({
                            status: false,
                            success: false,
                            message: e
                        });
                    }
                });
            },
            multichannel: (file, result)=>{
                return new Promise(async (resolve1, reject1)=>{
                    try {
                        let multichannel = await fs.rename(file, result);
                        resolve1({
                            status: true,
                            success: true,
                            message: multichannel
                        });
                    } catch (e) {
                        resolve1({
                            status: false,
                            success: false,
                            message: e
                        });
                    }
                });
            },
            store: $7ba5072a2c67a238$export$9099ad97b570f7c
        });
    });
};


let $e4a89c3b03e8081b$var$has = Object.prototype.hasOwnProperty;
let $e4a89c3b03e8081b$var$toString = Object.prototype.toString;
function $e4a89c3b03e8081b$var$isEmpty(val) {
    // Null and Undefined...
    if (val == null) return true;
    // Booleans...
    if ('boolean' == typeof val) return false;
    // Numbers...
    if ('number' == typeof val) return val === 0;
    // Strings...
    if ('string' == typeof val) return val.length === 0;
    // Functions...
    if ('function' == typeof val) return val.length === 0;
    // Arrays...
    if (Array.isArray(val)) {
        let object = val instanceof Object;
        if (object) return Object.keys(val).length === 0;
        else return val.length === 0;
    }
    // Errors...
    if (val instanceof Error) return val.message === '';
    // Objects...
    if (val.toString == $e4a89c3b03e8081b$var$toString) switch(val.toString()){
        // Maps, Sets, Files and Errors...
        case '[object File]':
        case '[object Map]':
        case '[object Set]':
            return val.size === 0;
        // Plain objects...
        case '[object Object]':
            for(var key in val){
                if ($e4a89c3b03e8081b$var$has.call(val, key)) return false;
            }
            return true;
    }
    // Anything else...
    return false;
}
var $e4a89c3b03e8081b$export$9099ad97b570f7c = $e4a89c3b03e8081b$var$isEmpty;


var $d3f15be1f2fb3cbe$export$9099ad97b570f7c = (debug = true, peer = '', initiator)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            let object = {
            };
            object.params = {
            };
            object.api = {
            };
            object.params.debug = debug;
            object.params.recipient = false;
            object.params.initiator = false;
            object.params.location = false;
            object.params.id = false;
            object.api = await $3adef8a9122f15b0$export$9099ad97b570f7c(object);
            resolve(new Proxy(object.api, {
                get: (obj, prop)=>{
                    switch(prop){
                        case 'params':
                            return object[prop];
                        default:
                            break;
                    }
                    if (object.params.debug) console.log({
                        _: 'proxy get',
                        prop: prop,
                        obj: obj,
                        value: obj[prop]
                    });
                    return obj[prop];
                },
                set: (obj, prop, value)=>{
                    if (object.params.debug) console.log({
                        _: 'proxy set',
                        prop: prop,
                        obj: obj,
                        value: value
                    });
                    if ($e4a89c3b03e8081b$export$9099ad97b570f7c(obj[prop])) obj[prop] = [];
                    obj[prop] = value;
                    return true;
                }
            }));
        } catch (e) {
            resolve({
                message: e.message,
                success: true,
                status: true
            });
        }
    });
};


export {$d3f15be1f2fb3cbe$export$9099ad97b570f7c as default};
