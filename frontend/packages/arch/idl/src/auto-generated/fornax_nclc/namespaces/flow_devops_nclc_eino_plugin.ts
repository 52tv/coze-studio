/*
 * Copyright 2025 coze-dev Authors
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
 */

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as base from './base';

export type Int64 = string | number;

export enum Platform {
  UnKnown = 0,
  Goland = 1,
  VsCode = 2,
}

export interface EinoDevopsVersion {
  min?: string;
  max?: string;
  exclude?: Array<string>;
}

export interface EinoToolSourceRequest {
  arch?: string;
  system?: string;
  plugin_version?: string;
  platform?: Platform;
  Host?: string;
  base?: base.Base;
}

export interface EinoToolSourceResponse {
  download_url?: string;
  base_resp?: base.BaseResp;
}

export interface EinoToolsVersionRequest {
  platform?: Platform;
  plugin_version?: string;
  base?: base.Base;
}

export interface EinoToolsVersionResponse {
  platform?: Platform;
  eino_tool_version?: string;
  eino_devops_version?: EinoDevopsVersion;
  base_resp?: base.BaseResp;
}
/* eslint-enable */
