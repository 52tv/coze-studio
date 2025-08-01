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
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

import { merge } from 'lodash-es';

export interface IToolItemContext {
  isForceShowAction: boolean;
  setIsForceShowAction: (visible: boolean) => void;
}

const DEFAULT_TOOL_ITEM_CONTEXT: IToolItemContext = {
  isForceShowAction: false,
  setIsForceShowAction: (visible: boolean) => false,
};

const ToolItemContext = createContext<IToolItemContext>(
  DEFAULT_TOOL_ITEM_CONTEXT,
);

export const ToolItemContextProvider: FC<PropsWithChildren> = props => {
  const { children } = props;

  const [_isForceShowAction, _setIsForceShowAction] = useState(false);

  return (
    <ToolItemContext.Provider
      value={merge({}, DEFAULT_TOOL_ITEM_CONTEXT, {
        isForceShowAction: _isForceShowAction,
        setIsForceShowAction: _setIsForceShowAction,
      })}
    >
      {children}
    </ToolItemContext.Provider>
  );
};

export const useToolItemContext = () => useContext(ToolItemContext);
