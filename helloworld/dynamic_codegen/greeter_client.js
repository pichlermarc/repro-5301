/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';

const PROTO_PATH = './protos/helloworld.proto';
export const protoLoaderOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    protoLoaderOptions
);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const target = 'localhost:50051';
const client = new hello_proto.Greeter(target,
    grpc.credentials.createInsecure());

export const sayHelloAsync = promisify(client.sayHello).bind(client);

const response = await Promise.all([sayHelloAsync({name: "OTel Async User"})]);
console.log('Greeting (async):', response[0].message);