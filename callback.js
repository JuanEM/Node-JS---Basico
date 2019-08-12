function saludar (callback){
    var mensaje = 'Hola desde callback'

    callback(mensaje)
}
saludar (function(mensaje){
    Console.log(mensaje)
    
})
