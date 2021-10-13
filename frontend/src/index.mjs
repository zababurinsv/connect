import isEmpty from "./modules/isEmpty/isEmpty.mjs";
export default () => {
    return new Promise(async (resolve, reject) => {
        try {
            let object = {}
            object.params = {}
            object.params.recipient = false
            object.params.initiator = false
            object.params.location = false
            object.params.id = false

            resolve(new Proxy(  object,{
                get: (obj, prop) => {
                    console.log({
                        _:'get target',
                        prop:prop,
                        obj:obj,
                        value:obj[prop]
                    })
                    return obj[prop];
                },
                set: (obj, prop, value) => {
                    console.log({
                        _:'set target',
                        prop:prop,
                        obj:obj,
                        value:value
                    })
                    if(isEmpty(obj[prop])){
                        obj[prop] = []
                    }
                    obj[prop] = value;
                    return true
                }}))
        } catch (e) {
            resolve({
                message: e.message,
                success: true,
                status: true
            })
        }
    })
}