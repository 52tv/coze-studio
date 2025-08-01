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

import {
  DEFAULT_NODE_META_PATH,
  DEFAULT_OUTPUTS_PATH,
} from '@coze-workflow/nodes';
import {
  StandardNodeType,
  type WorkflowNodeRegistry,
  WorkflowNodeVariablesMeta,
} from '@coze-workflow/base';

import { type NodeTestMeta } from '@/test-run-kit';

import { test } from './node-test';
import { START_FORM_META } from './form-meta';

export const START_NODE_REGISTRY: WorkflowNodeRegistry<NodeTestMeta> = {
  type: StandardNodeType.Start,
  meta: {
    isStart: true,
    nodeDTOType: StandardNodeType.Start,
    size: { width: 360, height: 78.7 },
    deleteDisable: true,
    copyDisable: true,
    headerReadonly: true,
    showTrigger: ({ projectId }) =>
      // will support soon
      (!!projectId || IS_BOT_OP) && !IS_OPEN_SOURCE,
    nodeMetaPath: DEFAULT_NODE_META_PATH,
    outputsPath: DEFAULT_OUTPUTS_PATH,
    // No input port
    defaultPorts: [{ type: 'output' }],
    helpLink: '/open/docs/guides/start_end_node',
    test,
  },
  variablesMeta: WorkflowNodeVariablesMeta.DEFAULT,
  formMeta: START_FORM_META,
};
