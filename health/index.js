// Import package
let health = require('grpc-health-check');

// Define service status map. Key is the service name, value is the corresponding status.
// By convention, the empty string "" key represents that status of the entire server.
const statusMap = {
  "ServiceFirehose": proto.grpc.health.v1.HealthCheckResponse.ServingStatus.SERVING,
  "": proto.grpc.health.v1.HealthCheckResponse.ServingStatus.NOT_SERVING,
};

// Construct the service implementation
let healthImpl = new health.Implementation(statusMap);

// Add the service and implementation to your pre-existing gRPC-node server
server.addService(health.service, healthImpl);