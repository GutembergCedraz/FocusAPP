import { io } from 'socket.io-client'
let socket

export const initiateSocket = () => {
    socket = io("http://192.168.0.13:3030")
    console.log('Conectando ao socket...')
}


export const notificacaoLida = (cb) => {
  if (!socket) return true;
  socket.on("lida", (data) => {
    console.log("Notificacao lida");
    return cb(null, data);
  });
};