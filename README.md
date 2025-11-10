# reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/5301

How to run:
- `npm ci`
- `npm run start:server`
- `OTEL_NODE_RESOURCE_DETECTORS=env,host,os,process,serviceinstance,container OTEL_NODE_ENABLED_INSTRUMENTATIONS=dns,http,express,grpc OTEL_LOG_LEVEL=info OTEL_TRACES_EXPORTER=console npm run start:client`

Client output:

```
...
{
  resource: {
    attributes: {
      'process.pid': 12795,
      'process.executable.name': 'node',
      'process.executable.path': '/Users/marc.pichler/.nvm/versions/node/v20.19.4/bin/node',
      'process.command_args': [
        '/Users/marc.pichler/.nvm/versions/node/v20.19.4/bin/node',
        '--require',
        '@opentelemetry/auto-instrumentations-node/register',
        '--loader',
        '@opentelemetry/instrumentation/hook.mjs',
        '/Users/marc.pichler/otel-js/5301/helloworld/dynamic_codegen/greeter_client.js'
      ],
      'process.runtime.version': '20.19.4',
      'process.runtime.name': 'nodejs',
      'process.runtime.description': 'Node.js',
      'process.command': '/Users/marc.pichler/otel-js/5301/helloworld/dynamic_codegen/greeter_client.js',
      'process.owner': 'marc.pichler',
      'service.instance.id': '1042477d-36d5-409d-9625-fb9ea6d54184',
      'os.type': 'darwin',
      'os.version': '24.6.0',
      'host.name': 'DT-CFCW2WRFQM',
      'host.arch': 'arm64',
      'host.id': 'D3587CB6-1F6B-55BE-9D8C-6D63DB44E7AA',
      'service.name': 'unknown_service:node',
      'telemetry.sdk.language': 'nodejs',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '2.2.0'
    }
  },
  instrumentationScope: {
    name: '@opentelemetry/instrumentation-grpc',
    version: '0.208.0',
    schemaUrl: undefined
  },
  traceId: '884fe87581514418959f29399187a10a',
  parentSpanContext: undefined,
  traceState: undefined,
  name: 'grpc.helloworld.Greeter/SayHello',
  id: 'b7da420c0525d087',
  kind: 2,
  timestamp: 1762787984548000,
  duration: 11739.167,
  attributes: {
    'rpc.system': 'grpc',
    'rpc.method': 'SayHello',
    'rpc.service': 'helloworld.Greeter',
    'net.peer.name': 'localhost',
    'net.peer.port': 50051,
    'rpc.grpc.status_code': 0
  },
  status: { code: 0 },
  events: [],
  links: []
}

...
```