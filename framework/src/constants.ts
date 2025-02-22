/*
 * Copyright © 2019 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

export const eventWithModuleNameReg = /^([^\d][\w]+)((?:_[^\d][\w]+)+)$/;
export const moduleNameReg = /^[a-zA-Z][a-zA-Z0-9_]*$/;
export const actionWithModuleNameReg = /^[a-zA-Z][a-zA-Z0-9_]*_[a-zA-Z][a-zA-Z0-9]*$/;
export const APP_IDENTIFIER = 'app';

export const APP_EVENT_READY = 'app_ready';
export const APP_EVENT_SHUTDOWN = 'app_shutdown';

export const RPC_MODES = {
	IPC: 'ipc',
	WS: 'ws',
	HTTP: 'http',
};

export const DEFAULT_HOST = '127.0.0.1';
export const DEFAULT_PORT_P2P = 7667;
export const DEFAULT_PORT_RPC = 7887;

export const MAX_BLOCK_CACHE = 515;

export const DEFAULT_MAX_INBOUND_CONNECTIONS = 100;
export const DEFAULT_MAX_OUTBOUND_CONNECTIONS = 20;
