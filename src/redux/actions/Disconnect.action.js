import C from "../../tools/Constants";

export const disconnect = () => {
    console.log("Disconnect");
    return {
        type: C.DISCONNECT
    };
};