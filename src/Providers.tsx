// Copyright 2023 @polkadot-fellows/dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ThemedRouter } from "Themes"
import { APIProvider } from "contexts/Api"
import { HelpProvider } from "contexts/Help"
import { UIProvider } from "contexts/UI"
import { withProviders } from "library/Hooks"

// !! Provider order matters.
export const Providers = withProviders(
  APIProvider,
  HelpProvider,
  UIProvider
)(ThemedRouter)
