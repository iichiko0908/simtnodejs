var uid;
var argvs     = WebSocket = require('ws')
 , ws        = new WebSocket('ws://153.150.60.73:1890/websocket');

ws.on("open", function() {
    var HB = false;
    var message = "";
    message += "{";
    message  = "{\"user_id\": \"" + uid +"\"";
    message += ",\"time\": \"" + "" + "\"";
    message += ",\"time_zone\": \"GMT+0900\"";
    message += ",\"counter\":" + "1";
    message += ",\"message_id\":\"SIMTroot/Type/Lumada-SIMT/HeartBeat\"";
    message += ",\"credential_type\": \"\"";
    message += ",\"credential_id\": \"\"";
    message += ",\"session_id\": \"\"";
    message += ",\"cryptype_type\": \"\"";
    message += ",\"cryptype_id\": \"\"";
    message += ",\"sender_id\": \"\"";
    message += ",\"Data\":{";
    message += "\"HeartBeat\":";
    message += "{\"id\":\"SIMTroot/Type/Lumada-SIMT/HeartBeat\"";
    message += ",\"statue\":\"SIMTroot/Basic/StatusSet/WorkingProperly\"";
    message += ",\"counter\":\"" + "1" + "\"";
    message += ",\"heartbeat\":\"" + HB + "\"";
    message += "}";
    message += "}}";
    ws.send(message);
});

ws.on("message", function(message) {
	console.log(message);
});
